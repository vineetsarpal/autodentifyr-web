import React from "react";
import { AbsoluteFill, Audio, Sequence, interpolate, staticFile, useVideoConfig, useCurrentFrame } from "remotion";
import { Step } from "./Step";
import { Tap } from "./Tap";
import { Loader } from "./Loader";
import { HomeScreen } from "./HomeScreen";
import { LoginSequence } from "./LoginSequence";

export const UserJourney: React.FC = () => {
  const { width, height, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();
  
  // Audio fade out over the last 30 frames
  const volume = interpolate(
    frame,
    [durationInFrames - 30, durationInFrames - 1],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Audio src={staticFile("assets/CorporateTech.mp3")} volume={volume} />

      {/* Step 0: Home Screen */}
      <Sequence from={0} durationInFrames={45}>
        <HomeScreen />
        <Sequence from={15}>
          <Tap x={width / 2} y={height / 2} />
        </Sequence>
      </Sequence>

      {/* Step 1: Login Screen */}
      <Sequence from={45} durationInFrames={90}>
        <Step imgSrc="assets/app_1-login.jpeg" />
        <LoginSequence />
        <Sequence from={60}>
          <Tap x={width / 2} y={height * 0.65} /> {/* Adjusted for login button */}
        </Sequence>
      </Sequence>

      {/* Step 2: Home Screen (Internal) */}
      <Sequence from={135} durationInFrames={75}>
        <Step imgSrc="assets/app_2-home.jpeg" />
        <Sequence from={30}>
          <Tap x={width / 2} y={height * 0.45} /> {/* upload image option */}
        </Sequence>
      </Sequence>

      {/* Step 3: Upload Image */}
      <Sequence from={210} durationInFrames={75}>
        <Step imgSrc="assets/app_3-upload-image-screen.jpeg" />
        <Sequence from={30}>
          {/* Wait, the button is "Select Image" which should be around middle. */}
          <Tap x={width - 150} y={height * 0.92} /> 
        </Sequence>
      </Sequence>

      {/* Step 4: Gallery */}
      <Sequence from={285} durationInFrames={75}>
        <Step imgSrc="assets/app_4-gallery-screen.jpeg" />
        <Sequence from={30}>
          <Tap x={width * 0.85} y={height * 0.92} /> {/* done button */}
        </Sequence>
      </Sequence>

      {/* Step 5: Detection Result */}
      <Sequence from={360} durationInFrames={105}>
        <Step imgSrc="assets/app_5-detection.jpeg" />
        <Sequence from={0} durationInFrames={45}>
          <Loader />
        </Sequence>
      </Sequence>

    </AbsoluteFill>
  );
};
