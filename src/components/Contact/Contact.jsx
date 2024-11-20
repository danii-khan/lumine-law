import {
  Container,
  Box,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ContactImg from "../../assets/contact/contact-top.png";
import "../../styles/fonts.css";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { TiPrinter } from "react-icons/ti";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <Container
      width="100vw"
      maxWidth="100%"
      height="100vh"
      overflow="auto"
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
      <Box width="100%" height="calc(100% - 50px)" p={0} m={0} pt={"50px"}>
        <Grid
          width={"100%"}
          bgImage={`url(${ContactImg})`}
          bgPos={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          templateColumns={"3fr 4fr 2fr"}
          borderBottom={"1px solid white"}
        >
          {/* Contact Us */}
          <GridItem
            height={"300px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontSize={"55px"}
              fontFamily={"CeraRoundPro"}
              fontWeight={600}
            >
              Contact Us
            </Text>
          </GridItem>

          {/* 2nd Col */}
          <GridItem
            height={"300px"}
            borderLeft={"1px solid white"}
            borderRight={"1px solid white"}
          >
            <Grid
              height={"100%"}
              width={"100%"}
              templateRows={"repeat(3, 1fr)"}
              alignItems={"center"}
            >
              {/* First Row */}
              <GridItem>
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  ml={"2.5%"}
                >
                  <HStack gap={"10px"}>
                    <Box w={"2em"} display={"flex"} alignItems={"center"}>
                      <IoLocationOutline size={"2em"} color="white" />
                    </Box>
                    <Text
                      fontSize={"25px"}
                      fontWeight={500}
                      fontFamily={"CeraRoundPro"}
                    >
                      Address
                    </Text>
                  </HStack>
                  <HStack gap={"10px"}>
                    <Box w={"2em"}>{/* this is meant to be empty */}</Box>
                    <Text
                      fontSize={"20px"}
                      fontWeight={400}
                      fontFamily={
                        "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                      }
                    >
                      2nd Floor, 156 Cromwell Road, SW7 4EF, London, UK{" "}
                    </Text>
                  </HStack>
                </VStack>
              </GridItem>

              {/* Second Row */}
              <Grid
                borderTop={"1px solid white"}
                borderBottom={"1px solid white"}
                templateColumns={"repeat(2, 1fr)"}
                width={"100%"}
              >
                {/* Telephone*/}
                <GridItem borderRight={"1px solid white"}>
                  <VStack
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    ml={"5%"}
                  >
                    <HStack gap={"10px"}>
                      <Box w={"2em"} display={"flex"} alignItems={"center"}>
                        <LuPhoneCall size={"2em"} color="white" />
                      </Box>
                      <Text
                        fontSize={"25px"}
                        fontWeight={500}
                        fontFamily={"CeraRoundPro"}
                      >
                        Telephone
                      </Text>
                    </HStack>
                    <HStack gap={"10px"}>
                      <Box w={"2em"}>{/* this is meant to be empty */}</Box>
                      <Text
                        fontSize={"20px"}
                        fontWeight={400}
                        fontFamily={
                          "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                        }
                      >
                        020 3950 2246{" "}
                      </Text>
                    </HStack>
                  </VStack>
                </GridItem>

                {/* Fax */}
                <GridItem>
                  <VStack
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    ml={"5%"}
                  >
                    <HStack gap={"10px"}>
                      <Box w={"2em"} display={"flex"} alignItems={"center"}>
                        <TiPrinter size={"2em"} color="white" />
                      </Box>
                      <Text
                        fontSize={"25px"}
                        fontWeight={500}
                        fontFamily={"CeraRoundPro"}
                      >
                        Fax
                      </Text>
                    </HStack>
                    <HStack gap={"10px"}>
                      <Box w={"2em"}>{/* this is meant to be empty */}</Box>
                      <Text
                        fontSize={"20px"}
                        fontWeight={400}
                        fontFamily={
                          "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                        }
                      >
                        020 3006 2508{" "}
                      </Text>
                    </HStack>
                  </VStack>
                </GridItem>
              </Grid>

              {/* Third Row */}
              <GridItem>
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  ml={"2.5%"}
                >
                  <HStack gap={"10px"}>
                    <Box w={"2em"} display={"flex"} alignItems={"center"}>
                      <TfiEmail size={"2em"} color="white" />
                    </Box>
                    <Text
                      fontSize={"25px"}
                      fontWeight={500}
                      fontFamily={"CeraRoundPro"}
                    >
                      Email Address
                    </Text>
                  </HStack>
                  <HStack gap={"10px"}>
                    <Box w={"2em"}>{/* this is meant to be empty */}</Box>
                    <Text
                      fontSize={"20px"}
                      fontWeight={400}
                      fontFamily={
                        "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                      }
                    >
                      info@luminelaw.co.uk{" "}
                    </Text>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>
          </GridItem>

          {/* Opening Hours */}
          <GridItem
            height={"300px"}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            ml={"10%"}
            gap={"25px"}
          >
            <Text
              fontFamily={"CeraRoundPro"}
              fontSize={"25px"}
              fontWeight={"500"}
            >
              Opening Hours
            </Text>

            <VStack justifyContent={"center"} alignItems={"flex-start"}>
              <Text
                fontSize={"20px"}
                fontWeight={"400"}
                fontFamily={
                  "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                }
              >
                Mon-Fri:
              </Text>
              <Text
                fontSize={"20px"}
                fontWeight={"400"}
                fontFamily={
                  "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                }
              >
                9:30 am - 5:30pm
              </Text>
            </VStack>

            <VStack justifyContent={"center"} alignItems={"flex-start"}>
              <Text
                fontSize={"20px"}
                fontWeight={"400"}
                fontFamily={
                  "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                }
              >
                Sat-Sun:
              </Text>
              <Text
                fontSize={"20px"}
                fontWeight={"400"}
                fontFamily={
                  "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                }
              >
                Closed
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
      {/* <Footer /> */}
    </Container>
  );
};

export default Contact;
