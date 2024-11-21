import {
  Container,
  Box,
  Text,
  VStack,
  Button,
  HStack,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AnimatedPanels from "./AnimatedPanels";
import MainBg from "../../assets/landing/main-bg.png";
import AboutBg from "../../assets/landing/about-bg.png";
import ServicesBg from "../../assets/landing/services.png";
import PanelsBg from "../../assets/landing/panels.png";
import PanelOne from "../../assets/landing/panel-one.png";
import PanelTwo from "../../assets/landing/panel-two.png";
import PanelThree from "../../assets/landing/panel-three.png";
import PanelFour from "../../assets/landing/panel-four.png";
import NewsInsightsBg from "../../assets/landing/news-insights.png";
import NewsInsightsOne from "../../assets/landing/news-insights-one.png";
import NewsInsightsTwo from "../../assets/landing/news-insights-two.png";
import NewsInsightsThree from "../../assets/landing/news-insights-three.png";
import NewsInsightsFour from "../../assets/landing/news-insights-four.png";
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
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector("nav")?.offsetHeight || 0; // Get navbar height
    const container = document.querySelector(".scroll-container");

    if (section && container) {
      const sectionTop = section.offsetTop - navbarHeight; // Adjust for navbar

      container.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <VStack
      position="fixed"
      left="0%"
      top="50%"
      transform="translateY(-50%)"
      gap="10px"
      align="flex-start"
      zIndex={999}
      pointerEvents="auto"
    >
      {activeSection !== "none" &&
        ["Who-we-are", "Our-Services", "Panels", "News-and-Insights"].map(
          (id) => (
            <>
              <Button
                key={id}
                pl={0}
                variant="ghost"
                onClick={() => scrollToSection(id)}
                background={"none"}
                color={activeSection === "Panels" ? "black" : "white"}
                _hover={{
                  color: activeSection !== "Panels" && "#beab7c",
                  opacity: "100%",
                }}
                // fontFamily="CeraRoundPro"
                fontWeight={400}
                fontStyle={"italic"}
                fontSize={activeSection === id ? "30px" : "15px"}
                mb={activeSection === id ? "100%" : "0"}
                opacity={activeSection === id ? "100%" : "25%"}
                transition="all 0.3s ease"
              >
                <span
                  style={{
                    border: "1px solid",
                    borderColor: activeSection === "Panels" ? "black" : "white",
                    width: "50px",
                    opacity: `${activeSection === id ? "100%" : "25%"}`,
                    mb: `${activeSection === id ? "100px" : "0"}`,
                    transition: "opacity 0.3s ease",
                  }}
                ></span>
                {id.split("-").join(" ")}
              </Button>
            </>
          )
        )}
    </VStack>
  );
};

