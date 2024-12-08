import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Center,
  Link,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import SRA from "../../assets/footer/sra-logo.png";
import AccreditLogo from "../../assets/footer/accredit.png";
import LexcelLogo from "../../assets/footer/lexcel.png";
import LumineLogo from "../../assets/navbar/logo.png";
import TwitterLogo from "../../assets/footer/twitter.png";
import LinkedInLogo from "../../assets/footer/linkedin.png";
import InstagramLogo from "../../assets/footer/instagram.png";
import FacebookLogo from "../../assets/footer/facebook.png";
import TikTokLogo from "../../assets/footer/tiktok.png";
import { FaLocationDot } from "react-icons/fa6";
import { BsPrinterFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../../styles/fonts.css";
import { PiPhoneCallFill } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <Box
        width={"100%"}
        borderTop={"0.5px solid #707070"}
        px={{ xs: "5%", lg: "2.5%" }}
        py={{ xs: "0px", lg: "10px" }}
        style={{ fontFamily: "CeraRoundPro" }}
        backgroundColor={"black"}
      >
        {/* Top */}
        <Flex
          flexDir={{ xs: "column", lg: "row" }}
          justifyContent={{ xs: "center", lg: "space-between" }}
          alignItems={"center"}
        >
          {/* address + all */}
          <Box justifyContent={"center"} alignItems={"center"}>
            <Text
              fontSize={{
                // {"25px"}
                xs: "18px",
                xl: "20px",
                "2xl": "25px",
              }}
              color={"#BEAB7C"}
              fontWeight={500}
              mb={"5px"}
              textAlign={"left"}
            >
              Our Location
            </Text>
            <VStack justifyContent={"center"} alignItems={"flex-start"}>
              <HStack>
                <FaLocationDot
                  color={"#BEAB7C"}
                  fontSize={{
                    // {"15px"}
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                />
                <Text
                  color={"white"}
                  fontSize={{
                    // {"15px"}
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                  fontWeight={300}
                >
                  Address: 2nd floor, 156 Cromwell Road, London, SW7 4EF
                </Text>
              </HStack>
              <HStack>
                <PiPhoneCallFill
                  color={"#BEAB7C"}
                  fontSize={{
                    // {"15px"}
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                />
                <Text
                  color={"white"}
                  fontSize={{
                    // {"15px"}
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                  fontWeight={300}
                >
                  Tel: 02039502246
                </Text>
              </HStack>
              <HStack>
                <BsPrinterFill
                  color={"#BEAB7C"}
                  fontSize={{
                    // {"15px"}
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                />
                <Text
                  color={"white"}
                  fontSize={{
                    // {"15px"}
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                  fontWeight={300}
                >
                  Fax: 02030062503
                </Text>
              </HStack>
              <HStack>
                <MdEmail
                  color={"#BEAB7C"}
                  fontSize={{
                    // {"15px"}
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                />
                <Text
                  color={"white"}
                  fontSize={{
                    // {"15px"}
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                  fontWeight={300}
                >
                  Email: info@luminelaw.com
                </Text>
              </HStack>
            </VStack>
          </Box>

          {/* certs */}
          <HStack my={{ xs: "10px", md: "0px" }}>
            <Image
              src={SRA}
              alt="Solicitors Regulation Authority"
              height={{
                xs: "35px",
                md: "25px",
                lg: "30px",
                xl: "40px",
              }}
              width={{
                xs: "85px",
                md: "85px",
                lg: "90px",
                xl: "100px",
              }}
              objectFit={"contain"}
            ></Image>
            <Image
              src={AccreditLogo}
              alt="Accredited"
              height={{
                xs: "70px",
                md: "75px",
                lg: "80px",
                xl: "90px",
              }}
              width={{
                xs: "80px",
                md: "85px",
                lg: "90px",
                xl: "100px",
              }}
              objectFit={"contain"}
            ></Image>
            <Box
              background={"white"}
              height={{
                xs: "40px",
                md: "45px",
                lg: "50px",
                xl: "60px",
              }}
              width={{
                xs: "80px",
                md: "85px",
                lg: "90px",
                xl: "100px",
              }}
              border={"0px"}
              borderRadius={"4px"}
            >
              <Image
                src={LexcelLogo}
                alt="Lexcel"
                height={"100%"}
                width={"100%"}
                objectFit={"contain"}
              ></Image>
            </Box>
          </HStack>
        </Flex>

        {/* Center Text */}
        <Center>
          <Text
            fontSize={{
              // {"15px"}
              xs: "12px",
              xl: "13px",
              "2xl": "15px",
            }}
            fontWeight={400}
            my={{
              // {"20px"}
              xs: "10px",
              sm: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            pb={{
              // {"20px"}
              xs: "10px",
              sm: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            borderBottom={"0.5px solid #707070"}
            color={"white"}
          >
            Lumine Solicitors and Lumine Law are the trading names of Lumine Law
            Limited, a company registered in England & Wales (company
            registration no: 10996865). This firm is authorised and regulated by
            the Solicitors Regulation Authority (SRA No.645265).
          </Text>
        </Center>

        {/* Bottom */}
        <Grid
          templateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
          templateRows={{ xs: "repeat(3, 0.6fr)", md: "1fr" }}
        >
          {/* 1st col */}
          <GridItem
            justifyContent={"center"}
            alignSelf={"center"}
            justifySelf={{ xs: "center", md: "flex-start" }}
          >
            <VStack
              width={{
                // base: {"300px"}
                xs: "2xs",
                md: "2xs",
                lg: "250px",
                xl: "275px",
                "2xl": "300px",
              }}
            >
              {/* Logo and Name */}
              <HStack>
                <Image
                  src={LumineLogo}
                  alt="Lumine Logo"
                  height={{
                    // base: {"65px"}
                    xs: "35px",
                    md: "40px",
                    lg: "45px",
                    xl: "55px",
                    "2xl": "65px",
                  }}
                  width={{
                    // base: {"50px"}
                    xs: "20px",
                    md: "25px",
                    lg: "30px",
                    xl: "40px",
                    "2xl": "50px",
                  }}
                />
                <Text
                  fontSize={{
                    // {"25px"}
                    xs: "16px",
                    lg: "18px",
                    xl: "20px",
                    "2xl": "25px",
                  }}
                  fontWeight={500}
                  color={"white"}
                >
                  LUMINE SOLICITORS
                </Text>
              </HStack>
              <Text
                fontSize={{
                  // {"15px"}
                  xs: "12px",
                  xl: "13px",
                  "2xl": "15px",
                }}
                fontWeight={300}
                color={"#BEAB7C"}
              >
                We offer the dedicated support and advice you require from the
                very outset of your matter.
              </Text>
            </VStack>
          </GridItem>

          {/* second col */}
          <GridItem justifyContent={"center"} alignSelf={"center"}>
            <Center
              gap={{
                // {"30px"}
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "20px",
                xl: "25px",
                "2xl": "30px",
              }}
            >
              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/company/lumine-solicitors/">
                <Image
                  src={LinkedInLogo}
                  alt="LinkedIn Logo"
                  height={{
                    // {"30px"}
                    xs: "20px",
                    xl: "25px",
                    "2xl": "30px",
                  }}
                  width={{
                    // {"30px"}
                    xs: "20px",
                    xl: "25px",
                    "2xl": "30px",
                  }}
                  cursor={"pointer"}
                />
              </Link>

              {/* Twitter */}
              <Link href="https://twitter.com/luminelaw">
                <Image
                  src={TwitterLogo}
                  alt="Twitter Logo"
                  height={{
                    // {"30px"}
                    xs: "20px",
                    xl: "25px",
                    "2xl": "30px",
                  }}
                  width={{
                    // {"30px"}
                    xs: "20px",
                    xl: "25px",
                    "2xl": "30px",
                  }}
                  cursor={"pointer"}
                />
              </Link>

              {/* Facebook */}
              <Link href="https://www.facebook.com/luminelaw.co.uk?_rdc=1&_rdr">
                <Image
                  src={FacebookLogo}
                  alt="Facebook Logo"
                  height={{
                    // {"30px"}
                    xs: "20px",
                    xl: "25px",
                    "2xl": "30px",
                  }}
                  width={{
                    // {"30px"}
                    xs: "20px",
                    xl: "25px",
                    "2xl": "30px",
                  }}
                  cursor={"pointer"}
                />
              </Link>

              {/* Instagram */}
              <Link href="https://www.instagram.com/luminesolicitors/">
                <Image
                  src={InstagramLogo}
                  alt="Instagram Logo"
                  height={{
                    // {"30px"}
                    xs: "20px",
                    xl: "25px",
                    "2xl": "30px",
                  }}
                  width={{
                    // {"30px"}
                    xs: "20px",
                    xl: "25px",
                    "2xl": "30px",
                  }}
                  cursor={"pointer"}
                />
              </Link>

              {/* Tiktok */}
              <Link href="https://www.tiktok.com/@luminesolicitors?_t=8pIu7DAd1ZR&_r=1">
                <Image
                  src={TikTokLogo}
                  alt="TikTok Logo"
                  height={{
                    // {"30px"}
                    xs: "20px",
                    xl: "25px",
                    "2xl": "30px",
                  }}
                  width={{
                    // {"30px"}
                    xs: "20px",
                    xl: "25px",
                    "2xl": "30px",
                  }}
                  cursor={"pointer"}
                />
              </Link>
            </Center>
          </GridItem>

          {/* third col */}
          <GridItem justifyContent={"center"} alignSelf={"center"}>
            <VStack
              gap={{
                // {"15px"}
                xs: "8px",
                sm: "10px",
                md: "11px",
                lg: "12px",
                xl: "13px",
                "2xl": "15px",
              }}
            >
              <HStack
                gap={{
                  // {"90px"}
                  xs: "40px",
                  sm: "50px",
                  md: "60px",
                  lg: "70px",
                  xl: "80px",
                  "2xl": "90px",
                }}
              >
                <Text
                  fontSize={{
                    // {"15px"}
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                  fontWeight={400}
                  color={"white"}
                >
                  Privacy Policy
                </Text>
                <Text
                  fontSize={{
                    // {"15px"}
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                  fontWeight={400}
                  color={"white"}
                >
                  Disclaimer
                </Text>
              </HStack>
              <Text
                fontSize={{
                  // {"15px"}
                  xs: "12px",
                  xl: "13px",
                  "2xl": "15px",
                }}
                fontWeight={400}
                fontFamily={
                  "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                }
                color={"white"}
              >
                © Copyright 2024 Lumine Law | All Rights Reserved
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
