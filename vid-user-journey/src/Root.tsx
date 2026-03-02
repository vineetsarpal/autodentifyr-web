import React from "react";
import { Composition } from "remotion";
import {
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "./constants";
import { UserJourney } from "./UserJourney/UserJourney";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="UserJourney"
        component={UserJourney}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
      />
    </>
  );
};
