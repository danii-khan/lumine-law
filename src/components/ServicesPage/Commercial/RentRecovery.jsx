import { Text, Container, Box, HStack, VStack, List } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "../../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import BannerImg from "../../../assets/services/main/sub-services/commercial.png";
import { Helmet } from "react-helmet";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";

const RentRecovery = () => {
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
          <title>Lumine Law Rent Recovery Services</title>
        </Helmet>

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
              Rent Recovery
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
                Are you a landlord struggling with tenants who are behind on
                their rent payments? At Lumine Solicitors, we understand the
                challenges and frustrations that come with rent arrears. Our
                dedicated team of experienced solicitors is here to offer
                comprehensive rent recovery services to help you reclaim what is
                rightfully yours.
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
                    At Lumine Solicitors, we offer clear, practical advice
                    tailored to your specific circumstances. We believe in
                    taking a proactive approach to rent recovery. From sending
                    initial formal notices to representing you in court, if
                    necessary, we handle the entire process to secure the best
                    possible outcome. We prioritize our clients' needs by
                    keeping you informed at every stage, providing regular
                    updates, and being available to address any questions you
                    may have.
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

export default RentRecovery;
