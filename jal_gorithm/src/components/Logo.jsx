/**
 * JALGORITHM pixel-art logo mark — chunky J, black and white only
 *
 * Thick pixel-art J inspired by bold pixel-font letterforms:
 *   – 3px-wide stem, 3px-tall top bar, staircase serif foot
 *   – 8-direction outline expansion fills staircase corners
 *   – No background tile, no color — pure black/white
 *
 * Light palette via CSS variables set in index.css:
 *   --logo-fill #0a0a0f (black J)  --logo-outline #ffffff (white separation)
 *
 * Props:
 *   size      — height in px (default 28)
 *   wordmark  — append "JALGORITHM" text label
 *   className — extra class on outer <span>
 */

/*
 * 14 × 20 pixel grid
 * Row 0 and 19 are empty margins so the outline doesn't clip
 *
 *   col: 00000000000000
 * r  0:  00000000000000  ← top margin
 * r  1:  01111111111110  ← top bar
 * r  2:  01111111111110
 * r  3:  01111111111110  ← top bar end
 * r  4:  00000011111000  ← stem
 * r  5:  00000011111000
 * r  6:  00000011111000
 * r  7:  00000011111000
 * r  8:  00000011111000
 * r  9:  00000011111000
 * r 10:  00000011111000
 * r 11:  00000011111000
 * r 12:  10000011111000  ← left serif stub
 * r 13:  10000011111000
 * r 14:  11111111111000  ← foot starts
 * r 15:  01111111111000
 * r 16:  00111111110000
 * r 17:  00011111100000
 * r 18:  00001111000000
 * r 19:  00000000000000  ← bottom margin
 */
const ROWS = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,1,1,1,1,1,0,0,0],
  [1,0,0,0,0,0,1,1,1,1,1,0,0,0],
  [1,0,0,0,0,0,1,1,1,1,1,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,0,0,0,0,0],
  [0,0,0,0,1,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

const COLS = 14
const GRID_H = ROWS.length  // 20

function PixelJ({ fill }) {
  const rects = []
  ROWS.forEach((row, r) => {
    row.forEach((on, c) => {
      if (on) rects.push(<rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} />)
    })
  })
  return <g fill={fill}>{rects}</g>
}

function Logo({ size = 28, wordmark = false, className = '' }) {
  /* viewBox: 2px extra on each side so the ±1 outline layers don't clip */
  const vw = COLS + 2   // 16
  const vh = GRID_H + 2 // 22

  return (
    <span
      className={['logo-wrap', className].filter(Boolean).join(' ')}
      aria-label="JALGORITHM"
      role="img"
    >
      <svg
        className="logo-mark"
        width={size}
        height={Math.round(size * (vh / vw))}
        viewBox={`0 0 ${vw} ${vh}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        style={{ display: 'block' }}
      >
        {/* Drop-shadow — 1 unit offset down-right, matches the reference. */}
        <g transform="translate(2 2)">
          <PixelJ fill="var(--logo-shadow)" />
        </g>

        {/*
          Outline — drawn at all 8 cardinal+diagonal offsets of ±1
          This fills the staircase corners with the outline colour,
          giving the chunky pixel-art border seen in the reference J.
        */}
        <g>
          <g transform="translate(-1  0)"><PixelJ fill="var(--logo-outline)" /></g>
          <g transform="translate( 1  0)"><PixelJ fill="var(--logo-outline)" /></g>
          <g transform="translate( 0 -1)"><PixelJ fill="var(--logo-outline)" /></g>
          <g transform="translate( 0  1)"><PixelJ fill="var(--logo-outline)" /></g>
          <g transform="translate(-1 -1)"><PixelJ fill="var(--logo-outline)" /></g>
          <g transform="translate( 1 -1)"><PixelJ fill="var(--logo-outline)" /></g>
          <g transform="translate(-1  1)"><PixelJ fill="var(--logo-outline)" /></g>
          <g transform="translate( 1  1)"><PixelJ fill="var(--logo-outline)" /></g>
        </g>

        {/* Fill — on top of the outline */}
        <PixelJ fill="var(--logo-fill)" />
      </svg>

      {wordmark && <span className="logo-wordmark">JALGORITHM</span>}
    </span>
  )
}

export default Logo
