import { useEffect } from 'react';

export default function HelpModal({ onClose }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    script.type = 'module';
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 30,
      }}
    >
      <div style={{ position: 'relative', background: '#fff', padding: 20, borderRadius: 12, textAlign: 'center' }}>
        <button
          onClick={() => onClose && onClose()}
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            background: 'transparent',
            border: 'none',
            fontSize: 22,
            cursor: 'pointer',
          }}
        >
          ×
        </button>
        <model-viewer
          src="/women.glb"
          autoplay
          camera-controls
          style={{ width: 300, height: 300 }}
        />
        <p style={{ marginTop: 16, fontWeight: 600 }}>Can I help you with anything?</p>
      </div>
    </div>
  );
}
