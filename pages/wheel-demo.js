import { useState } from 'react';

export default function WheelDemo() {
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    const spins = Math.floor(Math.random() * 3) + 3; // 3-5 full rotations
    // The 20% Off slice is the 8th slice. Each slice spans 45deg, so its center
    // is at 337.5deg (7.5 * 45). We rotate the wheel so this center ends at 0deg
    // (12 o'clock). The current angle may be any value, so we adjust by the
    // remainder of the current angle modulo 360.
    const offset = 22.5 - (angle % 360); // 22.5deg = 360 - 337.5deg
    const finalAngle = angle + spins * 360 + offset;
    setAngle(finalAngle);
    setTimeout(() => setSpinning(false), 4000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ position: 'relative', width: 300, height: 300 }}>
        {/* The image is rotated via the angle state. The offset calculation above
            ensures the 20% slice's center ends at the top after the spin. */}
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
