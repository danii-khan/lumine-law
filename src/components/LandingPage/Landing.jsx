import { Container, Box, Text, VStack, Button } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import MainBg from "../../assets/landing/main-bg.png";
import "../../styles/fonts.css";
import { Helmet } from "react-helmet";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import PanelsSection from "./PanelsSection";
import NewsNInsightsSection from "./NewsNInisghtsSection";
import ScrollSpySidebar from "./ScrollSpySidebar";
import { useEffect, useRef } from "react";

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
        msOverflowStyle: "none", // Optional: hides scrollbar in IE
        scrollbarWidth: "none", // Optional: hides scrollbar in Firefox
      }}
    >
      <Helmet>
        <title>Lumine Law Home</title>
      </Helmet>

      {/* Hero section content */}
      <section
        id="none"
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          height: "100vh",
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
                  fontStyle: "italic",
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
            <Button
              background={"none"}
              color={"white"}
              border={"1px solid #FFFFFF"}
              borderRadius={"8px"}
              fontSize={{
                xs: "11px",
                sm: "12px",
                md: "13px",
                lg: "14px",
                xl: "15px",
                "2xl": "16px",
              }}
              fontWeight={500}
              fontFamily={"CeraRoundPro"}
              _hover={{
                borderColor: "#beab7c",
                backgroundColor: "black",
                color: "#beab7c",
                transition: "all 0.3s ease",
              }}
            >
              Explore Now
            </Button>
          </VStack>
        </Box>
      </section>

      {/* Sidebar */}
      <ScrollSpySidebar />

      {/* About */}
      <section
        id="Who-we-are"
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          height: "100vh",
        }}
      >
        <AboutSection />
      </section>

      {/* Services content */}
      <section
        id="Our-Services"
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          height: "100vh",
          // paddingTop: "50px",
        }}
      >
        <ServicesSection />
      </section>

      {/* Panels content */}
      <section
        id="Panels"
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          height: "100vh",
        }}
      >
        <PanelsSection />
      </section>

      {/* News and Insights content */}
      <section
        id="News-and-Insights"
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          height: "100vh",
        }}
      >
        <NewsNInsightsSection />
      </section>

      {/* Footer  */}
      <section
        id="Footer"
        style={{
          scrollSnapAlign: "start none",
          // height: { xs: "90vh", lg: "none" },
          scrollBehavior: "smooth",
          overscrollBehavior: "none",
          WebkitOverflowScrolling: "touch", // For older iOS
          // touchAction: "none",
          position: "relative", // Helps with iOS momentum scrolling
          zIndex: 1, // Ensures proper stacking context
          // Prevents bounce effect on iOS
          WebkitBounce: "none",
          // Additional properties for cross-browser compatibility
          MozOverscrollBehavior: "none",
          msOverscrollBehavior: "none",
          overflow: "hidden",
        }}
      >
        <Footer />
      </section>
    </Container>
  );
};

export default LandingPage;
