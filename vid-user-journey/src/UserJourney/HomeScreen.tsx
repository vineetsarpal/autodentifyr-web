import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const HomeScreen: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps, width } = useVideoConfig();

    // Tap icon at frame 15
    const tapScale = spring({
        frame: frame - 15,
        fps,
        config: { damping: 12, mass: 0.5 },
    });

    const isTapped = frame >= 15;
    const iconScale = isTapped ? interpolate(tapScale, [0, 1], [1, 0.9]) : 1;

    // Open app at frame 30
    const appOpenScale = spring({
        frame: frame - 30,
        fps,
        config: { damping: 15 },
    });

    // Expand icon to cover screen
    const mainScale = interpolate(appOpenScale, [0, 1], [1, width / 60]);
    const opacity = interpolate(appOpenScale, [0, 1], [1, 0]);

    return (
        <AbsoluteFill style={{ backgroundColor: "#222222", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Img 
                    src={staticFile("logo.svg")} 
                    style={{ 
                        width: 120, 
                        height: 120, 
                        transform: `scale(${iconScale * mainScale})`,
                        transformOrigin: "center center",
                    }} 
                />
                <div style={{ 
                    color: "white", 
                    fontFamily: "sans-serif",
                    fontSize: 24,
                    marginTop: 10, 
                    textAlign: "center",
                    opacity: opacity
                }}>
                    AutoDentifyr
                </div>
            </div>
        </AbsoluteFill>
    )
}
