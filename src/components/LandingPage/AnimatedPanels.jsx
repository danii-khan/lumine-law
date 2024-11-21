import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

const ScrollingRow = ({ images, direction, speed }) => {
  // Create four sets of images to ensure no gaps
  const multipliedImages = [...images, ...images, ...images, ...images];

  return (
    <Box
      className="scroll-row"
      position="relative"
      width="100%"
      height="100px"
      overflow="hidden"
      whiteSpace="nowrap"
      onMouseEnter={(e) => {
        e.currentTarget.querySelector(
          ".scroll-content"
        ).style.animationPlayState = "paused";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector(
          ".scroll-content"
        ).style.animationPlayState = "running";
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        className="scroll-content"
        position="absolute"
        display="flex"
        alignItems="center"
        animation={`scroll${
          direction === "left" ? "Left" : "Right"
        } ${speed}s linear infinite`}
        // Set initial position for right-scrolling rows
        style={direction === "right" ? { left: 100 } : { left: 0 }}
      >
        {multipliedImages.map((img, index) => (
          <Box
            key={index}
            px="4"
            display="flex"
            alignItems="center"
            justifyContent="center"
            maxWidth="175px"
          >
            <Image src={img} height="60px" maxWidth="175px" objectFit="cover" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const AnimatedPanels = ({ images }) => {
  return (
    <Box
      height="50%"
      width="90%"
      position="relative"
      alignSelf="center"
      borderRadius="8px"
      py="8"
    >
      {/* Background Box with opacity */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor="white"
        opacity={0.75}
        borderRadius="inherit"
      />

      {/* Content Box with full opacity */}
      <VStack
        // spacing={8}
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative" // This ensures content stays above the background
        zIndex={1} // This ensures content stays above the background
      >
        <ScrollingRow images={images} direction="left" speed={20} />
        <ScrollingRow images={images} direction="right" speed={15} />
        <ScrollingRow images={images} direction="left" speed={10} />
      </VStack>
    </Box>
  );
};

// Updated keyframe animations for smoother looping
const style = document.createElement("style");
style.textContent = `
  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  @keyframes scrollRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  
  .scroll-row .scroll-content {
    animation-play-state: running;
    will-change: transform;
  }

  .scroll-row {
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 5%,
      black 95%,
      transparent 100%
    );
  }
`;
document.head.appendChild(style);

export default AnimatedPanels;
