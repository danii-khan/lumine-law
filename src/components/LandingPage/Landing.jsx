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
import ImmigrationIcon from "../../assets/landing/landing-icons/immigration-icon.png";
import ResidentialIcon from "../../assets/landing/landing-icons/residential-icon.png";
import LandlordIcon from "../../assets/landing/landing-icons/landlord-icon.png";
import DisputeIcon from "../../assets/landing/landing-icons/dispute-icon.png";
import FamilyIcon from "../../assets/landing/landing-icons/family-icon.png";
import PanelsBg from "../../assets/landing/panels.png";
import PanelOne from "../../assets/landing/panel-images/panel-barclays.png";
import PanelTwo from "../../assets/landing/panel-images/panel-santander.png";
import PanelThree from "../../assets/landing/panel-images/panel-natwest.png";
import PanelFour from "../../assets/landing/panel-images/panel-tsb.png";
import PanelFive from "../../assets/landing/panel-images/panel-hsbc.png";
import PanelSix from "../../assets/landing/panel-images/panel-pm.png";
import PanelSeven from "../../assets/landing/panel-images/panel-poi.png";
import PanelEight from "../../assets/landing/panel-images/panel-clydesdale.png";
import PanelNine from "../../assets/landing/panel-images/panel-yorkshire.png";
import PanelTen from "../../assets/landing/panel-images/panel-darlington.png";
import PanelEleven from "../../assets/landing/panel-images/panel-ipswich.png";
import PanelTwelve from "../../assets/landing/panel-images/panel-natwest.png";
import NewsInsightsBg from "../../assets/landing/news-insights.png";
import NewsInsightsOne from "../../assets/landing/news-insights-one.png";
import NewsInsightsTwo from "../../assets/landing/news-insights-two.png";
import NewsInsightsThree from "../../assets/landing/news-insights-three.png";
import NewsInsightsFour from "../../assets/landing/news-insights-four.png";
import "../../styles/fonts.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

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
      { threshold: isMobile ? 0.5 : 0.9 } // Lower threshold for mobile
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
          ? { xs: "55%", md: "50%", lg: "50%", xl: "50%", "2xl": "50%" }
          : activeSection === "Panels"
          ? { xs: "57.5%", md: "55%", lg: "50%", xl: "50%", "2xl": "50%" }
          : activeSection === "News-and-Insights"
          ? { xs: "55%", md: "50%", lg: "50%", xl: "50%", "2xl": "50%" }
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
              color={activeSection !== "Panels" ? "black" : "white"}
              _hover={{
                color: activeSection !== "Panels" ? "white" : "black",
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
                  borderColor: activeSection !== "Panels" ? "black" : "white",
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
              color={activeSection !== "Panels" ? "black" : "white"}
              _hover={{
                color: activeSection !== "Panels" ? "white" : "black",
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
                  borderColor: activeSection !== "Panels" ? "black" : "white",
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
      <Helmet>
        <title>Lumine Law</title>
      </Helmet>

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
          _loading={"lazy"}
        >
          <Grid
            templateColumns={"repeat(6, 1fr)"}
            templateRows={"repeat(2, 1fr)"}
            gap={"30px"}
            pl={"10%"}
          >
            {/* <GridItem></GridItem> */}
            <GridItem colSpan={{ xs: "5", md: "3" }}>
              <Text
                fontSize={{
                  xs: "12px",
                  sm: "13px",
                  md: "14px",
                  lg: "15px",
                  xl: "16px",
                  "2xl": "20px",
                }}
                fontWeight={300}
                fontFamily="HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                textAlign={"left"}
                color={"black"}
              >
                A whole paragraph, in further details explaining what Lumine Law
                does. Go into details. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Text>
            </GridItem>
            <GridItem colSpan={{ xs: "0", md: "2" }}></GridItem>
            {/* <GridItem></GridItem> */}
            <GridItem colSpan={{ xs: "5", md: "3" }}>
              <Text
                fontSize={{
                  xs: "12px",
                  sm: "13px",
                  md: "14px",
                  lg: "15px",
                  xl: "16px",
                  "2xl": "20px",
                }}
                fontWeight={300}
                fontFamily="HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                textAlign={"left"}
                color={"black"}
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
          // paddingTop: "50px",
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
          pt={{ xs: "20%", md: "3%" }}
          _loading={"lazy"}
        >
          <Grid
            templateColumns={{ xs: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            templateRows={{ xs: "repeat(4, 1fr)", lg: "repeat(2, 1fr)" }}
            gap={{
              xs: "14px",
              sm: "16px",
              md: "18px",
              lg: "20px",
              xl: "22px",
              "2xl": "25px",
            }}
            height={{ xs: "35%", md: "45%" }}
            width={{ xs: "85%", md: "70%" }}
            alignItems={"center"}
            justifyItems={"center"}
          >
            {/* Immigration */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"rgba(0, 0, 0, 0.6)"}
              height={"100%"}
              width={"100%"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
              zIndex={999}
            >
              <Link
                to={"/lumine-law/all-services/immigration"}
                style={{ textDecoration: "none" }}
                p={0}
                m={0}
                width={"80%"}
              >
                <VStack>
                  <Image src={ImmigrationIcon} height={"40px"} />
                  <Text
                    fontSize={{
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                      xl: "18px",
                      "2xl": "20px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    color={"white"}
                  >
                    Immigration Services
                  </Text>
                </VStack>
              </Link>
            </GridItem>

            {/* Residential Property */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"rgba(0, 0, 0, 0.6)"}
              height={"100%"}
              width={"100%"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
              zIndex={999}
            >
              <Link
                to={"/lumine-law/all-services/residential"}
                style={{ textDecoration: "none" }}
                p={0}
                m={0}
                width={"80%"}
              >
                <VStack>
                  <Image src={ResidentialIcon} height={"40px"} />
                  <Text
                    fontSize={{
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                      xl: "18px",
                      "2xl": "20px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    width={"80%"}
                    color={"white"}
                  >
                    Residential Property
                  </Text>
                </VStack>
              </Link>
            </GridItem>

            {/* Commercial Property */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"rgba(0, 0, 0, 0.6)"}
              height={"100%"}
              width={"100%"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
              zIndex={999}
            >
              <Link
                to={"/lumine-law/all-services/commercial"}
                style={{ textDecoration: "none" }}
                p={0}
                m={0}
                width={"80%"}
              >
                <VStack>
                  <Image src={ResidentialIcon} height={"40px"} />
                  <Text
                    fontSize={{
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                      xl: "18px",
                      "2xl": "20px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    width={"80%"}
                    color={"white"}
                  >
                    Commercial Property{" "}
                  </Text>
                </VStack>
              </Link>
            </GridItem>

            {/* Intellectual Property */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"rgba(0, 0, 0, 0.6)"}
              height={"100%"}
              width={"100%"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
              zIndex={999}
            >
              <Link
                to={"/lumine-law/all-services/intellectual-property"}
                style={{ textDecoration: "none" }}
                p={0}
                m={0}
                width={"80%"}
              >
                <VStack>
                  <Image src={DisputeIcon} height={"40px"} />
                  <Text
                    fontSize={{
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                      xl: "18px",
                      "2xl": "20px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    width={"80%"}
                    color={"white"}
                  >
                    Intellectual Property
                  </Text>
                </VStack>
              </Link>
            </GridItem>

            {/* Dispute Resolution */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"rgba(0, 0, 0, 0.6)"}
              height={"100%"}
              width={"100%"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
              zIndex={999}
            >
              <Link
                to={"/lumine-law/all-services/dispute-resolution"}
                style={{ textDecoration: "none" }}
                p={0}
                m={0}
                width={"80%"}
              >
                <VStack>
                  <Image src={DisputeIcon} height={"40px"} />
                  <Text
                    fontSize={{
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                      xl: "18px",
                      "2xl": "20px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    width={"80%"}
                    color={"white"}
                  >
                    Dispute Resolution and Civil Litigation{" "}
                  </Text>
                </VStack>
              </Link>
            </GridItem>

            {/* Landlord & Tenant Disputes */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"rgba(0, 0, 0, 0.6)"}
              height={"100%"}
              width={"100%"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
              zIndex={999}
            >
              <Link
                to={"/lumine-law/all-services/landlord-tenant"}
                style={{ textDecoration: "none" }}
                p={0}
                m={0}
                width={"80%"}
              >
                <VStack>
                  <Image src={LandlordIcon} height={"40px"} />
                  <Text
                    fontSize={{
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                      xl: "18px",
                      "2xl": "20px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    width={"80%"}
                    color={"white"}
                  >
                    Landlord and Tenant Disputes{" "}
                  </Text>
                </VStack>
              </Link>
            </GridItem>

            {/* Family & Children */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"rgba(0, 0, 0, 0.6)"}
              height={"100%"}
              width={"100%"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
              zIndex={999}
            >
              <Link
                to={"/lumine-law/all-services/family-and-children"}
                style={{ textDecoration: "none" }}
                p={0}
                m={0}
                width={"80%"}
              >
                <VStack>
                  <Image src={FamilyIcon} height={"40px"} />
                  <Text
                    fontSize={{
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                      xl: "18px",
                      "2xl": "20px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    width={"80%"}
                    color={"white"}
                  >
                    Family and Children{" "}
                  </Text>
                </VStack>
              </Link>
            </GridItem>

            {/* Wills & Probate */}
            <GridItem
              border={"1px solid white"}
              backgroundColor={"rgba(0, 0, 0, 0.6)"}
              height={"100%"}
              width={"100%"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              _hover={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                borderColor: "#beab7c",
                color: "#beab7c",
              }}
              transition={"all 0.3s ease"}
              zIndex={999}
            >
              <Link
                to={"/lumine-law/all-services/wills-probate"}
                style={{ textDecoration: "none" }}
                p={0}
                m={0}
                width={"80%"}
              >
                <VStack>
                  <Image src={FamilyIcon} height={"40px"} />
                  <Text
                    fontSize={{
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                      xl: "18px",
                      "2xl": "20px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    width={"80%"}
                    color={"white"}
                  >
                    Wills and Probate
                  </Text>
                </VStack>
              </Link>
            </GridItem>
          </Grid>

          <Button
            as={Link}
            to={"/lumine-law/all-services"}
            style={{ textDecoration: "none" }}
            border={"1px solid white"}
            backgroundColor={"rgba(0, 0, 0, 0.6)"}
            py={{
              //base: {"15px"}
              xs: "6px",
              md: "8px",
              lg: "10px",
              xl: "12px",
              "2xl": "15px",
            }}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
            _hover={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              borderColor: "#beab7c",
              color: "#beab7c",
            }}
            transition={"all 0.3s ease"}
            fontSize={{
              xs: "14px",
              sm: "14px",
              md: "16px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            fontWeight={400}
            fontFamily={"CeraRoundPro"}
            color={"white"}
          >
            All Services{" "}
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
          _loading={"lazy"}
        >
          <Text
            color="black"
            fontSize={{
              xs: "12px",
              sm: "14px",
              md: "15px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            fontWeight={300}
            fontFamily={
              "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
            }
            ml={{ xs: "2.5%", sm: "5%", md: "7.5%", lg: "10%", "2xl": "12.5%" }}
          >
            A small intro about what our team is like, diverse etc. just a few
            lines.{" "}
          </Text>
          <AnimatedPanels
            images={[
              PanelOne,
              PanelTwo,
              PanelThree,
              PanelFour,
              PanelFive,
              PanelSix,
              PanelSeven,
              PanelEight,
              PanelNine,
              PanelTen,
              PanelEleven,
              PanelTwelve,
            ]}
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
          pt={{
            xs: "20%",
            sm: "5%",
            md: "6%",
            lg: "13.5%",
            xl: "13.5%",
            "2xl": "13.5%",
          }}
          _loading={"lazy"}
        >
          <Text
            color="#000000"
            fontSize={{
              xs: "14px",
              sm: "16px",
              md: "18px",
              lg: "18px",
              xl: "18px",
              "2xl": "25px",
            }}
            fontWeight={300}
            fontFamily={
              "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
            }
            ml={{
              xs: "0%",
              sm: "2.5%",
              md: "5%",
              lg: "8%",
              xl: "10%",
              "2xl": "12.5%",
            }}
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
            <VStack width={"45%"} gap={"10px"}>
              <HStack width={"100%"}>
                <Image
                  src={NewsInsightsOne}
                  height={{
                    xs: "150px",
                    sm: "175px",
                    md: "225px",
                    lg: "275px",
                    xl: "325px",
                    "2xl": "375px",
                  }}
                  width={"50%"}
                  objectFit={"cover"}
                />
                <Image
                  src={NewsInsightsTwo}
                  height={{
                    xs: "150px",
                    sm: "175px",
                    md: "225px",
                    lg: "275px",
                    xl: "325px",
                    "2xl": "375px",
                  }}
                  width={"50%"}
                  objectFit={"cover"}
                />
              </HStack>
              <Button
                as={Link}
                to={"/lumine-law/all-services"}
                style={{ textDecoration: "none" }}
                border={"1px solid white"}
                backgroundColor={"black"}
                py={{
                  //base: {"15px"}
                  xs: "6px",
                  md: "8px",
                  lg: "10px",
                  xl: "12px",
                  "2xl": "15px",
                }}
                borderRadius={"10px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                cursor={"pointer"}
                _hover={{
                  borderColor: "#beab7c",
                  color: "#beab7c",
                }}
                transition={"all 0.3s ease"}
                fontSize={{
                  xs: "14px",
                  sm: "14px",
                  md: "16px",
                  lg: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                color={"white"}
              >
                News
              </Button>
            </VStack>
            <VStack width={"45%"} gap={"10px"}>
              <HStack width={"100%"}>
                <Image
                  src={NewsInsightsThree}
                  height={{
                    xs: "150px",
                    sm: "175px",
                    md: "225px",
                    lg: "275px",
                    xl: "325px",
                    "2xl": "375px",
                  }}
                  width={"50%"}
                  objectFit={"cover"}
                />
                <Image
                  src={NewsInsightsFour}
                  height={{
                    xs: "150px",
                    sm: "175px",
                    md: "225px",
                    lg: "275px",
                    xl: "325px",
                    "2xl": "375px",
                  }}
                  width={"50%"}
                  objectFit={"cover"}
                />
              </HStack>
              <Button
                as={Link}
                to={"/lumine-law/all-services"}
                style={{ textDecoration: "none" }}
                border={"1px solid white"}
                backgroundColor={"black"}
                py={{
                  //base: {"15px"}
                  xs: "6px",
                  md: "8px",
                  lg: "10px",
                  xl: "12px",
                  "2xl": "15px",
                }}
                borderRadius={"10px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                cursor={"pointer"}
                _hover={{
                  borderColor: "#beab7c",
                  color: "#beab7c",
                }}
                transition={"all 0.3s ease"}
                fontSize={{
                  xs: "14px",
                  sm: "14px",
                  md: "16px",
                  lg: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                color={"white"}
              >
                Insights
              </Button>
            </VStack>
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
