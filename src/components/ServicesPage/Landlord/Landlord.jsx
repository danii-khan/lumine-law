import { useState } from "react";
import {
  Text,
  Container,
  Box,
  VStack,
  HStack,
  List,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import BannerImg from "../../../assets/services/main/landlord/landlord-banner.png";
import "../../../styles/fonts.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { GoPlus } from "react-icons/go";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ResidentialImg from "../../../assets/services/main/landlord/landlord-banner.png";
import NewsInsightsOne from "../../../assets/landing/news-insights-one.png";
import NewsInsightsTwo from "../../../assets/landing/news-insights-two.png";
import NewsInsightsThree from "../../../assets/landing/news-insights-three.png";
import NewsInsightsFour from "../../../assets/landing/news-insights-four.png";
import { AiOutlineMinus } from "react-icons/ai";

const Landlord = () => {
  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor={"#828b8c"}
        // backgroundColor={"white"}
        overflow="auto"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law Landlord and Tenant Disputes Services</title>
        </Helmet>
        <Navbar />

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "200px",
              lg: "250px",
              xl: "300px",
              "2xl": "350px",
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
              Landlord and Tenant Disputes
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
                fontSize={"24px"}
                fontWeight={600}
                textAlign={"left"}
                mb={"2.5%"}
              >
                Landlord and Tenant Disputes Services
              </Text>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
              >
                We can assist you in the following areas:
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
                  Possession claims including the preparation, service and
                  defence of section 8 and section 21 notices
                </List.Item>
                <List.Item>Recovery of rent arrears</List.Item>
                <List.Item>Claims for disrepair</List.Item>
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
                For all civil litigation and dispute issues, Please do not
                hesitate to get in touch with Lumine solicitors{" "}
                <strong>020 3950 2246</strong> or{" "}
                <strong>
                  <Link to={"/lumine-law/contact"}>Contact Us HERE</Link>{" "}
                </strong>
              </Text>
            </Box>
          </Box>

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

export default Landlord;