const LandingPage = () => {
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
        "&::-webkit-scrollbar": {
          display: "none", // Optional: hides scrollbar
        },
        msOverflowStyle: "none", // Optional: hides scrollbar in IE
        scrollbarWidth: "none", // Optional: hides scrollbar in Firefox
      }}
    >
      <Navbar />

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

      {/* About */}
      <section
        id="Who-we-are"
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
          bgImage={`url(${AboutBg})`}
          bgPos={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          display={"flex"}
          alignItems={"center"}
        >
          <Grid
            templateColumns={"repeat(6, 1fr)"}
            templateRows={"repeat(2, 1fr)"}
            gap={"30px"}
          >
            <GridItem></GridItem>
            <GridItem colSpan={"3"}>
              <Text
                fontSize={"20px"}
                fontWeight={300}
                fontFamily="HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                textAlign={"left"}
              >
                A whole paragraph, in further details explaining what Lumine Law
                does. Go into details. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Text>
            </GridItem>
            <GridItem colSpan={"2"}></GridItem>
            <GridItem></GridItem>
            <GridItem colSpan={"3"}>
              <Text
                fontSize={"20px"}
                fontWeight={300}
                fontFamily="HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                textAlign={"left"}
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit.
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </section>

      {/* Services content */}
      <section
        id="Our-Services"
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          height: "100vh",
          paddingTop: "50px",
        }}
      >
        <Box
          width="100%"
          height="100%"
          p={0}
          m={0}
          display={"flex"}
          flexFlow={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"50px"}
          bgImage={`url(${ServicesBg})`}
          bgPos={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          <Grid
            templateColumns="repeat(4, 1fr)"
            templateRows={"repeat(2, 1fr)"}
            gap="10"
          >
            {/* 1 */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"transparent"}
              height={"200px"}
              width={"250px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "black",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
            >
              <Text
                fontSize={"30px"}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                Immigration Services
              </Text>
            </GridItem>

            {/* 2 */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"transparent"}
              height={"200px"}
              width={"250px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "black",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
            >
              <Text
                fontSize={"30px"}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                Residential and Commercial Property{" "}
              </Text>
            </GridItem>

            {/* 3 */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"transparent"}
              height={"200px"}
              width={"250px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "black",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
            >
              <Text
                fontSize={"30px"}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                Dispute Resolution and Civil Litigation{" "}
              </Text>
            </GridItem>

            {/* 4 */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"transparent"}
              height={"200px"}
              width={"250px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "black",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
            >
              <Text
                fontSize={"30px"}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                Landlord and Tenant Disputes{" "}
              </Text>
            </GridItem>

            {/* 5 */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"transparent"}
              height={"200px"}
              width={"250px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "black",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
            >
              <Text
                fontSize={"30px"}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                Family and Children{" "}
              </Text>
            </GridItem>

            {/* 6 */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"transparent"}
              height={"200px"}
              width={"250px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "black",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
            >
              <Text
                fontSize={"30px"}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                Personal Injury{" "}
              </Text>
            </GridItem>

            {/* 7 */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"transparent"}
              height={"200px"}
              width={"250px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "black",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
            >
              <Text
                fontSize={"30px"}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                New Service{" "}
              </Text>
            </GridItem>

            {/* 8 */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"transparent"}
              height={"200px"}
              width={"250px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "black",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
            >
              <Text
                fontSize={"30px"}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                All Services{" "}
              </Text>
            </GridItem>
          </Grid>
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
            {" "}
            All Services
          </Button>
        </Box>
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
        <Box
          width="100%"
          height="100%"
          p={0}
          m={0}
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          gap={"50px"}
          bgImage={`url(${PanelsBg})`}
          bgPos={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          <Text
            color="black"
            fontSize="25px"
            fontWeight={300}
            fontFamily={
              "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
            }
            ml={"12.5%"}
          >
            A small intro about what our team is like, diverse etc. just a few
            lines.{" "}
          </Text>
          <AnimatedPanels
            images={[PanelOne, PanelTwo, PanelThree, PanelFour]}
          />
        </Box>
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
        <Box
          width="100%"
          height="100%"
          p={0}
          m={0}
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          gap={"50px"}
          bgImage={`url(${NewsInsightsBg})`}
          bgPos={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          <Text
            color="white"
            fontSize="25px"
            fontWeight={300}
            fontFamily={
              "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
            }
            ml={"12.5%"}
          >
            A small intro about what our team is like, diverse etc. just a few
            lines.{" "}
          </Text>
          <HStack
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"50px"}
          >
            <Image
              src={NewsInsightsOne}
              height={"100%"}
              width={"20%"}
              objectFit={"cover"}
            />
            <Image
              src={NewsInsightsTwo}
              height={"100%"}
              width={"20%"}
              objectFit={"cover"}
            />
            <Image
              src={NewsInsightsThree}
              height={"100%"}
              width={"20%"}
              objectFit={"cover"}
            />
            <Image
              src={NewsInsightsFour}
              height={"100%"}
              width={"20%"}
              objectFit={"cover"}
            />
          </HStack>
        </Box>
      </section>

      {/* Footer  */}
      <section
        id="none"
        style={{
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
        }}
      >
        <Footer />
      </section>
    </Container>
  );
};

export default LandingPage;
