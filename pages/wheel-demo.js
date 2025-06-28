import Image from "next/image";
import { useState } from 'react';

export default function WheelDemo() {
  const [rotation, setRotation] = useState(0); // total rotation in degrees
  const [duration, setDuration] = useState(0); // animation duration in seconds
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    if (spinning) return;
    // Choose a random number of full rotations between 3 and 5
    const spins = Math.floor(Math.random() * 3) + 3;
    /*
      Each segment spans 45°. The "20% Off" segment is the 8th (last) segment,
      starting at 315°. Its center lies at 337.5°. To bring that center to the
      12 o'clock position after spinning, we rotate the wheel by 22.5°
      (360° - 337.5°) on the first spin.
    */
    const firstSpinOffset = rotation === 0 ? 22.5 : 0;
    const newRotation = rotation + spins * 360 + firstSpinOffset;
    const newDuration = 1 + spins; // e.g. 4s for 3 spins, 6s for 5 spins

    setDuration(newDuration);
    setRotation(newRotation);
    setSpinning(true);

    setTimeout(() => {
      setSpinning(false);
    }, newDuration * 1000 + 50);
  };

  const wheelSize = 320;

  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <h1>Prize Wheel Demo</h1>
      <div style={{ position: 'relative', width: wheelSize, height: wheelSize, margin: '40px auto' }}>
        {/* Pointer indicating the winning segment */}
        <div
          style={{
            position: 'absolute',
            top: -20,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '16px solid transparent',
            borderRight: '16px solid transparent',
            borderBottom: '26px solid #f00',
            zIndex: 2,
          }}
        />
        {/* The wheel image */}
          <Image
            src="/wheel.png"
            alt="Prize Wheel"
            width={wheelSize}
            height={wheelSize}
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              transform: `rotate(${rotation}deg)`,
              transition: spinning ? `transform ${duration}s cubic-bezier(0.33, 1, 0.68, 1)` : "none",
            }}
          />
      </div>
      <button
        onClick={handleSpin}
        disabled={spinning}
        style={{
          padding: '10px 20px',
          fontSize: 16,
          background: '#f9d648',
          color: '#533b19',
          fontWeight: 700,
          border: 'none',
          borderRadius: 8,
          cursor: spinning ? 'default' : 'pointer',
          boxShadow: '0 2px 6px #0002',
        }}
      >
        {spinning ? 'Spinning...' : 'Spin'}
      </button>
    </div>
  );
}
