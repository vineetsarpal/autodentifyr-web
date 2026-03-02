import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Tap: React.FC<{ x: number; y: number }> = ({ x, y }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Primary ripple
  const scale1 = interpolate(frame, [0, 20], [0.5, 1.8], {
    extrapolateRight: "clamp",
  });
  const opacity1 = interpolate(frame, [0, 10, 20], [0, 0.8, 0], {
    extrapolateRight: "clamp",
  });

  // Secondary ripple (delayed)
  const scale2 = interpolate(frame - 5, [0, 20], [0.5, 1.8], {
    extrapolateRight: "clamp",
  });
  const opacity2 = interpolate(frame - 5, [0, 10, 20], [0, 0.6, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      {/* Outer Ripple 1 */}
      <div
        style={{
          position: "absolute",
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "4px solid #00e5ff",
          left: x - 30,
          top: y - 30,
          transform: `scale(${scale1})`,
          opacity: opacity1,
          pointerEvents: "none",
        }}
      />
      {/* Outer Ripple 2 */}
      <div
        style={{
          position: "absolute",
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "2px solid #00e5ff",
          left: x - 30,
          top: y - 30,
          transform: `scale(${scale2})`,
          opacity: opacity2,
          pointerEvents: "none",
        }}
      />
      {/* Inner Dot */}
      <div
        style={{
          position: "absolute",
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "#00e5ff",
          left: x - 6,
          top: y - 6,
          opacity: opacity1,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
