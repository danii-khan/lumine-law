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
            maxWidth={{
              xs: "80px",
              sm: "80px",
              md: "100px",
              lg: "125px",
              xl: "125px",
              "2xl": "175px",
            }}
          >
            <Image
              src={img}
              height={{
                xs: "25px",
                sm: "25px",
                md: "30px",
                lg: "40px",
                xl: "50px",
                "2xl": "60px",
              }}
              maxWidth={{
                xs: "80px",
                sm: "80px",
                md: "100px",
                lg: "125px",
                xl: "125px",
                "2xl": "175px",
              }}
              objectFit="contain"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const AnimatedPanels = ({ images }) => {
  return (
    <Box
      height={{
        xs: "20%",
        sm: "20%",
        md: "25%",
        lg: "30%",
        xl: "32.5%",
        "2xl": "35%",
      }}
      width="100%"
      position="relative"
      alignSelf="center"
      borderRadius="8px"
    >
      {/* Background Box with opacity */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor={"rgba(0, 0, 0, 0.25)"}
        opacity={0.75}
        borderRadius="inherit"
      />

      {/* Content Box with full opacity */}
      <VStack
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative" // This ensures content stays above the background
        zIndex={1} // This ensures content stays above the background
      >
        <ScrollingRow images={images} direction="left" speed={50} />
        <ScrollingRow images={images} direction="right" speed={45} />
        <ScrollingRow images={images} direction="left" speed={30} />
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
