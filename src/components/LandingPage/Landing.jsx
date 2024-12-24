import React, { Suspense, useEffect, useRef } from "react";
import { Container, Box, Text, VStack, Button } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import MainBg from "../../assets/landing/main-bg.webp";
import "../../styles/fonts.css";
import { Helmet } from "react-helmet";
const ScrollSpySidebar = React.lazy(() => import("./ScrollSpySidebar"));
const AboutSection = React.lazy(() => import("./AboutSection"));
const ServicesSection = React.lazy(() => import("./ServicesSection"));
const PanelsSection = React.lazy(() => import("./PanelsSection"));
const NewsNInsightsSection = React.lazy(() => import("./NewsNInisghtsSection"));
const Footer = React.lazy(() => import("../Footer/Footer"));

const LandingPage = () => {
  const containerRef = useRef(null);
  const lastScrollPositionRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      const footerSection = document.getElementById("Footer");
      if (!footerSection) return;

      const footerRect = footerSection.getBoundingClientRect();
      const isFooterInView =
        footerRect.top <= window.innerHeight && footerRect.bottom >= 0;

      if (isFooterInView) {
        // Allow only upward scrolling when footer is in view
        if (e.deltaY > 0) {
          // Attempting to scroll down
          e.preventDefault();
          return false;
        }
      }

      lastScrollPositionRef.current = container.scrollTop;
    };

    // Handle touch events for mobile
    let touchStart = 0;
    const handleTouchStart = (e) => {
      touchStart = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const footerSection = document.getElementById("Footer");
      if (!footerSection) return;

      const footerRect = footerSection.getBoundingClientRect();
      const isFooterInView =
        footerRect.top <= window.innerHeight && footerRect.bottom >= 0;

      if (isFooterInView) {
        const touchEnd = e.touches[0].clientY;
        const delta = touchStart - touchEnd;

        // Prevent downward scrolling when footer is in view
        if (delta > 0) {
          // Attempting to scroll down
          e.preventDefault();
          return false;
        }
      }
    };

    // Add event listeners
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    // Update title when component mounts
    document.title = "Lumine Law Home";

    // Optionally, reset title when component unmounts
    return () => {
      document.title = "Lumine Law"; // Default title
    };
  }, []);

  return (
    <Container
      className="scroll-container"
      width="100vw"
      maxWidth="100%"
      height="100vh"
      overflow="auto"
      m={0}
      p={0}
      css={{
        scrollSnapType: "y mandatory",
        scrollSnapAlign: "start none",
        "&::-webkit-scrollbar": {
          display: "none", // Optional: hides scrollbar
        },
        "::-webkit-scrollbar": {
          display: "none", // Safari and Chrome
        },
        msOverflowStyle: "none", // Optional: hides scrollbar in IE
        scrollbarWidth: "none", // Optional: hides scrollbar in Firefox
        overflow: "hidden",
        WebkitOverflowScrolling: " touch",
      }}
    >
      <Helmet>
        <title>Lumine Law Home</title>
        <meta
          name="description"
          content="Welcome to Lumine Law - Legal services and expertise"
        />
      </Helmet>

      {/* Hero section content */}
      <section
        id="none"
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          width="100%"
          height="100%"
          p={0}
          m={0}
          bgImage={`url(${MainBg})`}
          bgPos={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          display={"flex"}
          alignItems={"center"}
          mt={"10px"}
          _loading={"eager"}
        >
          <VStack
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            width={{ xs: "60%", md: "50%" }}
            ml={"5%"}
            gap={"20px"}
          >
            <Text
              fontSize={{
                xs: "20px",
                sm: "22px",
                md: "24px",
                lg: "28px",
                xl: "32px",
                "2xl": "36px",
              }}
              textAlign={"left"}
            >
              <span
                style={{
                  color: "#beab7c",
                  fontWeight: "600",
                  fontFamily: "CeraRoundPro",
                }}
              >
                We represent{" "}
              </span>
              <span
                style={{
                  color: "white",
                  fontWeight: "500",
                  fontFamily:
                    "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
                }}
              >
                what's next.
              </span>
            </Text>
            <Text
              fontSize={{
                xs: "12px",
                sm: "14px",
                md: "16px",
                lg: "20px",
                xl: "24px",
                "2xl": "28px",
              }}
              fontWeight={300}
              fontFamily="HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
              textAlign={"left"}
              color={"white"}
            >
              A whole paragraph, slightly explaining what Lumine law is, or just
              like a smaller intro paragraph.
            </Text>
          </VStack>
        </Box>
      </section>

      {/* Sidebar */}
      <Suspense fallback={<div>Loading sidebar</div>}>
        <ScrollSpySidebar />
      </Suspense>

      {/* About */}
      <section
        id="Who-we-are"
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Suspense fallback={<div>Loading About Section...</div>}>
          <AboutSection />
        </Suspense>
      </section>

      {/* Services content */}
      <section
        id="Our-Services"
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Suspense fallback={<div>Loading Services Section...</div>}>
          <ServicesSection />
        </Suspense>
      </section>

      {/* Panels content */}
      <section
        id="Panels"
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Suspense fallback={<div>Loading Panels Section...</div>}>
          <PanelsSection />
        </Suspense>
      </section>

      {/* News and Insights content */}
      <section
        id="News-and-Insights"
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Suspense fallback={<div>Loading News and Insights Section...</div>}>
          <NewsNInsightsSection />
        </Suspense>
      </section>

      {/* Footer  */}
      <section
        id="Footer"
        style={{
          scrollSnapAlign: "start none",
          scrollBehavior: "smooth",
          overscrollBehavior: "none",
          WebkitOverflowScrolling: "touch",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
          msScrollSnapY: "start",
        }}
      >
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </section>
    </Container>
  );
};

export default LandingPage;
