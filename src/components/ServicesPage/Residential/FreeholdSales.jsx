import { Text, Container, Box, HStack, VStack, List } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "../../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";
import BannerImg from "../../../assets/services/main/sub-services/residential.png";

const FreeholdSales = () => {
  const [eligibilityState, setEligibilityState] = useState(false);
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
          <title>Lumine Law Freehold and Leasehold Sales Services</title>
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
            bgImage={`url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
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
              Freehold and Leasehold Sales
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
                At Lumine Solicitors, we understand that selling a property is a
                complex process that requires the right legal expertise. Whether
                you are dealing with freehold or leasehold sales, our expert
                team of solicitors is here to offer comprehensive legal support,
                ensuring a smooth and successful process from start to finish.
                When you purchase a freehold property, you own both the building
                and the land it sits on outright. This type of ownership
                provides greater control and fewer restrictions, which is why
                it's preferred by many homeowners. In contrast, leasehold
                ownership means you own the property for the duration of the
                lease agreement, but not the land it stands on. Leasehold
                properties come with specific terms and conditions that are
                important to understand thoroughly.
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >
            {/* Why choose Lumine Solicitors? */}
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
                  Why choose Lumine Solicitors?
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
                    Our solicitors have extensive experience in managing both
                    freehold and leasehold sales. Our clear and concise advice
                    ensures you're well-informed and guided smoothly through the
                    process. We conduct thorough due diligence, investigating
                    all aspects of the property to identify and address any
                    potential issues before they arise. This approach helps to
                    avoid delays and complications.
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
                  Contact Us Today
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
                    For all property matters, please do not hesitate to get in
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

export default FreeholdSales;
