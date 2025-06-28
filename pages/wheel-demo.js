import Image from "next/image";
import { useState } from "react";

export default function WheelDemo() {
  // Each prize takes up 45\u00b0 of the circle.
  // Segment 8 ("20% Off") spans 315\u00b0–360\u00b0 with its center at 337.5\u00b0.
  // To line this segment up with the pointer at 0\u00b0 we add a constant
  // 22.5\u00b0 rotation (360\u00b0 - 337.5\u00b0).
  const FINAL_OFFSET = 22.5;

  const [rotation, setRotation] = useState(0); // current wheel angle
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    if (spinning) return;

    const spins = Math.floor(Math.random() * 3) + 3; // 3–5 full turns

    // Offset needed so the wheel always stops with segment 8 at the top.
    const currentAngle = rotation % 360;
    const neededOffset = FINAL_OFFSET - currentAngle;

    // Update rotation based on the latest state value to avoid stale closures
    setRotation((prev) => prev + spins * 360 + neededOffset);
    setSpinning(true);
  };

  const handleTransitionEnd = () => {
    setSpinning(false);
  };

  const wheelSize = 320;

  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <h1>Prize Wheel Demo</h1>
      <div
        style={{
          position: "relative",
          width: wheelSize,
          height: wheelSize,
          margin: "40px auto",
        }}
      >
        {/* Pointer showing the winning position */}
        <div
          style={{
            position: "absolute",
            top: -20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "16px solid transparent",
            borderRight: "16px solid transparent",
            borderBottom: "26px solid #f00",
            zIndex: 2,
          }}
        />

        {/* Rotating wheel image */}
        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            width: "100%",
            height: "100%",
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? "transform 4s cubic-bezier(0.33, 1, 0.68, 1)"
              : "none",
          }}
        >
          <Image
            src="/wheel.png"
            alt="Prize Wheel"
            width={wheelSize}
            height={wheelSize}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <button
        onClick={handleSpin}
        disabled={spinning}
        style={{
          padding: "10px 20px",
          fontSize: 16,
          background: "#f9d648",
          color: "#533b19",
          fontWeight: 700,
          border: "none",
          borderRadius: 8,
          cursor: spinning ? "default" : "pointer",
          boxShadow: "0 2px 6px #0002",
        }}
      >
        {spinning ? "Spinning..." : "Spin"}
      </button>
    </div>
  );
}

