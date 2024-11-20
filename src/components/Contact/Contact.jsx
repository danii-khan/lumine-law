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
  Image,
} from "@chakra-ui/react";
import { Field } from "../../lib/chakra-components/ui/field";
import { Switch } from "../../lib/chakra-components/ui/switch";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ContactImg from "../../assets/contact/contact-top.png";
import WhatsappImg from "../../assets/contact/whatsapp.png";
import "../../styles/fonts.css";
import { IoLocationOutline, IoLogoWhatsapp } from "react-icons/io5";
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
        {/* Contact Header */}
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

        {/* Main */}
        <Grid width="100%" my={"20px"} templateColumns={"repeat(2, 1fr)"}>
          <GridItem
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            pl={"10%"}
            gap={"10px"}
          >
            {/* get in touch */}
            <Text
              fontSize={"45px"}
              fontWeight={500}
              fontFamily={"CeraRoundPro"}
              textAlign={"left"}
            >
              Get In Touch
            </Text>

            {/* instructions */}
            <Text
              fontSize={"25px"}
              fontWeight={400}
              fontFamily={"CeraRoundPro"}
              width={"600px"}
              textAlign={"left"}
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
              <HStack gap={"25px"}>
                {/* First */}
                <Field
                  orientation="vertical"
                  label="First Name"
                  required
                  unstyled="true"
                  fontSize="25px"
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  maxWidth={"150px"}
                >
                  <Input
                    placeholder="John"
                    flex="1"
                    fontFamily={
                      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                    }
                    backgroundColor={"white"}
                    color={"black"}
                    borderColor={"white"}
                    borderRadius={"4px"}
                    height={"25px"}
                  />
                </Field>

                {/* Last */}
                <Field
                  orientation="vertical"
                  label="Last Name"
                  required
                  unstyled="true"
                  fontSize="25px"
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  maxWidth={"150px"}
                >
                  <Input
                    placeholder="Doe"
                    flex="1"
                    fontFamily={
                      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                    }
                    backgroundColor={"white"}
                    color={"black"}
                    borderColor={"white"}
                    borderRadius={"4px"}
                    height={"25px"}
                  />
                </Field>
              </HStack>

              {/* Email */}
              <Field
                label="Email Address"
                required
                unstyled="true"
                fontSize="25px"
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                maxWidth={"325px"}
              >
                <Input
                  placeholder="me@example.com"
                  fontFamily={
                    "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                  }
                  backgroundColor={"white"}
                  color={"black"}
                  borderColor={"white"}
                  borderRadius={"4px"}
                  height={"25px"}
                />
              </Field>

              {/* Number */}
              <Field
                label="Phone Number"
                required
                unstyled="true"
                fontSize="25px"
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                maxWidth={"325px"}
              >
                <Input
                  placeholder="+44 1234567890"
                  fontFamily={
                    "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                  }
                  backgroundColor={"white"}
                  color={"black"}
                  borderColor={"white"}
                  borderRadius={"4px"}
                  height={"25px"}
                />
              </Field>

              {/* Message */}
              <Field
                label="Message"
                required
                unstyled="true"
                fontSize="25px"
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                width={"325px"}
              >
                <Textarea
                  placeholder="Hi, I would like to know more about..."
                  fontFamily={
                    "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                  }
                  backgroundColor={"white"}
                  color={"black"}
                  borderColor={"white"}
                  borderRadius={"4px"}
                  height={"100px"}
                />
              </Field>
            </VStack>

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
              Send Now
            </Button>

            {/* Google Maps */}
            <Box
              width="325px"
              height="300px"
              mt={6}
              mb={"50px"}
              borderRadius="4px"
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
          <GridItem>2</GridItem>
        </Grid>

        <HStack
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
          mb={"25px"}
          mr={"10px"}
        >
          <Button
            borderRadius={"12px"}
            height={"20px"}
            _hover={{ backgroundColor: "black", color: "#beab7c" }}
          >
            <Text
              fontWeight="400"
              fontSize="8px"
              fontFamily="Inter"
              transition="all 0.3s ease"
              _groupHover={{ color: "#beab7c" }}
            >
              Need help?
            </Text>
            <Text
              fontWeight="500"
              fontSize="8px"
              fontFamily="HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
              transition="all 0.3s ease"
              _groupHover={{ color: "#beab7c" }}
            >
              Chat with us.
            </Text>
          </Button>
          {/* <Image
            src={WhatsappImg}
            alt="Whatsapp logo"
            height={"50px"}
            width={"50px"}
            cursor={"pointer"}
          /> */}
          <IoLogoWhatsapp
            size="5em"
            style={{
              backgroundColor: "#4caf50",
              borderRadius: "10%",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "black";
              e.currentTarget.style.color = "#beab7c";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#4caf50";
              e.currentTarget.style.color = "white";
            }}
          />
        </HStack>

        {/* Footer */}
        <Footer />
      </Box>
    </Container>
  );
};

export default Contact;
