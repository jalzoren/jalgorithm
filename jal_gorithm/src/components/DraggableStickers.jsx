import { useRef, useState } from 'react'

function DraggableStickers({ stickers }) {
  const containerRef = useRef(null)
  const dragRef = useRef(null)
  const [positions, setPositions] = useState({})

  const moveSticker = (id, element, left, top) => {
    const container = containerRef.current
    if (!container) return

    setPositions((current) => ({
      ...current,
      [id]: {
        left: Math.max(0, Math.min(left, container.clientWidth - element.offsetWidth)),
        top: Math.max(0, Math.min(top, container.clientHeight - element.offsetHeight)),
        right: 'auto',
        bottom: 'auto',
      },
    }))
  }

  const onPointerDown = (event, id) => {
    if (event.button !== 0 || !containerRef.current) return

    const sticker = event.currentTarget
    const bounds = sticker.getBoundingClientRect()
    const containerBounds = containerRef.current.getBoundingClientRect()
    dragRef.current = {
      id,
      pointerId: event.pointerId,
      offsetX: event.clientX - bounds.left,
      offsetY: event.clientY - bounds.top,
    }

    moveSticker(id, sticker, bounds.left - containerBounds.left, bounds.top - containerBounds.top)
    sticker.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event) => {
    const drag = dragRef.current
    const container = containerRef.current
    if (!drag || drag.pointerId !== event.pointerId || !container) return

    const bounds = container.getBoundingClientRect()
    moveSticker(
      drag.id,
      event.currentTarget,
      event.clientX - bounds.left - drag.offsetX,
      event.clientY - bounds.top - drag.offsetY,
    )
  }

  const onPointerUp = (event) => {
    if (dragRef.current?.pointerId !== event.pointerId) return
    dragRef.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const onKeyDown = (event, id) => {
    const directions = {
      ArrowUp: [0, -12],
      ArrowDown: [0, 12],
      ArrowLeft: [-12, 0],
      ArrowRight: [12, 0],
    }
    const direction = directions[event.key]
    if (!direction) return

    event.preventDefault()
    const sticker = event.currentTarget
    const container = containerRef.current
    if (!container) return

    const bounds = sticker.getBoundingClientRect()
    const containerBounds = container.getBoundingClientRect()
    const current = positions[id] ?? {
      left: bounds.left - containerBounds.left,
      top: bounds.top - containerBounds.top,
    }
    moveSticker(id, sticker, current.left + direction[0], current.top + direction[1])
  }

  return (
    <div className="section-stickers" ref={containerRef}>
      {stickers.map((sticker) => (
        <div
          className={`section-sticker section-sticker--${sticker.shape} section-sticker--${sticker.position}`}
          key={sticker.id}
          role="button"
          tabIndex={0}
          aria-label={`${sticker.label}. Drag to move, or use the arrow keys.`}
          aria-keyshortcuts="ArrowUp ArrowDown ArrowLeft ArrowRight"
          onPointerDown={(event) => onPointerDown(event, sticker.id)}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={(event) => onKeyDown(event, sticker.id)}
          style={positions[sticker.id]}
        >
          <span className="section-sticker-mark" aria-hidden="true">{sticker.mark}</span>
          <span>{sticker.label}</span>
        </div>
      ))}
    </div>
  )
}

export default DraggableStickers
