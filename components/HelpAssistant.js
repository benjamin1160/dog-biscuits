import { useState, useEffect } from 'react';

export default function HelpAssistant() {
  const [open, setOpen] = useState(false);

  // Auto-open the assistant shortly after page load
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Load the model-viewer script when the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    script.type = 'module';
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            background: '#2962ff',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 16px',
            fontWeight: 600,
            cursor: 'pointer',
            zIndex: 11,
          }}
        >
          Help
        </button>
      )}

      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            zIndex: 30,
            textAlign: 'center',
          }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: -4,
              right: 0,
              background: 'transparent',
              border: 'none',
              fontSize: 18,
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            ×
          </button>
          <model-viewer
            src="/women.glb"
            autoplay
            style={{ width: 120, height: 120 }}
          />
          <div
            style={{
              background: '#2962ff',
              color: '#fff',
              padding: '6px 10px',
              borderRadius: 12,
              marginTop: 4,
              fontSize: 14,
              whiteSpace: 'nowrap',
            }}
          >
            Can I help you with anything?
          </div>
        </div>
      )}
    </>
  );
}
