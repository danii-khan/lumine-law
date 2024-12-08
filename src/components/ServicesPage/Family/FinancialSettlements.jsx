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
import ResidentialImg from "../../../assets/services/main/residential/main-banner.png";
import { Helmet } from "react-helmet";

const FinancialSettlements = () => {
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
          <title>Lumine Law Financial Settlements Services</title>
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
              Financial Settlements
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
                A few lines on what Financial Settlements are
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >
            {/* What is a Financial Settlement? */}
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
                  What is a Financial Settlement?
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
                    A financial settlement is a legally binding decision on how
                    you and your partner will divide your financial assets,
                    wealth, and property when your marriage ends.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Do I need to go to court to reach Financial Settlement? */}
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
                  Do I need to go to court to reach Financial Settlement?
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
                    You do not necessarily need to go to court to reach a
                    financial settlement – you could agree on an outcome through
                    methods such as:
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
                    fontWeight={600}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>Negotiating with your partner</List.Item>
                    <List.Item>Mediation</List.Item>
                    <List.Item>Arbitration</List.Item>
                  </List.Root>

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
                    It’s worth noting that even if you agree on a financial
                    settlement out of court, you may still need to address other
                    issues, such as childcare, in court. Lumine Solicitors’
                    expert family solicitors will work closely with you to
                    secure the best possible result and guide you through this
                    process if it ends up applying to you.{" "}
                  </Text>
                </VStack>
              )}
            </Box>

            {/* What can be divided as a part of a Financial Settlement? */}
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
                  What can be divided as a part of a Financial Settlement?
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
                    When you and your partner separate, you’ll need to consider
                    how to divide your assets and finances. The following can be
                    divided as part of a final settlement:
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
                    fontWeight={600}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>Shares</List.Item>
                    <List.Item>Custody of any children</List.Item>
                    <List.Item>Savings</List.Item>
                    <List.Item>Pension</List.Item>
                    <List.Item>Rights over property</List.Item>
                    <List.Item>Liabilities for debts</List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* How long does the process take? */}
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
                _hover={{ backgroundColor: !decisionState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={decisionState && "black"}
                onClick={() => setDecisionState(!decisionState)}
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
                  How long does the process take?
                </Text>
                {!decisionState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {decisionState && (
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
                    On average, a financial settlement process can take between
                    8 and 12 months. If an agreement cannot be reached between
                    partners, this process can take longer.
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
                    At Lumine Solicitors, we understand that every settlement
                    matter is unique. Determining the best course of action for
                    each client requires a combination of thorough planning,
                    legal knowledge, and sound judgment. Our family law team is
                    equipped with experienced mediators who can assist you in
                    reaching a financial agreement during your case.
                    Additionally, if you need to pursue financial remedies
                    through the court system, we can provide you with skilled
                    litigation expertise.
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

          {/* Pricing TODO when design complete */}
          {/* <Box
            width={"90%"}
            height={"300px"}
            border={"1px solid black"}
            borderRadius={"10px"}
            justifySelf={"center"}
            mb={"50px"}
          ></Box> */}

          {/* Other Services */}
          <Box mb="50px">
            {/* Header */}
            <HStack justifyContent={"center"} alignItems={"center"}>
              <Text
                color={"black"}
                fontSize={{
                  xs: "20px",
                  sm: "20px",
                  md: "24px",
                  lg: "26px",
                  xl: "28px",
                  "2xl": "30px",
                }}
                fontWeight={500}
                fontStyle={"italic"}
                mb={{
                  xs: "25px",
                  sm: "30px",
                  md: "35px",
                  lg: "40px",
                  xl: "45px",
                  "2xl": "50px",
                }}
              >
                Other Services
              </Text>
              <Box
                width={{
                  xs: "55%",
                  sm: "55%",
                  md: "60%",
                  lg: "65%",
                  xl: "70%",
                  "2xl": "75%",
                }}
              ></Box>
            </HStack>

            {/* List */}
            <Box
              width={"100%"}
              display={"flex"}
              flexFlow={"column"}
              alignItems={"center"}
              color={"black"}
            >
              <Grid
                width={"90%"}
                templateColumns={{ xs: "repeat(2, 2fr)", lg: "repeat(4, 1fr)" }}
                gap={{
                  xs: "25px",
                  sm: "30px",
                  md: "35px",
                  lg: "40px",
                  xl: "45px",
                  "2xl": "50px",
                }}
                justifyItems={"center"}
                alignItems={"center"}
              >
                {/* Col 1 */}
                <GridItem
                  width={"100%"}
                  height={{
                    xs: "125px",
                    sm: "125px",
                    md: "125px",
                    lg: "150px",
                    xl: "175px",
                    "2xl": "200px",
                  }}
                  padding={{ xs: "10px 10px", lg: "10px 20px" }}
                  border={"1px solid black"}
                  borderRadius={"8px"}
                  cursor={"pointer"}
                  _hover={{
                    opacity: "0.8",
                    transition: "all 0.5s ease",
                  }}
                  bgImage={`url(${BannerImg})`}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                >
                  <Link
                    to={"/lumine-law/all-services/immigration"}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      height={"100%"}
                      display={"flex"}
                      flexFlow={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      gap={"10px"}
                    >
                      <Text
                        fontSize={{
                          xs: "14px",
                          sm: "14px",
                          md: "16px",
                          lg: "18px",
                          xl: "20px",
                          "2xl": "22px",
                        }}
                        fontFamily={"CeraRoundPro"}
                        fontWeight={500}
                        textAlign={"left"}
                        color={"#ffffff"}
                      >
                        Immigration
                      </Text>
                      <VStack
                        width={"100%"}
                        height={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
                      >
                        <Text
                          fontSize={{
                            xs: "12px",
                            sm: "13px",
                            md: "14px",
                            lg: "15px",
                            xl: "16px",
                            "2xl": "18px",
                          }}
                          color={"#ffffff"}
                          fontFamily={"CeraRoundPro"}
                          fontWeight={400}
                        >
                          A lil para about what this service is{" "}
                        </Text>
                        <HiOutlineArrowLongRight size={"2em"} />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>

                {/* Col 2 */}
                <GridItem
                  width={"100%"}
                  height={{
                    xs: "125px",
                    sm: "125px",
                    md: "125px",
                    lg: "150px",
                    xl: "175px",
                    "2xl": "200px",
                  }}
                  padding={{ xs: "10px 10px", lg: "10px 20px" }}
                  border={"1px solid black"}
                  borderRadius={"8px"}
                  cursor={"pointer"}
                  _hover={{
                    opacity: "0.8",
                    transition: "all 0.5s ease",
                  }}
                  bgImage={`url(${ResidentialImg})`}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                >
                  <Link
                    to={"/lumine-law/all-services/residential"}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      height={"100%"}
                      display={"flex"}
                      flexFlow={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      gap={"10px"}
                    >
                      <Text
                        fontSize={{
                          xs: "14px",
                          sm: "14px",
                          md: "16px",
                          lg: "18px",
                          xl: "20px",
                          "2xl": "22px",
                        }}
                        fontFamily={"CeraRoundPro"}
                        fontWeight={500}
                        textAlign={"left"}
                        color={"#ffffff"}
                      >
                        Residential & Commercial Property
                      </Text>
                      <VStack
                        width={"100%"}
                        height={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
                      >
                        <Text
                          fontSize={{
                            xs: "12px",
                            sm: "13px",
                            md: "14px",
                            lg: "15px",
                            xl: "16px",
                            "2xl": "18px",
                          }}
                          color={"#ffffff"}
                          fontFamily={"CeraRoundPro"}
                          fontWeight={400}
                        >
                          A lil para about what this service is{" "}
                        </Text>
                        <HiOutlineArrowLongRight size={"2em"} />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>

                {/* Col 3 */}
                <GridItem
                  width={"100%"}
                  height={{
                    xs: "125px",
                    sm: "125px",
                    md: "125px",
                    lg: "150px",
                    xl: "175px",
                    "2xl": "200px",
                  }}
                  padding={{ xs: "10px 10px", lg: "10px 20px" }}
                  border={"1px solid black"}
                  borderRadius={"8px"}
                  cursor={"pointer"}
                  _hover={{
                    opacity: "0.8",
                    transition: "all 0.5s ease",
                  }}
                  bgImage={`url(${BannerImg})`}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                >
                  <Link
                    to={"/lumine-law/all-services/immigration"}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      height={"100%"}
                      display={"flex"}
                      flexFlow={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      gap={"10px"}
                    >
                      <Text
                        fontSize={{
                          xs: "14px",
                          sm: "14px",
                          md: "16px",
                          lg: "18px",
                          xl: "20px",
                          "2xl": "22px",
                        }}
                        fontFamily={"CeraRoundPro"}
                        fontWeight={500}
                        textAlign={"left"}
                        color={"#ffffff"}
                      >
                        Immigration
                      </Text>
                      <VStack
                        width={"100%"}
                        height={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
                      >
                        <Text
                          fontSize={{
                            xs: "12px",
                            sm: "13px",
                            md: "14px",
                            lg: "15px",
                            xl: "16px",
                            "2xl": "18px",
                          }}
                          color={"#ffffff"}
                          fontFamily={"CeraRoundPro"}
                          fontWeight={400}
                        >
                          A lil para about what this service is{" "}
                        </Text>
                        <HiOutlineArrowLongRight size={"2em"} />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>

                {/* Col 4 */}
                <GridItem
                  width={"100%"}
                  height={{
                    xs: "125px",
                    sm: "125px",
                    md: "125px",
                    lg: "150px",
                    xl: "175px",
                    "2xl": "200px",
                  }}
                  padding={{ xs: "10px 10px", lg: "10px 20px" }}
                  border={"1px solid black"}
                  borderRadius={"8px"}
                  cursor={"pointer"}
                  _hover={{
                    opacity: "0.8",
                    transition: "all 0.5s ease",
                  }}
                  bgImage={`url(${ResidentialImg})`}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                >
                  <Link
                    to={"/lumine-law/all-services/residential"}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      height={"100%"}
                      display={"flex"}
                      flexFlow={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      gap={"10px"}
                    >
                      <Text
                        fontSize={{
                          xs: "14px",
                          sm: "14px",
                          md: "16px",
                          lg: "18px",
                          xl: "20px",
                          "2xl": "22px",
                        }}
                        fontFamily={"CeraRoundPro"}
                        fontWeight={500}
                        textAlign={"left"}
                        color={"#ffffff"}
                      >
                        Residential & Commercial Property
                      </Text>
                      <VStack
                        width={"100%"}
                        height={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
                      >
                        <Text
                          fontSize={{
                            xs: "12px",
                            sm: "13px",
                            md: "14px",
                            lg: "15px",
                            xl: "16px",
                            "2xl": "18px",
                          }}
                          color={"#ffffff"}
                          fontFamily={"CeraRoundPro"}
                          fontWeight={400}
                        >
                          A lil para about what this service is{" "}
                        </Text>
                        <HiOutlineArrowLongRight size={"2em"} />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>
              </Grid>
            </Box>
          </Box>

          {/* News and Insights */}
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
            mb={"50px"}
          >
            {/* Header */}
            <HStack
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
            >
              <Text
                color={"black"}
                fontSize={{
                  xs: "20px",
                  sm: "20px",
                  md: "24px",
                  lg: "26px",
                  xl: "28px",
                  "2xl": "30px",
                }}
                fontWeight={500}
                fontStyle={"italic"}
              >
                News and Insights
              </Text>
              <Box
                width={{
                  xs: "45%",
                  sm: "50%",
                  md: "60%",
                  lg: "65%",
                  xl: "70%",
                  "2xl": "75%",
                }}
              ></Box>
            </HStack>

            {/* News and Insights */}
            <HStack
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"10px"}
            >
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
                width={{ xs: "22%", md: "24%" }}
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
                width={{ xs: "22%", md: "24%" }}
                objectFit={"cover"}
              />
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
                width={{ xs: "22%", md: "24%" }}
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
                width={{ xs: "22%", md: "24%" }}
                objectFit={"cover"}
              />
            </HStack>
          </Box>

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default FinancialSettlements;
