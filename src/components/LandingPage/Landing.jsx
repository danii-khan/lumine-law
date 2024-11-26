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
  Flex,
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
import { Link } from "react-router-dom";
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
      top={activeSection === "Who-we-are" ? "55%" : "50%"}
      transform="translateY(-50%)"
      height={activeSection === "Who-we-are" ? "60vh" : "80vh"}
      flexDirection="column"
      justifyContent="space-between"
      zIndex={999}
      pointerEvents="auto"
    >
      {/* Visited and Current Sections at Top */}
      <VStack align="flex-start" spacing={2}>
        {activeSection !== "none" &&
          sectionIds.slice(0, activeIndex + 1).map((id) => (
            <Button
              key={id}
              pl={0}
              variant="ghost"
              onClick={() => scrollToSection(id)}
              background="none"
              color={activeSection === "Panels" ? "black" : "white"}
              _hover={{
                color: activeSection !== "Panels" && "#beab7c",
                opacity: "100%",
              }}
              fontWeight={400}
              fontStyle="italic"
              fontSize={activeSection === id ? "5xl" : "xl"}
              opacity={activeSection === id ? "100%" : "25%"}
              transition="all 0.3s ease"
            >
              <span
                style={{
                  border: "1px solid",
                  borderColor: activeSection === "Panels" ? "black" : "white",
                  width: "125px",
                  marginRight: "25px",
                  opacity: activeSection === id ? "100%" : "25%",
                  transition: "opacity 0.3s ease",
                }}
              ></span>
              {id.split("-").join(" ")}
            </Button>
          ))}
      </VStack>

      {/* Unvisited Sections at Bottom */}
      <VStack align="flex-start" spacing={2}>
        {activeSection !== "none" &&
          sectionIds.slice(activeIndex + 1).map((id) => (
            <Button
              key={id}
              pl={0}
              variant="ghost"
              onClick={() => scrollToSection(id)}
              background="none"
              color={activeSection === "Panels" ? "black" : "white"}
              _hover={{
                color: activeSection !== "Panels" && "#beab7c",
                opacity: "100%",
              }}
              fontWeight={400}
              fontStyle="italic"
              fontSize="15px"
              opacity="25%"
              transition="all 0.3s ease"
            >
              <span
                style={{
                  border: "1px solid",
                  borderColor: activeSection === "Panels" ? "black" : "white",
                  width: "50px",
                  opacity: "25%",
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
            pl={"10%"}
          >
            {/* <GridItem></GridItem> */}
            <GridItem colSpan={"3"}>
              <Text
                fontSize={"2xl"}
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
            {/* <GridItem></GridItem> */}
            <GridItem colSpan={"3"}>
              <Text
                fontSize={"2xl"}
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
          pt={"5%"}
        >
          <Grid
            templateColumns="repeat(4, 1fr)"
            templateRows={"repeat(2, 1fr)"}
            gap="25px"
            height={"60%"}
            width={"80%"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            {/* 1 */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"#576469"}
              height={"100%"}
              width={"100%"}
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
              <Link
                to={"/all-services/immigration"}
                style={{ textDecoration: "none" }}
                p={0}
                m={0}
                width={"80%"}
              >
                <Text
                  fontSize={"3xl"}
                  fontWeight={400}
                  fontFamily={"CeraRoundPro"}
                >
                  Immigration Services
                </Text>
              </Link>
            </GridItem>

            {/* 2 */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"#576469"}
              height={"100%"}
              width={"100%"}
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
                fontSize={"25px"}
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
              backgroundColor={"#576469"}
              height={"100%"}
              width={"100%"}
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
                fontSize={"25px"}
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
              backgroundColor={"#576469"}
              height={"100%"}
              width={"100%"}
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
                fontSize={"25px"}
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
              backgroundColor={"#8f765b"}
              height={"100%"}
              width={"100%"}
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
                fontSize={"25px"}
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
              backgroundColor={"#8f765b"}
              height={"100%"}
              width={"100%"}
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
                fontSize={"25px"}
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
              backgroundColor={"#8f765b"}
              height={"100%"}
              width={"100%"}
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
                fontSize={"25px"}
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
              backgroundColor={"#8f765b"}
              height={"100%"}
              width={"100%"}
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
              <Link
                to={"/all-services"}
                style={{ textDecoration: "none" }}
                p={0}
                m={0}
                width={"80%"}
              >
                <Text
                  fontSize={"25px"}
                  fontWeight={400}
                  fontFamily={"CeraRoundPro"}
                >
                  All Services{" "}
                </Text>
              </Link>
            </GridItem>
          </Grid>
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
          pt={"7.5%"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          gap={"25px"}
          bgImage={`url(${PanelsBg})`}
          bgPos={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          <Text
            color="black"
            fontSize="20px"
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
          gap={"25px"}
          bgImage={`url(${NewsInsightsBg})`}
          bgPos={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          pt={"13.5%"}
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
            gap={"10px"}
          >
            <Image
              src={NewsInsightsOne}
              height={"375px"}
              width={"24%"}
              objectFit={"cover"}
            />
            <Image
              src={NewsInsightsTwo}
              height={"375px"}
              width={"24%"}
              objectFit={"cover"}
            />
            <Image
              src={NewsInsightsThree}
              height={"375px"}
              width={"24%"}
              objectFit={"cover"}
            />
            <Image
              src={NewsInsightsFour}
              height={"375px"}
              width={"24%"}
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
