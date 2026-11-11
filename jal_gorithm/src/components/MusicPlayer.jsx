import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CloseIcon } from './icons.jsx'

const track = {
  title: '(Only) About Love - Demo',
  artist: 'grentperez',
  src: '/music/%28Only%29%20About%20Love%20-%20Demo%20-%20grentperez.m4a',
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00'
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${minutes}:${remainingSeconds}`
}

function MusicPlayer({ isOpen, onClose }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.75)
  const [error, setError] = useState('')

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        setError('')
        await audio.play()
      } catch {
        setIsPlaying(false)
        setError('This audio could not be played in your browser.')
      }
    } else {
      audio.pause()
    }
  }

  const seek = (event) => {
    const audio = audioRef.current
    if (!audio || !Number.isFinite(audio.duration)) return

    const nextTime = Number(event.target.value)
    audio.currentTime = nextTime
    setCurrentTime(nextTime)
  }

  return (
    <>
      <audio
        ref={audioRef}
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onDurationChange={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false)
          setError('The M4A track could not be loaded.')
        }}
      >
        <source src={track.src} type="audio/mp4" />
      </audio>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="nav-music-player"
            className="nav-music-player"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            <div className="nav-music-heading">
              <div className="nav-music-brand">
                <button
                  type="button"
                  className="music-disc-button"
                  onClick={togglePlayback}
                  aria-label={isPlaying ? 'Pause track' : 'Play track'}
                >
                  <span className={isPlaying ? 'music-disc is-playing' : 'music-disc'} aria-hidden="true">
                    <span className="music-disc-center">
                      {isPlaying ? (
                        <svg viewBox="0 0 24 24"><path d="M8 5h3v14H8zM15 5h3v14h-3z" fill="currentColor" /></svg>
                      ) : (
                        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
                      )}
                    </span>
                  </span>
                </button>
                <div>
                  <span className="mono nav-music-kicker">JALGORITHM · LISTENING ROOM</span>
                  <strong>{track.title}</strong>
                  <span className="nav-music-artist">{track.artist}</span>
                </div>
              </div>
              <button
                type="button"
                className="icon-button"
                aria-label="Close music player"
                onClick={onClose}
              >
                <CloseIcon size={14} />
              </button>
            </div>

            <div className="nav-music-source mono">
              <span className="status-dot" aria-hidden="true" />
              LOCAL AUDIO · M4A
            </div>

            <div className="music-controls">
              <div className="music-timeline">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  step="0.1"
                  value={Math.min(currentTime, duration || 0)}
                  onChange={seek}
                  disabled={!duration}
                  aria-label="Seek track"
                  style={{ '--music-progress': `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
                <div className="music-time mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            <label className="music-volume mono">
              <span>VOL</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(event) => setVolume(Number(event.target.value))}
                aria-label="Volume"
                style={{ '--music-progress': `${volume * 100}%` }}
              />
            </label>

            {error && <p className="nav-music-error" role="status">{error}</p>}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MusicPlayer
