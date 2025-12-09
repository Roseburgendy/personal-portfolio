import { useState } from 'react';
import { Grid3x3, ThumbsUp, Heart, Smile, Paw } from 'lucide-react';

export const PhotoWidget = ({ photo }) => {
  const [activeAction, setActiveAction] = useState(null);

  const actions = [
    { id: 'grid', icon: Grid3x3, label: 'Grid' },
    { id: 'like', icon: ThumbsUp, label: 'Like' },
    { id: 'heart', icon: Heart, label: 'Heart' },
    { id: 'paw', icon: Paw, label: 'Paw' }
  ];

  return (
    <div className="card-glass rounded-3xl overflow-hidden h-full flex flex-col">
      {/* Photo Container */}
      <div className="relative flex-1 min-h-[400px]">
        <img
          src={photo.image}
          alt={photo.title}
          className="w-full h-full object-cover"
        />

        {/* Photos Icon Overlay */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 25%, #4ECDC4 50%, #556FB5 75%, #C44569 100%)'
          }}
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
        </div>
      </div>

      {/* Action Bar */}
      <div
        className="flex items-center justify-around p-4"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        {actions.map((action) => {
          const Icon = action.icon;
          const isActive = activeAction === action.id;

          return (
            <button
              key={action.id}
              onClick={() => setActiveAction(action.id)}
              className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all"
              style={{
                backgroundColor: isActive ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                color: isActive ? 'var(--brand-scale-11-light)' : 'var(--muted)'
              }}
              aria-label={action.label}
            >
              <Icon className="w-6 h-6" strokeWidth={2} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
