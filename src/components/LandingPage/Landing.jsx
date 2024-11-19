import { Container, Box, Text, VStack, Button, HStack } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import MainBg from "../../assets/landing/main-bg.jpg";
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

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <VStack
      position="fixed"
      left="0%"
      top="50%"
      transform="translateY(-50%)"
      gap={"10px"}
      align="flex-start"
    >
      {activeSection !== "none" &&
        ["Who-we-are", "Our-services", "Panels", "News", "Insights"].map(
          (id) => (
            <>
              <HStack>
                <Button
                  key={id}
                  pl={0}
                  variant="ghost"
                  onClick={() => scrollToSection(id)}
                  background={"none"}
                  color={"white"}
                  _hover={{ color: "#beab7c", opacity: "100%" }}
                  // fontFamily="CeraRoundPro"
                  fontWeight={400}
                  fontStyle={"italic"}
                  fontSize={activeSection === id ? "40px" : "20px"}
                  mb={activeSection === id ? "100%" : "0"}
                  opacity={activeSection === id ? "100%" : "25%"}
                >
                  <span
                    style={{
                      border: "1px solid white",
                      width: "50px",
                      opacity: `${activeSection === id ? "100%" : "25%"}`,
                      mb: `${activeSection === id ? "100px" : "0"}`,
                    }}
                  ></span>
                  {id.split("-").join(" ")}
                </Button>
              </HStack>
            </>
          )
        )}
    </VStack>
  );
};

const LandingPage = () => {
  return (
    <Container width="100vw" maxWidth="100%" overflow="hidden" m={0} p={0}>
      <Navbar />
      {/* Hero Section */}
      <section id="none">
        <Box
          width="100%"
          height="90vh"
          p={0}
          m={0}
          bgImage={`url(${MainBg})`}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          display={"flex"}
          alignItems={"center"}
        >
          <VStack
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            width={"50%"}
            ml={"5%"}
            gap={"20px"}
          >
            <Text fontSize={"36px"} textAlign={"left"}>
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
              fontSize={"28px"}
              fontWeight={300}
              fontFamily="HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
              textAlign={"left"}
            >
              A whole paragraph, slightly explaining what Lumine law is, or just
              like a smaller intro paragraph.
            </Text>
            <Button
              background={"none"}
              color={"white"}
              border={"1px solid #FFFFFF"}
              borderRadius={"8px"}
              fontSize={"16px"}
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

      {/* Content Sections */}
      <ScrollSpySidebar />

      <section id="Who-we-are">
        <Box minHeight="100vh" bg="gray.900" p={10}>
          <Text color="white" fontSize="2xl">
            Who We Are Content
          </Text>
        </Box>
      </section>

      <section id="Our-services">
        <Box minHeight="100vh" bg="gray.800" p={10}>
          <Text color="white" fontSize="2xl">
            Our Services Content
          </Text>
        </Box>
      </section>

      <section id="Panels">
        <Box minHeight="100vh" bg="gray.900" p={10}>
          <Text color="white" fontSize="2xl">
            Panels Content
          </Text>
        </Box>
      </section>

      <section id="News">
        <Box minHeight="100vh" bg="gray.800" p={10}>
          <Text color="white" fontSize="2xl">
            News Content
          </Text>
        </Box>
      </section>

      <section id="Insights">
        <Box minHeight="100vh" bg="gray.800" p={10}>
          <Text color="white" fontSize="2xl">
            Insights Content
          </Text>
        </Box>
      </section>
      <section id="none">
        <Footer />
      </section>
    </Container>
  );
};

export default LandingPage;
