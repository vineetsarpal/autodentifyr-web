import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const LoginSequence: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const email = "user@example.com";
    const password = "••••••••";

    // Type email between frames 10 and 40
    const emailLength = Math.floor(interpolate(frame, [10, 20], [0, email.length], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
    const currentEmail = email.substring(0, emailLength);

    // Type password between frames 50 and 80
    const passwordLength = Math.floor(interpolate(frame, [30, 40], [0, password.length], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
    const currentPassword = password.substring(0, passwordLength);

    return (
        <AbsoluteFill>
            {/* Email Field Overlay */}
            <div style={{
                position: "absolute",
                top: 620, // Adjusted downwards
                left: 150,
                fontSize: 38,
                color: "white",
                fontFamily: "sans-serif",
                width: 600,
            }}>
                {currentEmail}
            </div>

            {/* Password Field Overlay */}
            <div style={{
                position: "absolute",
                top: 800, // Adjusted downwards
                left: 150,
                fontSize: 42,
                color: "white",
                fontFamily: "sans-serif",
                width: 600,
                letterSpacing: 4
            }}>
                {currentPassword}
            </div>
        </AbsoluteFill>
    );
};
