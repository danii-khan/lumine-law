import React, { Suspense } from "react";
import {
  Container,
  Box,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Field } from "../../lib/chakra-components/ui/field";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { TiPrinter } from "react-icons/ti";
import { TfiEmail } from "react-icons/tfi";
import { Helmet } from "react-helmet";
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));

const Contact = () => {
  return (
    <Container
      width="100vw"
      maxWidth="100%"
      height="100vh"
      overflow="auto"
      m={0}
      p={0}
      backgroundColor={"white"}
    >
      <Helmet>
        <title>Lumine Law Contact</title>
      </Helmet>
      <Box width="100%" height="calc(100% - 50px)" p={0} m={0} pt={"50px"}>
        {/* Contact Header */}
        <Grid
          width={"100%"}
          backgroundColor={"#BAA990"}
          templateColumns={{ xs: "1fr", xl: "3fr 4fr 2fr" }}
          templateRows={{ xs: "repeat(3, 1fr)", xl: "1fr" }}
          borderBottom={"1px solid white"}
          minHeight={"300px"}
          maxHeight={"400px"}
        >
          {/* Contact Us */}
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            border={"1px solid white"}
          >
            <Text
              fontSize={{
                xs: "18px",
                sm: "20px",
                md: "24px",
                lg: "30px",
                xl: "36px",
                "2xl": "40px",
              }}
              fontFamily={"CeraRoundPro"}
              fontWeight={600}
            >
              Contact Us
            </Text>
          </GridItem>

          {/* 2nd Col */}
          <GridItem
            borderLeft={"1px solid white"}
            borderRight={"1px solid white"}
            border={"1px solid white"}
          >
            <Grid
              height={"100%"}
              width={"100%"}
              templateRows={"repeat(3, 1fr)"}
              alignItems={"center"}
            >
              {/* First Row */}
              <GridItem py={"10px"}>
                <VStack
                  justifyContent={"center"}
                  alignItems={{ xs: "center", xl: "flex-start" }}
                  ml={{ xs: "0%", xl: "2.5%" }}
                >
                  <HStack gap={"10px"}>
                    <Box w={"2em"} display={"flex"} alignItems={"center"}>
                      <IoLocationOutline size={"2em"} color="white" />
                    </Box>
                    <Text
                      fontSize={{
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                        lg: "20px",
                        xl: "21px",
                        "2xl": "22px",
                      }}
                      fontWeight={500}
                      fontFamily={"CeraRoundPro"}
                    >
                      Address
                    </Text>
                  </HStack>
                  <HStack gap={"10px"}>
                    <Box w={"2em"} display={{ xs: "none", xl: "block" }}>
                      {/* this is meant to be empty */}
                    </Box>
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
                py={"10px"}
              >
                {/* Telephone*/}
                <GridItem borderRight={"1px solid white"}>
                  <VStack
                    justifyContent={"center"}
                    alignItems={{ xs: "center", xl: "flex-start" }}
                    ml={{ xs: "0%", xl: "5%" }}
                  >
                    <HStack gap={"10px"}>
                      <Box w={"2em"} display={"flex"} alignItems={"center"}>
                        <LuPhoneCall size={"2em"} color="white" />
                      </Box>
                      <Text
                        fontSize={{
                          xs: "14px",
                          sm: "16px",
                          md: "18px",
                          lg: "20px",
                          xl: "21px",
                          "2xl": "22px",
                        }}
                        fontWeight={500}
                        fontFamily={"CeraRoundPro"}
                      >
                        Telephone
                      </Text>
                    </HStack>
                    <HStack gap={"10px"}>
                      <Box w={"2em"} display={{ xs: "none", xl: "block" }}>
                        {/* this is meant to be empty */}
                      </Box>
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
                    alignItems={{ xs: "center", xl: "flex-start" }}
                    ml={{ xs: "0%", xl: "5%" }}
                  >
                    <HStack gap={"10px"}>
                      <Box w={"2em"} display={"flex"} alignItems={"center"}>
                        <TiPrinter size={"2em"} color="white" />
                      </Box>
                      <Text
                        fontSize={{
                          xs: "14px",
                          sm: "16px",
                          md: "18px",
                          lg: "20px",
                          xl: "21px",
                          "2xl": "22px",
                        }}
                        fontWeight={500}
                        fontFamily={"CeraRoundPro"}
                      >
                        Fax
                      </Text>
                    </HStack>
                    <HStack gap={"10px"}>
                      <Box w={"2em"} display={{ xs: "none", xl: "block" }}>
                        {/* this is meant to be empty */}
                      </Box>
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
              <GridItem py={"10px"}>
                <VStack
                  justifyContent={"center"}
                  alignItems={{ xs: "center", xl: "flex-start" }}
                  ml={{ xs: "0%", xl: "2.5%" }}
                >
                  <HStack gap={"10px"}>
                    <Box w={"2em"} display={"flex"} alignItems={"center"}>
                      <TfiEmail size={"2em"} color="white" />
                    </Box>
                    <Text
                      fontSize={{
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                        lg: "20px",
                        xl: "21px",
                        "2xl": "22px",
                      }}
                      fontWeight={500}
                      fontFamily={"CeraRoundPro"}
                    >
                      Email Address
                    </Text>
                  </HStack>
                  <HStack gap={"10px"}>
                    <Box w={"2em"} display={{ xs: "none", xl: "block" }}>
                      {/* this is meant to be empty */}
                    </Box>
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
            display={"flex"}
            flexDir={{ xs: "row", xl: "column" }}
            justifyContent={"center"}
            alignItems={{ xs: "center", xl: "flex-start" }}
            ml={{ xs: "0%", xl: "10%" }}
            gap={"25px"}
          >
            <Text
              fontFamily={"CeraRoundPro"}
              fontSize={{
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "20px",
                xl: "21px",
                "2xl": "22px",
              }}
              fontWeight={"500"}
            >
              Opening Hours
            </Text>

            <Flex
              flexFlow={{ xs: "row", xl: "column" }}
              justifyContent={"center"}
              alignItems={"flex-start"}
            >
              <Text
                fontSize={{
                  xs: "14px",
                  sm: "14px",
                  md: "16px",
                  lg: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
                fontWeight={"400"}
                fontFamily={
                  "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                }
              >
                Mon-Fri:
              </Text>
              <Text
                fontSize={{
                  xs: "14px",
                  sm: "14px",
                  md: "16px",
                  lg: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
                fontWeight={"400"}
                fontFamily={
                  "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                }
              >
                9:30 am - 5:30pm
              </Text>
            </Flex>

            <Flex
              flexFlow={{ xs: "row", xl: "column" }}
              justifyContent={"center"}
              alignItems={"flex-start"}
            >
              <Text
                fontSize={{
                  xs: "14px",
                  sm: "14px",
                  md: "16px",
                  lg: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
                fontWeight={"400"}
                fontFamily={
                  "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                }
              >
                Sat-Sun:
              </Text>
              <Text
                fontSize={{
                  xs: "14px",
                  sm: "14px",
                  md: "16px",
                  lg: "16px",
                  xl: "18px",
                  "2xl": "20px",
                }}
                fontWeight={"400"}
                fontFamily={
                  "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                }
              >
                Closed
              </Text>
            </Flex>
          </GridItem>
        </Grid>

        {/* Main */}
        <VStack
          width="100%"
          my={"20px"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"20px"}
          mb={"50px"}
        >
          {/* get in touch */}
          <Text
            fontSize={{
              xs: "16px",
              sm: "18px",
              md: "20px",
              lg: "24px",
              xl: "30px",
              "2xl": "36px",
            }}
            fontWeight={600}
            fontFamily={"CeraRoundPro"}
            textAlign={"left"}
            color={"black"}
            mb={"25px"}
          >
            Get In Touch
          </Text>
          <Grid
            templateColumns={{ xs: "1fr", xl: "repeat(2, 1fr)" }}
            templateRows={{ xs: "repeat(2, 1fr)", xl: "1fr" }}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            <GridItem
              justifySelf={"center"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"10px"}
              border={"1px solid black"}
              borderRadius={"12px"}
              width={"90%"}
              py={"10px"}
              backgroundColor={"#ffe7c5"}
            >
              {/* instructions */}
              <Text
                fontSize={{
                  xs: "14px",
                  sm: "16px",
                  md: "18px",
                  xl: "20px",
                  "2xl": "22px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                textAlign={"center"}
                color={"black"}
                mb={"25px"}
              >
                Please fill in the form and we’ll get back to you as soon as we
                can.
              </Text>

              {/* form */}
              <VStack
                gap="6"
                justifyContent={"center"}
                alignItems={"flex-start"}
                textAlign={"left"}
              >
                {/* Names */}
                <VStack gap={"10px"}>
                  {/* First */}
                  <Field
                    orientation="vertical"
                    label="First Name"
                    required
                    unstyled="true"
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={500}
                    color={"black"}
                    fontFamily={"CeraRoundPro"}
                  >
                    <Input
                      placeholder="John"
                      flex="1"
                      fontFamily={
                        "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                      }
                      backgroundColor={"white"}
                      color={"black"}
                      borderColor={"black"}
                      borderRadius={"4px"}
                    />
                  </Field>

                  {/* Last */}
                  <Field
                    orientation="vertical"
                    label="Last Name"
                    required
                    unstyled="true"
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={500}
                    fontFamily={"CeraRoundPro"}
                    color={"black"}
                  >
                    <Input
                      placeholder="Doe"
                      flex="1"
                      fontFamily={
                        "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                      }
                      backgroundColor={"white"}
                      color={"black"}
                      borderColor={"black"}
                      borderRadius={"4px"}
                    />
                  </Field>
                </VStack>

                {/* Email */}
                <Field
                  label="Email Address"
                  required
                  unstyled="true"
                  fontSize={{
                    xs: "12px",
                    sm: "12px",
                    md: "14px",
                    xl: "16px",
                    "2xl": "18px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"black"}
                >
                  <Input
                    placeholder="me@example.com"
                    fontFamily={
                      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                    }
                    backgroundColor={"white"}
                    color={"black"}
                    borderColor={"black"}
                    borderRadius={"4px"}
                    width={"90%"}
                  />
                </Field>

                {/* Number */}
                <Field
                  label="Phone Number"
                  required
                  unstyled="true"
                  fontSize={{
                    xs: "12px",
                    sm: "12px",
                    md: "14px",
                    xl: "16px",
                    "2xl": "18px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"black"}
                >
                  <Input
                    placeholder="+44 1234567890"
                    fontFamily={
                      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                    }
                    backgroundColor={"white"}
                    color={"black"}
                    borderColor={"black"}
                    borderRadius={"4px"}
                    width={"90%"}
                  />
                </Field>

                {/* Message */}
                <Field
                  label="Message"
                  required
                  unstyled="true"
                  fontSize={{
                    xs: "12px",
                    sm: "12px",
                    md: "14px",
                    xl: "16px",
                    "2xl": "18px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"black"}
                  width={"100%"}
                >
                  <Textarea
                    placeholder="Hi, I would like to know more about..."
                    fontFamily={
                      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                    }
                    backgroundColor={"white"}
                    color={"black"}
                    borderColor={"black"}
                    borderRadius={"4px"}
                    minHeight={"150px"}
                    maxHeight={"200px"}
                  />
                </Field>
              </VStack>

              <Button
                fontSize={{
                  //base: {"18px"}
                  xs: "12px",
                  md: "14px",
                  lg: "14px",
                  xl: "16px",
                  "2xl": "18px",
                }}
                py={{
                  //base: {"15px"}
                  xs: "6px",
                  md: "8px",
                  lg: "10px",
                  xl: "12px",
                  "2xl": "15px",
                }}
                backgroundColor={"black"}
                color={"white"}
                border={"1px solid #FFFFFF"}
                borderRadius={"8px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                _hover={{
                  borderColor: "#beab7c",
                  backgroundColor: "black",
                  color: "#beab7c",
                  transition: "all 0.3s ease",
                }}
              >
                Send Now
              </Button>
            </GridItem>
            <GridItem
              alignSelf={{ xs: "center", lg: "flex-start" }}
              justifySelf={"center"}
              width="90%"
            >
              {/* Google Maps */}
              <Box
                width={"100%"}
                height={{
                  xs: "400px",
                  sm: "450px",
                  md: "500px",
                  lg: "550px",
                  xl: "600px",
                  "2xl": "600px",
                }}
                mt={6}
                mb={"50px"}
                borderRadius="8px"
                overflow="hidden"
                border="1px solid white"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.004089600194!2d-0.19325174666734102!3d51.494792439171626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4b49fb8783%3A0x22f7a54aa37a1eb3!2sLumine%20Solicitors!5e0!3m2!1sen!2s!4v1732136989695!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </GridItem>
          </Grid>
        </VStack>

        {/* Other Services */}
        <Suspense fallback={<div>Loading All Services ...</div>}>
          <AllServiceLinks />
        </Suspense>

        {/* Prices */}
        <Suspense fallback={<div>Loading All Prices ...</div>}>
          <AllPrices />
        </Suspense>

        {/* News and Insights */}
        <Suspense fallback={<div>Loading All News and Insights ...</div>}>
          <AllNewsInsights />
        </Suspense>

        {/* Footer */}
        <Footer />
      </Box>
    </Container>
  );
};

export default Contact;
