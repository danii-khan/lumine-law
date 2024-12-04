import { Text, Container, Box, HStack, List, Image } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import BannerImg from "../../../assets/services/main/immigration/immigration-banner.png";
import ArrowImg from "../../../assets/services/main/immigration/main-link-arrow.png";
import "../../../styles/fonts.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Immigration = () => {
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
          <title>Lumine Law Immigration Services</title>
        </Helmet>
        <Navbar />

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={"300px"}
            bgImage={`url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Text
              fontSize={"45px"}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              fontStyle={"italic"}
            >
              Immigration
            </Text>
            <Box width={"60%"}>{/* Empty */}</Box>
          </Box>

          {/* Main */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
          >
            {/* Heading */}
            <HStack
              justifyContent={"space-evenly"}
              alignItems={"center"}
              my={"2.5%"}
            >
              <Text
                fontFamily={"CeraRoundPro"}
                fontSize={"35px"}
                fontWeight={500}
              >
                What is Immigration?{" "}
              </Text>
              <Box width={"70%"}>{/* Empty */}</Box>
            </HStack>

            {/* Main Para */}
            <Box width={"95%"} alignSelf={"center"} mb={"5%"}>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={"20px"}
                textAlign={"left"}
              >
                Our legal services are highly recommended by our clients and
                other professionals such as barristers and other solicitors. Our
                immigration and litigation departments fight to win.
              </Text>
            </Box>
          </Box>

          {/* List */}
          <HStack justifyContent={"space-around"} alignItems={"center"}>
            <List.Root gap="20" variant="plain" align="center" mb={"50px"}>
              {/* Spouse Visa */}
              <List.Item
                as={Link}
                to={"/all-services/immigration/spouse-visa"}
                color="black"
                fontSize={"25px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
                _hover={{ fontWeight: "600", textDecor: "underline" }}
                gap={"30px"}
              >
                <Image src={ArrowImg} width={"75px"} />
                Spouse Visa
              </List.Item>

              {/* 2 */}
              <List.Item
                color="black"
                fontSize={"25px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
                _hover={{ fontWeight: "600", textDecor: "underline" }}
                gap={"30px"}
              >
                <Image src={ArrowImg} width={"75px"} />
                British Citizenship Application
              </List.Item>

              {/* 3 */}
              <List.Item
                color="black"
                fontSize={"25px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
                _hover={{ fontWeight: "600", textDecor: "underline" }}
                gap={"30px"}
              >
                <Image src={ArrowImg} width={"75px"} />
                Skilled Worker Visa{" "}
              </List.Item>

              {/* 4 */}
              <List.Item
                color="black"
                fontSize={"25px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
                _hover={{ fontWeight: "600", textDecor: "underline" }}
                gap={"30px"}
              >
                <Image src={ArrowImg} width={"75px"} />
                UK Visitor Visa{" "}
              </List.Item>

              {/* 5 */}
              <List.Item
                color="black"
                fontSize={"25px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
                _hover={{ fontWeight: "600", textDecor: "underline" }}
                gap={"30px"}
              >
                <Image src={ArrowImg} width={"75px"} />
                Certificate of Sponsorship{" "}
              </List.Item>

              {/* 6 */}
              <List.Item
                color="black"
                fontSize={"25px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
                _hover={{ fontWeight: "600", textDecor: "underline" }}
                gap={"30px"}
              >
                <Image src={ArrowImg} width={"75px"} />
                Student Visa{" "}
              </List.Item>

              {/* 7 */}
              <List.Item
                color="black"
                fontSize={"25px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
                _hover={{ fontWeight: "600", textDecor: "underline" }}
                gap={"30px"}
              >
                <Image src={ArrowImg} width={"75px"} />
                Visa Extensions{" "}
              </List.Item>

              {/* 8 */}
              <List.Item
                color="black"
                fontSize={"25px"}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
                _hover={{ fontWeight: "600", textDecor: "underline" }}
                gap={"30px"}
              >
                <Image src={ArrowImg} width={"75px"} />
                Indefinite Leave to Remain{" "}
              </List.Item>
            </List.Root>

            <Box width={"65%"}>{/* empty */}</Box>
          </HStack>

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Immigration;
