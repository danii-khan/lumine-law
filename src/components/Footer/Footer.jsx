import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Center,
  Link,
  Icon,
} from "@chakra-ui/react";
import SRA from "../../assets/footer/sra-logo.png";
import AccreditLogo from "../../assets/footer/accredit.png";
import LexcelLogo from "../../assets/footer/lexcel.png";
import LumineLogo from "../../assets/navbar/logo.png";
import TwitterLogo from "../../assets/footer/twitter.png";
import LinkedInLogo from "../../assets/footer/linkedin.png";
import InstagramLogo from "../../assets/footer/instagram.png";
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
        px={"100px"}
        pb={"10px"}
        style={{ fontFamily: "CeraRoundPro" }}
        backgroundColor={"black"}
      >
        {/* Top */}
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          {/* address + all */}
          <Box justifyContent={"center"} alignItems={"center"}>
            <Text
              fontSize={"25px"}
              color={"#BEAB7C"}
              fontWeight={500}
              mb={"5px"}
              textAlign={"left"}
            >
              Our Location
            </Text>
            <VStack justifyContent={"center"} alignItems={"flex-start"}>
              <HStack>
                <FaLocationDot color={"#BEAB7C"} fontSize={"15px"} />
                <Text color={"white"} fontSize={"15px"} fontWeight={300}>
                  Address: 2nd floor, 156 Cromwell Road, London, SW7 4EF
                </Text>
              </HStack>
              <HStack>
                <PiPhoneCallFill color={"#BEAB7C"} fontSize={"15px"} />
                <Text color={"white"} fontSize={"15px"} fontWeight={300}>
                  Tel: 02039502246
                </Text>
              </HStack>
              <HStack>
                <BsPrinterFill color={"#BEAB7C"} fontSize={"15px"} />
                <Text color={"white"} fontSize={"15px"} fontWeight={300}>
                  Fax: 02030062503
                </Text>
              </HStack>
              <HStack>
                <MdEmail color={"#BEAB7C"} fontSize={"15px"} />
                <Text color={"white"} fontSize={"15px"} fontWeight={300}>
                  Email: info@luminelaw.com
                </Text>
              </HStack>
            </VStack>
          </Box>

          {/* certs */}
          <HStack>
            <Image
              src={SRA}
              alt="Solicitors Regulation Authority"
              height={"40px"}
              width={"100px"}
            ></Image>
            <Image
              src={AccreditLogo}
              alt="Accredited"
              height={"90px"}
              width={"100px"}
            ></Image>
            <Box
              background={"white"}
              height={"60px"}
              width={"100px"}
              border={"0px"}
              borderRadius={"4px"}
            >
              <Image
                src={LexcelLogo}
                alt="Lexcel"
                height={"100%"}
                width={"100%"}
              ></Image>
            </Box>
          </HStack>
        </HStack>
        {/* Center Text */}
        <Center>
          <Text
            fontSize={"15px"}
            fontWeight={400}
            my={"20px"}
            pb={"20px"}
            borderBottom={"0.5px solid #707070"}
          >
            Lumine Solicitors and Lumine Law are the trading names of Lumine Law
            Limited, a company registered in England & Wales (company
            registration no: 10996865). This firm is authorised and regulated by
            the Solicitors Regulation Authority (SRA No.645265).
          </Text>
        </Center>
        {/* Bottom */}
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          {/* 1st col */}
          <VStack width={"300px"}>
            {/* Logo and Name */}
            <HStack>
              <Image
                src={LumineLogo}
                alt="Lumine Logo"
                height={"65px"}
                width={"50px"}
              />
              <Text fontSize="25px" fontWeight={500}>
                LUMINE SOLICITORS
              </Text>
            </HStack>
            <Text fontSize={"15px"} fontWeight={300} color={"#BEAB7C"}>
              We offer the dedicated support and advice you require from the
              very outset of your matter.
            </Text>
          </VStack>
          {/* second col */}
          <Center gap={"30px"}>
            <Link href="https://twitter.com/luminelaw">
              <Image
                src={TwitterLogo}
                alt="Twitter Logo"
                height={"30px"}
                width={"30px"}
                cursor={"pointer"}
              />
            </Link>

            <Link href="https://www.linkedin.com/company/lumine-solicitors/">
              <Image
                src={LinkedInLogo}
                alt="LinkedIn Logo"
                height={"30px"}
                width={"30px"}
                cursor={"pointer"}
              />
            </Link>
            <Link href="https://www.instagram.com/luminesolicitors/">
              <Image
                src={InstagramLogo}
                alt="Instagram Logo"
                height={"30px"}
                width={"30px"}
                cursor={"pointer"}
              />
            </Link>
          </Center>
          {/* third col */}
          <VStack gap={"15px"}>
            <HStack gap={"90px"}>
              <Text fontSize={"15px"} fontWeight={400}>
                Privacy Policy
              </Text>
              <Text fontSize={"15px"} fontWeight={400}>
                Disclaimer
              </Text>
            </HStack>
            <Text
              fontSize={"15px"}
              fontWeight={400}
              fontFamily={
                "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
              }
            >
              © Copyright 2024 Lumine Law | All Rights Reserved
            </Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export default Footer;
