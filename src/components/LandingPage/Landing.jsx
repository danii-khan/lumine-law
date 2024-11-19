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
import MainBg from "../../assets/landing/main-bg.jpg";
import AboutBg from "../../assets/landing/about-bg.png";
import ServicesBgOne from "../../assets/landing/services-bg-one.png";
import ServicesBgTwo from "../../assets/landing/services-bg-two.png";
import ServicesBgThree from "../../assets/landing/services-bg-three.png";
import ServicesBgFour from "../../assets/landing/services-bg-four.png";
import ServicesBgFive from "../../assets/landing/services-bg-five.png";
import ServicesBgSix from "../../assets/landing/services-bg-six.png";
import PanelOne from "../../assets/landing/panel-one.png";
import PanelTwo from "../../assets/landing/panel-two.png";
import PanelThree from "../../assets/landing/panel-three.png";
import PanelFour from "../../assets/landing/panel-four.png";
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
                  fontSize={activeSection === id ? "30px" : "15px"}
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
    <Container
      width="100vw"
      maxWidth="100%"
      overflow="hidden"
      m={0}
      p={0}
      background="linear-gradient(0deg, 
    #000000 12.5%, 
    #124F66 35.68%, 
    #249ECB 47.23%, 
    #124F66 58.12%, 
    #1B7798 67%, 
    #000000 93%
    )"
    >
      <Navbar />
      {/* Hero Section */}
      <section id="none">
        <Box
          width="100%"
          height="100vh"
          p={0}
          m={0}
          bgImage={`url(${MainBg})`}
          bgPos={"center"}
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
        <Box
          width="100%"
          height="100vh"
          p={0}
          m={0}
          bgImage={`url(${AboutBg})`}
          bgPos={"center"}
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
            <Text
              fontSize={"20px"}
              fontWeight={300}
              fontFamily="HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
              textAlign={"left"}
            >
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit.
            </Text>
          </VStack>
        </Box>
      </section>

      <section id="Our-services">
        <Box
          width="100%"
          height="90vh"
          p={0}
          m={0}
          display={"flex"}
          flexFlow={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"50px"}
        >
          <Grid
            templateColumns="repeat(3, 1fr)"
            templateRows={"repeat(2, 1fr)"}
            gap="10"
          >
            <GridItem
              bgImage={`url(${ServicesBgOne})`}
              bgPos={"center"}
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              height={"200px"}
              width={"350px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                fontSize={"35px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                Immigration Services
              </Text>
            </GridItem>
            <GridItem
              bgImage={`url(${ServicesBgTwo})`}
              bgPos={"center"}
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              height={"200px"}
              width={"350px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                fontSize={"35px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                Residential and Commercial Property{" "}
              </Text>
            </GridItem>
            <GridItem
              bgImage={`url(${ServicesBgThree})`}
              bgPos={"center"}
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              height={"200px"}
              width={"350px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                fontSize={"35px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                Dispute Resolution and Civil Litigation{" "}
              </Text>
            </GridItem>
            <GridItem
              bgImage={`url(${ServicesBgFour})`}
              bgPos={"center"}
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              height={"200px"}
              width={"350px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                fontSize={"35px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                Landlord and Tenant Disputes{" "}
              </Text>
            </GridItem>
            <GridItem
              bgImage={`url(${ServicesBgFive})`}
              bgPos={"center"}
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              height={"200px"}
              width={"350px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                fontSize={"35px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                Family and Children{" "}
              </Text>
            </GridItem>
            <GridItem
              bgImage={`url(${ServicesBgSix})`}
              bgPos={"center"}
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              height={"200px"}
              width={"350px"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                fontSize={"35px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                width={"80%"}
              >
                Personal Injury{" "}
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

      <section id="Panels">
        <Box
          width="100%"
          height="80vh"
          p={0}
          m={0}
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          gap={"50px"}
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
          <Box
            height={"50%"}
            width={"80%"}
            backgroundColor={"#145c77"}
            alignSelf={"center"}
            borderRadius={"8px"}
          >
            <Grid
              templateColumns={"repeat(4, 1fr)"}
              templateRows={"repeat(3, 1fr)"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
              width={"100%"}
            >
              <GridItem justifySelf={"center"}>
                <Image
                  src={PanelOne}
                  height={"60px"}
                  width={"150px"}
                  objectFit={"cover"}
                />
              </GridItem>
              <GridItem justifySelf={"center"}>
                <Image
                  src={PanelTwo}
                  height={"60px"}
                  width={"150px"}
                  objectFit={"cover"}
                />
              </GridItem>
              <GridItem justifySelf={"center"}>
                <Image
                  src={PanelThree}
                  height={"60px"}
                  width={"150px"}
                  objectFit={"cover"}
                />
              </GridItem>
              <GridItem justifySelf={"center"}>
                <Image
                  src={PanelFour}
                  height={"55px"}
                  width={"150px"}
                  objectFit={"cover"}
                />
              </GridItem>
              <GridItem justifySelf={"center"}>
                <Image
                  src={PanelOne}
                  height={"60px"}
                  width={"150px"}
                  objectFit={"cover"}
                />
              </GridItem>
              <GridItem justifySelf={"center"}>
                <Image
                  src={PanelTwo}
                  height={"60px"}
                  width={"150px"}
                  objectFit={"cover"}
                />
              </GridItem>
              <GridItem justifySelf={"center"}>
                <Image
                  src={PanelThree}
                  height={"60px"}
                  width={"150px"}
                  objectFit={"cover"}
                />
              </GridItem>
              <GridItem justifySelf={"center"}>
                <Image
                  src={PanelFour}
                  height={"55px"}
                  width={"150px"}
                  objectFit={"cover"}
                />
              </GridItem>
              <GridItem justifySelf={"center"}>
                <Image
                  src={PanelOne}
                  height={"60px"}
                  width={"150px"}
                  objectFit={"cover"}
                />
              </GridItem>
              <GridItem justifySelf={"center"}>
                <Image
                  src={PanelTwo}
                  height={"60px"}
                  width={"150px"}
                  objectFit={"cover"}
                />
              </GridItem>
              <GridItem justifySelf={"center"}>
                <Image
                  src={PanelThree}
                  height={"60px"}
                  width={"150px"}
                  objectFit={"cover"}
                />
              </GridItem>
              <GridItem justifySelf={"center"}>
                <Image
                  src={PanelFour}
                  height={"55px"}
                  width={"150px"}
                  objectFit={"cover"}
                />
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </section>

      {/* <section id="News">
        <Box minHeight="100vh" p={10}>
          <Text color="white" fontSize="2xl">
            News Content
          </Text>
        </Box>
      </section>

      <section id="Insights">
        <Box minHeight="100vh" p={10}>
          <Text color="white" fontSize="2xl">
            Insights Content
          </Text>
        </Box>
      </section> */}
      <section id="none">
        <Footer />
      </section>
    </Container>
  );
};

export default LandingPage;
