import { useId } from 'react'

function Frame({ children, label }) {
  return (
    <svg
      viewBox="0 0 400 250"
      role="img"
      aria-label={label}
      className="project-plate-svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {children}
    </svg>
  )
}

function GridLines({ x = 40, y = 40 }) {
  const verticals = Array.from({ length: Math.floor(400 / x) }, (_, index) => (index + 1) * x)
  const horizontals = Array.from({ length: Math.floor(250 / y) }, (_, index) => (index + 1) * y)
  return (
    <g className="plate-grid">
      {verticals.map((value) => (
        <line key={`v-${value}`} x1={value} y1="0" x2={value} y2="250" />
      ))}
      {horizontals.map((value) => (
        <line key={`h-${value}`} x1="0" y1={value} x2="400" y2={value} />
      ))}
    </g>
  )
}

export function SortPlate() {
  const bars = [86, 132, 58, 168, 112, 190, 74, 148, 96, 176, 64, 122]
  return (
    <Frame label="Sorting algorithm illustration">
      <GridLines />
      <line x1="28" y1="206" x2="372" y2="206" className="plate-line" />
      {bars.map((height, index) => (
        <rect
          key={index}
          x={34 + index * 28}
          y={206 - height}
          width="16"
          height={height}
          rx="2"
          className={
            index === 5
              ? 'plate-red'
              : index === 9
                ? 'plate-primary'
                : index % 3 === 0
                  ? 'plate-accent'
                  : 'plate-ink'
          }
          opacity={index === 5 || index === 9 ? 1 : 0.72}
        />
      ))}
      <circle cx="300" cy="58" r="4" className="plate-green" />
      <circle cx="300" cy="58" r="12" className="plate-ring-green" />
    </Frame>
  )
}

export function GridPlate() {
  const cells = Array.from({ length: 7 * 4 }, (_, index) => index)
  const active = new Set([3, 9, 10, 16, 17, 23, 24])
  return (
    <Frame label="Dashboard grid illustration">
      <GridLines x={50} y={50} />
      {cells.map((cell) => {
        const col = cell % 7
        const row = Math.floor(cell / 7)
        return (
          <rect
            key={cell}
            x={34 + col * 50}
            y={24 + row * 50}
            width="36"
            height="36"
            rx="4"
            className={active.has(cell) ? 'plate-primary' : 'plate-cell'}
          />
        )
      })}
      <rect x="196" y="74" width="88" height="88" rx="6" className="plate-stroke-accent" />
      <circle cx="240" cy="118" r="5" className="plate-ink" />
    </Frame>
  )
}

export function PathPlate() {
  return (
    <Frame label="Pathfinding illustration">
      <GridLines x={40} y={40} />
      <polyline
        points="40,210 80,210 80,170 120,170 120,130 160,130 160,90 200,90 200,50 240,50 280,50 280,90 320,90 360,90"
        className="plate-stroke-primary"
      />
      {[
        [40, 210],
        [160, 130],
        [240, 50],
        [360, 90],
      ].map(([cx, cy], index) => (
        <g key={index}>
          <circle cx={cx} cy={cy} r="7" className={index === 3 ? 'plate-green' : 'plate-primary'} />
          <circle cx={cx} cy={cy} r="14" className="plate-ring-accent" />
        </g>
      ))}
      <rect x="300" y="150" width="42" height="42" rx="4" className="plate-stroke-ink" />
      <rect x="308" y="158" width="26" height="26" rx="2" className="plate-accent" opacity="0.5" />
    </Frame>
  )
}

export function WavePlate() {
  const paths = Array.from({ length: 5 }, (_, index) => {
    const offset = index * 18
    return `M 0 ${125 + offset} C 50 ${65 + offset}, 100 ${185 + offset}, 150 ${125 + offset} S 250 ${65 + offset}, 300 ${125 + offset} S 400 ${185 + offset}, 400 ${125 + offset}`
  })
  return (
    <Frame label="Motion wave illustration">
      <GridLines x={50} y={50} />
      {paths.map((path, index) => (
        <path
          key={index}
          d={path}
          className={index === 2 ? 'plate-stroke-primary' : 'plate-stroke-muted'}
          opacity={index === 2 ? 1 : 0.5}
        />
      ))}
      <circle cx="150" cy="125" r="5" className="plate-red" />
      <circle cx="300" cy="125" r="5" className="plate-green" />
      <line x1="150" y1="40" x2="150" y2="210" className="plate-dashed" />
      <line x1="300" y1="40" x2="300" y2="210" className="plate-dashed" />
    </Frame>
  )
}

export function HeroPlate() {
  const id = useId().replace(/:/g, '')
  return (
    <Frame label="Algorithm network illustration">
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="250" fill={`url(#${id}-glow)`} />
      <GridLines x={40} y={40} />
      <g className="plate-network">
        <line x1="80" y1="70" x2="170" y2="120" />
        <line x1="170" y1="120" x2="120" y2="190" />
        <line x1="170" y1="120" x2="270" y2="80" />
        <line x1="270" y1="80" x2="330" y2="150" />
        <line x1="270" y1="80" x2="220" y2="185" />
        <line x1="120" y1="190" x2="220" y2="185" />
        <line x1="330" y1="150" x2="220" y2="185" />
      </g>
      {[
        [80, 70, 'plate-ink'],
        [170, 120, 'plate-primary'],
        [120, 190, 'plate-accent'],
        [270, 80, 'plate-green'],
        [330, 150, 'plate-ink'],
        [220, 185, 'plate-red'],
      ].map(([cx, cy, className], index) => (
        <circle key={index} cx={cx} cy={cy} r={index === 1 ? 6 : 4.5} className={className} />
      ))}
      <circle cx="170" cy="120" r="18" className="plate-ring-primary" />
      <circle cx="270" cy="80" r="14" className="plate-ring-green" />
    </Frame>
  )
}

export const plates = {
  sort: SortPlate,
  grid: GridPlate,
  path: PathPlate,
  wave: WavePlate,
  hero: HeroPlate,
}
