import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

export const Step: React.FC<{
  imgSrc: string;
}> = ({ imgSrc }) => {
  // We don't animate the image entering as they are full screens just replacing each other like an app screen transition.
  return (
    <AbsoluteFill>
      <Img 
        src={staticFile(imgSrc)} 
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover" 
        }} 
      />
    </AbsoluteFill>
  );
};
