import { useEffect, useRef } from 'react'

const RAMP = ' .,:;-~=+*#%@'

/**
 * AsciiPlate — draws an image as monochrome ASCII on a canvas.
 * Colour is discarded: only luminance survives, inked in the site's text colour,
 * so every project plate reads as black on white regardless of the source art.
 */
function AsciiPlate({ src, label }) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return undefined

    const ctx = canvas.getContext('2d')
    const probe = document.createElement('canvas')
    const pctx = probe.getContext('2d', { willReadFrequently: true })
    const image = new Image()
    let loaded = false
    let frame = 0

    const draw = () => {
      if (!loaded) return
      const width = wrap.clientWidth
      const height = wrap.clientHeight
      if (!width || !height) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      const fontSize = width < 340 ? 6 : 7
      const cellW = fontSize * 0.6
      const cellH = fontSize * 1.05
      const cols = Math.max(8, Math.floor(width / cellW))
      const rows = Math.max(4, Math.floor(height / cellH))

      /* fit the whole image (contain) on white, then sample one pixel per cell */
      probe.width = cols
      probe.height = rows
      pctx.fillStyle = '#fff'
      pctx.fillRect(0, 0, cols, rows)
      const iw = image.naturalWidth || image.width || 1
      const ih = image.naturalHeight || image.height || 1
      const cellAspect = cellH / cellW
      const scale = Math.min(cols / iw, rows / (ih / cellAspect))
      const dw = iw * scale
      const dh = (ih * scale) / cellAspect
      pctx.imageSmoothingEnabled = true
      pctx.imageSmoothingQuality = 'high'
      pctx.drawImage(image, (cols - dw) / 2, (rows - dh) / 2, dw, dh)

      const data = pctx.getImageData(0, 0, cols, rows).data
      const lum = new Float32Array(cols * rows)
      for (let i = 0; i < lum.length; i++) {
        lum[i] = (0.2126 * data[i * 4] + 0.7152 * data[i * 4 + 1] + 0.0722 * data[i * 4 + 2]) / 255
      }

      /* stretch contrast per image so washed-out art still reads */
      const sorted = Float32Array.from(lum).sort()
      const lo = sorted[Math.floor(sorted.length * 0.02)]
      const hi = Math.max(lo + 0.1, sorted[Math.floor(sorted.length * 0.9)])

      const ink = getComputedStyle(wrap).color
      ctx.font = `500 ${fontSize}px "JetBrains Mono", ui-monospace, Consolas, monospace`
      ctx.textBaseline = 'top'
      ctx.fillStyle = ink

      for (let y = 0; y < rows; y++) {
        let line = ''
        for (let x = 0; x < cols; x++) {
          const n = Math.min(1, Math.max(0, (lum[y * cols + x] - lo) / (hi - lo)))
          const density = Math.pow(1 - n, 1.25)
          line += density < 0.07 ? ' ' : RAMP[Math.min(RAMP.length - 1, Math.round(density * (RAMP.length - 1)))]
        }
        ctx.fillText(line, 0, y * cellH)
      }
    }

    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(draw)
    }

    image.onload = () => {
      loaded = true
      schedule()
    }
    image.decoding = 'async'
    image.src = src

    const observer = new ResizeObserver(schedule)
    observer.observe(wrap)
    document.fonts?.ready.then(schedule)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      image.onload = null
    }
  }, [src])

  return (
    <div ref={wrapRef} className="ascii-plate" role="img" aria-label={label}>
      <canvas ref={canvasRef} className="ascii-canvas" />
    </div>
  )
}

export default AsciiPlate
