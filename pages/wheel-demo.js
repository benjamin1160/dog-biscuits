import Image from "next/image";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function WheelDemo({ onClose }) {
  const FINAL_OFFSET = 67.5; // lands on segment 6
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);

  // Use a single variable for the post-spin UI: showPrize, following your intent to highlight the win and form in a modal.
  const [showPrize, setShowPrize] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSpin = () => {
    if (spinning) return;
    const spins = 4; // deterministic spins
    const currentAngle = rotation % 360;
    const neededOffset = FINAL_OFFSET - currentAngle;
    setRotation((prev) => prev + spins * 360 + neededOffset);
    setSpinning(true);
    setHasSpun(true);
    setShowPrize(false);  // Reset modal on spin
    setSubmitted(false);  // Reset submission state on new spin
  };

  const handleTransitionEnd = () => {
    setSpinning(false);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.4 } });
    setShowPrize(true); // Show the modal after spin animation
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (typeof window !== "undefined") {
        try {
          window.localStorage.setItem("discountCode", "WHEEL20");
        } catch {}
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
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
        {/* Pointer */}
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
            borderTop: "26px solid #f00",
            zIndex: 2,
            transition: "opacity 0.5s",
            opacity: showPrize ? 0 : 1,
          }}
        />
        {/* Wheel container with rotation */}
        <div
          style={{
            width: "100%",
            height: "100%",
            transition: spinning
              ? "transform 4s cubic-bezier(0.33, 1, 0.68, 1)"
              : "opacity 0.5s",
            transform: `rotate(${rotation}deg)`,
            opacity: showPrize ? 0 : 1,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          <Image
            src="/wheel.png"
            alt="Prize Wheel"
            width={wheelSize}
            height={wheelSize}
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>
      </div>
      {!hasSpun && (
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
      )}

      {showPrize && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px 16px",
            borderRadius: 8,
            boxShadow: "0 2px 10px #0003",
            width: 260,
            textAlign: "center",
            zIndex: 3,
          }}
        >
          {submitted ? (
            <div>
              <p style={{ fontWeight: 700, marginBottom: 12 }}>Thank you!</p>
              <p style={{ fontSize: 15, marginBottom: 20 }}>
                20% will be automatically applied at checkout.
              </p>
              <button
                onClick={() => onClose && onClose()}
                style={{
                  padding: "10px 20px",
                  background: "#2962ff",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p style={{ fontWeight: 700, marginBottom: 10 }}>
                You won 20% OFF total purchase!
              </p>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: "8px 12px",
                  fontSize: 15,
                  borderRadius: 6,
                  border: "1px solid #ccc",
                  marginBottom: 10,
                  width: 220,
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "8px 16px",
                  background: "#2962ff",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontSize: 15,
                }}
              >
                Claim
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
