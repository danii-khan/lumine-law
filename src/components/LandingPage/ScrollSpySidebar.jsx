import { VStack, Button, Flex } from "@chakra-ui/react";
import "../../styles/fonts.css";
import { useEffect, useState } from "react";

const ScrollSpySidebar = () => {
  const [activeSection, setActiveSection] = useState("none");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.9 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: isMobile ? 0.8 : 0.9 } // Lower threshold for mobile
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
    const container = document.querySelector(".scroll-container");

    if (section && container) {
      const sectionTop = section.offsetTop - navbarHeight;
      container.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const sectionIds = [
    "Who-we-are",
    "Our-Services",
    "Panels",
    "News-and-Insights",
  ];

  // Find the index of the active section
  const activeIndex = sectionIds.indexOf(activeSection);

  return (
    <Flex
      position="fixed"
      left="0%"
      top={
        activeSection === "Who-we-are"
          ? { xs: "55%", md: "60%", lg: "55%", xl: "52.5%", "2xl": "55%" }
          : activeSection === "Our-Services"
          ? { xs: "52.5%", md: "50%", lg: "50%", xl: "50%", "2xl": "50%" }
          : activeSection === "Panels"
          ? { xs: "57.5%", md: "55%", lg: "50%", xl: "50%", "2xl": "50%" }
          : activeSection === "News-and-Insights"
          ? { xs: "50%", md: "45%", lg: "45%", xl: "50%", "2xl": "50%" }
          : "50%"
      }
      transform="translateY(-50%)"
      height={
        activeSection === "Who-we-are"
          ? { xs: "85vh", md: "85vh", lg: "80vh", xl: "80vh", "2xl": "80vh" }
          : activeSection === "Our-Services"
          ? { xs: "87.5vh", md: "90vh", lg: "90vh", xl: "90vh", "2xl": "95vh" }
          : activeSection === "Panels"
          ? { xs: "90vh", md: "90vh", lg: "95vh", xl: "95vh", "2xl": "95vh" }
          : activeSection === "News-and-Insights"
          ? {
              xs: "90vh",
              md: "90vh",
              lg: "95vh",
              xl: "97.5vh",
              "2xl": "97.5vh",
            }
          : "80vh"
      }
      flexDirection="column"
      justifyContent="space-evenly"
      gap={"60%"}
      zIndex={999}
      pointerEvents="auto"
    >
      {/* Visited and Current Sections at Top */}
      <VStack align="flex-start" spacing={2} gap={0}>
        {activeSection !== "none" &&
          sectionIds.slice(0, activeIndex + 1).map((id) => (
            <Button
              size={{ xs: "2xs", md: "sm" }}
              key={id}
              pl={0}
              variant="ghost"
              onClick={() => scrollToSection(id)}
              background="none"
              color={
                activeSection === "Who-we-are" || activeSection === "Panels"
                  ? "white"
                  : "black"
              }
              _hover={{
                color:
                  activeSection === "Who-we-are" || activeSection === "Panels"
                    ? "#beab7c"
                    : "#383636",
                opacity: "100%",
              }}
              fontWeight={400}
              fontStyle="italic"
              fontSize={
                activeSection === id
                  ? {
                      xs: "20px",
                      md: "24px",
                      lg: "26px",
                      xl: "28px",
                      "2xl": "36px",
                    }
                  : {
                      xs: "8px",
                      md: "10px",
                      lg: "12px",
                      xl: "14px",
                      "2xl": "16px",
                    }
              }
              opacity={activeSection === id ? "100%" : "25%"}
              transition="all 0.3s ease"
            >
              <span
                style={{
                  border: "1px solid",
                  borderColor:
                    activeSection === "Who-we-are" || activeSection === "Panels"
                      ? "white"
                      : "black",
                  width: "7.5vw",
                  marginRight: "15px",
                  opacity: activeSection === id ? "100%" : "25%",
                  transition: "opacity 0.3s ease",
                }}
              ></span>
              {id.split("-").join(" ")}
            </Button>
          ))}
      </VStack>

      {/* Unvisited Sections at Bottom */}
      <VStack align="flex-start" spacing={2} gap={0}>
        {activeSection !== "none" &&
          sectionIds.slice(activeIndex + 1).map((id) => (
            <Button
              key={id}
              size={{ xs: "2xs", md: "sm" }}
              pl={0}
              variant="ghost"
              onClick={() => scrollToSection(id)}
              background="none"
              color={
                activeSection === "Who-we-are" || activeSection === "Panels"
                  ? "white"
                  : "black"
              }
              _hover={{
                color:
                  activeSection === "Who-we-are" || activeSection === "Panels"
                    ? "#beab7c"
                    : "#383636",
                opacity: "100%",
              }}
              fontWeight={400}
              fontStyle="italic"
              fontSize={{
                xs: "8px",
                md: "10px",
                lg: "12px",
                xl: "14px",
                "2xl": "16px",
              }}
              opacity="80%"
              transition="all 0.3s ease"
            >
              <span
                style={{
                  border: "1px solid",
                  borderColor:
                    activeSection === "Who-we-are" || activeSection === "Panels"
                      ? "white"
                      : "black",
                  width: "2.5vw",
                  opacity: "80%",
                  transition: "opacity 0.3s ease",
                }}
              ></span>
              {id.split("-").join(" ")}
            </Button>
          ))}
      </VStack>
    </Flex>
  );
};

export default ScrollSpySidebar;
