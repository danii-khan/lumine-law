import {
  Text,
  Container,
  Box,
  HStack,
  VStack,
  List,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "../../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import NewsInsightsOne from "../../../assets/landing/news-insights-one.png";
import NewsInsightsTwo from "../../../assets/landing/news-insights-two.png";
import NewsInsightsThree from "../../../assets/landing/news-insights-three.png";
import NewsInsightsFour from "../../../assets/landing/news-insights-four.png";
import BannerImg from "../../../assets/services/main/immigration/main-banner.png";
import ImmigrationImg from "../../../assets/services/main/immigration/main-banner.png";
import ResidentialImg from "../../../assets/services/main/residential/main-banner.png";
import DisputeImg from "../../../assets/services/main/dispute/main-banner.png";
import LandlordImg from "../../../assets/services/main/landlord/main-banner.png";
import FamilyImg from "../../../assets/services/main/family/main-banner.png";
import { Helmet } from "react-helmet";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";
import AllPrices from "../../NavLinks/AllPrices";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";

const ConsentOrders = () => {
  const [spouseState, setSpouseState] = useState(false);
  const [eligibilityState, setEligibilityState] = useState(false);
  const [applicationState, setApplicationState] = useState(false);
  const [screening, setScreening] = useState(false);
  const [decisionState, setDecisionState] = useState(false);
  const [helpState, setHelpState] = useState(false);

  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor={"white"}
        overflow="auto"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law Consent Orders Services</title>
        </Helmet>

        <Navbar />

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "75px",
              lg: "100px",
              xl: "125px",
              "2xl": "150px",
            }}
            // bgImage={`url(${BannerImg})`}
            // bgSize={"cover"}
            // bgPos={"center"}
            // bgRepeat={"no-repeat"}
            backgroundColor={"#60657e"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontSize={{ xs: "20px", lg: "30px", xl: "36px", "2xl": "45px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              fontStyle={"italic"}
              width={"90%"}
              textAlign={"left"}
            >
              Consent Orders
            </Text>
          </Box>

          {/* Main */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
          >
            {/* Heading */}
            <Box
              width={"90%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
              >
                A few lines on what Consent Orders are
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >
            {/* What is a Consent Order? */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !spouseState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={spouseState && "black"}
                onClick={() => setSpouseState(!spouseState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  What is a Consent Order?
                </Text>
                {!spouseState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {spouseState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"left"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    A consent order is a legally binding agreement between a
                    divorcing couple that specifies how their assets, including
                    money, property, investments, pensions, and savings, will be
                    distributed after the divorce.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Advantages of a Consent Order */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !eligibilityState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={eligibilityState && "black"}
                onClick={() => setEligibilityState(!eligibilityState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  Advantages of a Consent Order
                </Text>
                {!eligibilityState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {eligibilityState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"left"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    The advantages of a consent order include that:
                  </Text>

                  <List.Root
                    textAlign={"left"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      A consent order provides you with assurance and peace of
                      mind.
                    </List.Item>
                    <List.Item>
                      A consent order prevents future disagreements. By for
                      malising the terms of your settlement with a consent
                      order, you can lessen the possibility of future conflicts
                      by reducing opportunities for misunderstandings.
                    </List.Item>
                    <List.Item>
                      A consent order provides protection for your assets
                      against any future claims by your former partner.
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* How long does it take to obtain a Consent Order? */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !applicationState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={applicationState && "black"}
                onClick={() => setApplicationState(!applicationState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  How long does it take to obtain a Consent Order?
                </Text>
                {!applicationState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {applicationState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"left"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    The court’s workload determines how long it takes to approve
                    the order, but it usually takes between 2 and 4 weeks. The
                    judge will get in touch with us for more information, if
                    they have any, and we will respond as soon as possible.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Help */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderY={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !helpState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={helpState && "black"}
                onClick={() => setHelpState(!helpState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  How can Lumine Solicitors help?
                </Text>
                {!helpState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {helpState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"left"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Our team of experienced family solicitors specialises in
                    assisting our clients with obtaining consent orders that are
                    tailored to their specific circumstances. Whether it’s
                    related to financial matters, property distribution, or
                    child custody, our consent order solicitors in London
                    provide professional advice and expert guidance. To ensure
                    that our clients are informed and empowered throughout the
                    process, we focus on clear communication and personalized
                    attention to make the process of getting a consent order as
                    simple and stress-free as possible.
                  </Text>

                  <Text
                    textAlign={"left"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    For all family matters, Please do not hesitate to get in
                    touch with Lumine solicitors <strong>020 3950 2246</strong>{" "}
                    or{" "}
                    <strong>
                      <Link to={"/lumine-law/contact"}>Contact Us HERE</Link>{" "}
                    </strong>
                  </Text>
                </VStack>
              )}
            </Box>
          </VStack>

          {/* Other Services */}
          <AllServiceLinks />

          {/* Prices */}
          <AllPrices />

          {/* News and Insights */}
          <AllNewsInsights />

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default ConsentOrders;
