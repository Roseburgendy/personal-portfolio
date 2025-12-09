import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, List } from 'lucide-react';

export const MusicPlayer = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="card-glass rounded-3xl p-6 flex flex-col gap-4 h-full">
      {/* Album Art */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
        <img
          src={currentSong.albumArt}
          alt={currentSong.album}
          className="w-full h-full object-cover"
        />

        {/* Music Icon Overlay */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
      </div>

      {/* Song Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3
            className="text-xl font-bold mb-1 flex items-center gap-2"
            style={{ color: 'var(--text)' }}
          >
            {currentSong.title}
            <span
              className="text-xs font-normal px-2 py-0.5 rounded"
              style={{
                backgroundColor: 'var(--brand-scale-3-light)',
                color: 'var(--brand-scale-11-light)'
              }}
            >
              E
            </span>
          </h3>
          <p
            className="text-sm mb-1"
            style={{ color: 'var(--text)' }}
          >
            {currentSong.artist} — {currentSong.album}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-3 mt-4">
          {/* Control Buttons */}
          <div className="flex items-center justify-between px-4">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ color: 'var(--muted)' }}
            >
              <List className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ color: 'var(--muted)' }}
              >
                <SkipBack className="w-6 h-6" fill="currentColor" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                style={{
                  backgroundColor: 'var(--brand-scale-9-light)',
                  color: 'white'
                }}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" fill="currentColor" />
                ) : (
                  <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                )}
              </button>

              <button
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ color: 'var(--muted)' }}
              >
                <SkipForward className="w-6 h-6" fill="currentColor" />
              </button>
            </div>

            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ color: 'var(--muted)' }}
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
