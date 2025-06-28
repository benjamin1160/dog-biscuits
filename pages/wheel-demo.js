import { useState } from 'react';

export default function WheelDemo() {
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    const spins = Math.floor(Math.random() * 3) + 3; // 3-5 full rotations
    const finalAngle = spins * 360 + 22.5; // 22.5deg offsets the 20% slice to top
    setAngle(finalAngle);
    setTimeout(() => setSpinning(false), 4000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ position: 'relative', width: 300, height: 300 }}>
        {/* 22.5deg is (360 - 337.5deg). 337.5deg is the center of the 8th slice (20% Off). Rotating by this amount aligns that slice at 12 o'clock. */}
        <img
          src="/wheel.png"
          alt="Prize Wheel"
          style={{
            width: '100%',
            height: '100%',
            transform: `rotate(${angle}deg)`,
            transition: 'transform 4s ease-out'
          }}
        />
        <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', fontSize: 32 }}>
          ▼
        </div>
      </div>
      <button onClick={spin} disabled={spinning} style={{ marginTop: 20, padding: '8px 16px', fontWeight: 700 }}>
        Spin
      </button>
    </div>
  );
}
