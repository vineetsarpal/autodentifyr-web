import React from "react";
import { AbsoluteFill, useVideoConfig, useCurrentFrame } from "remotion";

export const Loader: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const rotation = (frame / fps) * 360 * 2; // 2 rotations per second

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "6px solid rgba(255, 255, 255, 0.3)",
          borderTopColor: "#fff",
          transform: `rotate(${rotation}deg)`,
        }}
      />
    </AbsoluteFill>
  );
};
