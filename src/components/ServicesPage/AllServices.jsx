import {
  Text,
  Container,
  Box,
  HStack,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BannerImg from "../../assets/services/all/bannertest.png";
import ImmigrationImg from "../../assets/services/main/immigration/main-banner.png";
import ResidentialImg from "../../assets/services/main/residential/main-banner.png";
import DisputeImg from "../../assets/services/main/dispute/main-banner.png";
import LandlordImg from "../../assets/services/main/landlord/main-banner.png";
import FamilyImg from "../../assets/services/main/family/main-banner.png";
import "../../styles/fonts.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AllServices = () => {
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
          <title>Lumine Law Services</title>
        </Helmet>
        <Navbar />

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "100px",
              lg: "125px",
              xl: "150px",
              "2xl": "175px",
            }}
            bgImage={`url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Text
              fontSize={{ xs: "20px", lg: "30px", xl: "36px", "2xl": "45px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              fontStyle={"italic"}
            >
              Services
            </Text>
            <Box width={{ xs: "60%", md: "65%", lg: "75%" }}>{/* Empty */}</Box>
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
              justifyContent={"space-around"}
              alignItems={"center"}
              my={{ xs: "5%", lg: "2%", xl: "2.5%", "2xl": "1%" }}
            >
              <Text
                fontFamily={"CeraRoundPro"}
                fontSize={{ xs: "14px", lg: "20px", xl: "26px", "2xl": "30px" }}
                fontWeight={500}
              >
                Our Legal Services
              </Text>
              <Box
                width={{
                  xs: "55%",
                  md: "60%",
                  lg: "62.5%",
                  xl: "65%",
                  "2xl": "70%",
                }}
              >
                {/* Empty */}
              </Box>
            </HStack>

            {/* Main Para */}
            <Box
              width={{ xs: "95%", lg: "92.5%", xl: "95%" }}
              alignSelf={"center"}
              mb={{ xs: "5%", lg: "2.5%", xl: "5%", "2xl": "2.5%" }}
            >
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "10px", lg: "12px", xl: "14px", "2xl": "16px" }}
                textAlign={"left"}
              >
                Our legal services are highly recommended by our clients and
                other professionals such as barristers and other solicitors. Our
                immigration and litigation departments fight to win. Our
                property department is focused on achieving the best and fastest
                outcome for our clients. We explain complicated legal issues
                clearly and offer optimum solutions for each client by providing
                advice which is versatile and effective. Known for our integrity
                and commitment to our clients, we are pleased to say that 90% of
                our clients come to us through recommendations.
              </Text>
            </Box>
          </Box>

          {/* Service Grid */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            alignItems={"center"}
            color={"black"}
            mb={{ xs: "25px", lg: "50px" }}
          >
            <Grid
              width={{ xs: "95%", lg: "95%", xl: "95%", "2xl": "80%" }}
              templateColumns={{ xs: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
              templateRows={{ xs: "repeat(4, 1fr)", lg: "repeat(3, 1fr)" }}
              gap={{ xs: "10px", lg: "20px", xl: "25px", "2xl": "30px" }}
              justifyItems={"center"}
              alignItems={"center"}
            >
              {/* Immigration */}
              <GridItem
                width={{ xs: "100%", lg: "80%", xl: "80%", "2xl": "80%" }}
                height={{
                  xs: "125px",
                  lg: "175px",
                  xl: "200px",
                  "2xl": "250px",
                }}
                padding={{
                  xs: "15% 10px",
                  lg: "6px 14px",
                  xl: "8px 16px",
                  "2xl": "10px 20px",
                }}
                bgImage={`url(${ImmigrationImg})`}
                bgSize={"cover"}
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                color={"#ffffff"}
                _hover={{
                  opacity: "0.8",
                  transition: "all 0.5s ease",
                }}
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
                        xs: "11px",
                        lg: "14px",
                        xl: "16px",
                        "2xl": "20px",
                      }}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={500}
                      textAlign={"left"}
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
                          xs: "10px",
                          lg: "12px",
                          xl: "13px",
                          "2xl": "16px",
                        }}
                        fontFamily={"CeraRoundPro"}
                        fontWeight={400}
                      >
                        A lil para about what this service is{" "}
                      </Text>
                      <HiOutlineArrowLongRight size={"3em"} />
                    </VStack>
                  </Box>
                </Link>
              </GridItem>
              {/* Residential + Commercial */}
              <GridItem
                width={{ xs: "100%", lg: "80%", xl: "80%", "2xl": "80%" }}
                height={{
                  xs: "125px",
                  lg: "175px",
                  xl: "200px",
                  "2xl": "250px",
                }}
                padding={{
                  xs: "15% 10px",
                  lg: "6px 14px",
                  xl: "8px 16px",
                  "2xl": "10px 20px",
                }}
                bgImage={`url(${ResidentialImg})`}
                bgSize={"cover"}
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                color={"#ffffff"}
                _hover={{
                  opacity: "0.8",
                  transition: "all 0.5s ease",
                }}
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
                      xs: "11px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "20px",
                    }}
                    fontFamily={"CeraRoundPro"}
                    fontWeight={500}
                    textAlign={"left"}
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
                        xs: "10px",
                        lg: "12px",
                        xl: "13px",
                        "2xl": "16px",
                      }}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={400}
                    >
                      A lil para about what this service is{" "}
                    </Text>
                    <HiOutlineArrowLongRight size={"3em"} />
                  </VStack>
                </Box>
              </GridItem>
              {/* Dispute Resolution */}
              <GridItem
                width={{ xs: "100%", lg: "80%", xl: "80%", "2xl": "80%" }}
                height={{
                  xs: "125px",
                  lg: "175px",
                  xl: "200px",
                  "2xl": "250px",
                }}
                padding={{
                  xs: "15% 10px",
                  lg: "6px 14px",
                  xl: "8px 16px",
                  "2xl": "10px 20px",
                }}
                bgImage={`url(${DisputeImg})`}
                bgSize={"cover"}
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                color={"#ffffff"}
                _hover={{
                  opacity: "0.8",
                  transition: "all 0.5s ease",
                }}
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
                      xs: "11px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "20px",
                    }}
                    fontFamily={"CeraRoundPro"}
                    fontWeight={500}
                    textAlign={"left"}
                    color={"white"}
                  >
                    Dispute & Resolution Civil Litigation
                  </Text>
                  <VStack
                    width={"100%"}
                    height={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                  >
                    <Text
                      fontSize={{
                        xs: "10px",
                        lg: "12px",
                        xl: "13px",
                        "2xl": "16px",
                      }}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={400}
                      color={"white"}
                    >
                      A lil para about what this service is{" "}
                    </Text>
                    <HiOutlineArrowLongRight size={"3em"} />
                  </VStack>
                </Box>
              </GridItem>
              {/* Landlord + Tenant */}
              <GridItem
                width={{ xs: "100%", lg: "80%", xl: "80%", "2xl": "80%" }}
                height={{
                  xs: "125px",
                  lg: "175px",
                  xl: "200px",
                  "2xl": "250px",
                }}
                padding={{
                  xs: "15% 10px",
                  lg: "6px 14px",
                  xl: "8px 16px",
                  "2xl": "10px 20px",
                }}
                bgImage={`url(${LandlordImg})`}
                bgSize={"cover"}
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                color={"#ffffff"}
                _hover={{
                  opacity: "0.8",
                  transition: "all 0.5s ease",
                }}
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
                      xs: "11px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "20px",
                    }}
                    fontFamily={"CeraRoundPro"}
                    fontWeight={500}
                    textAlign={"left"}
                    color={"white"}
                  >
                    Landlord & Tenant Disputes
                  </Text>
                  <VStack
                    width={"100%"}
                    height={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                  >
                    <Text
                      fontSize={{
                        xs: "10px",
                        lg: "12px",
                        xl: "13px",
                        "2xl": "16px",
                      }}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={400}
                      color={"white"}
                    >
                      A lil para about what this service is{" "}
                    </Text>
                    <HiOutlineArrowLongRight size={"3em"} />
                  </VStack>
                </Box>
              </GridItem>
              {/* Family + Children */}
              <GridItem
                width={{ xs: "100%", lg: "80%", xl: "80%", "2xl": "80%" }}
                height={{
                  xs: "125px",
                  lg: "175px",
                  xl: "200px",
                  "2xl": "250px",
                }}
                padding={{
                  xs: "15% 10px",
                  lg: "6px 14px",
                  xl: "8px 16px",
                  "2xl": "10px 20px",
                }}
                bgImage={`url(${FamilyImg})`}
                bgSize={"cover"}
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                color={"#ffffff"}
                _hover={{
                  opacity: "0.8",
                  transition: "all 0.5s ease",
                }}
              >
                <Link
                  to={"/lumine-law/all-services/family-and-children"}
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
                        xs: "11px",
                        lg: "14px",
                        xl: "16px",
                        "2xl": "20px",
                      }}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={500}
                      textAlign={"left"}
                      color={"white"}
                    >
                      Family & Children
                    </Text>
                    <VStack
                      width={"100%"}
                      height={"100%"}
                      justifyContent={"space-between"}
                      alignItems={"flex-start"}
                    >
                      <Text
                        fontSize={{
                          xs: "10px",
                          lg: "12px",
                          xl: "13px",
                          "2xl": "16px",
                        }}
                        fontFamily={"CeraRoundPro"}
                        fontWeight={400}
                        color={"white"}
                      >
                        A lil para about what this service is{" "}
                      </Text>
                      <HiOutlineArrowLongRight size={"3em"} />
                    </VStack>
                  </Box>
                </Link>
              </GridItem>
              {/* New Service */}
              <GridItem
                width={{ xs: "100%", lg: "80%", xl: "80%", "2xl": "80%" }}
                height={{
                  xs: "125px",
                  lg: "175px",
                  xl: "200px",
                  "2xl": "250px",
                }}
                padding={{
                  xs: "15% 10px",
                  lg: "6px 14px",
                  xl: "8px 16px",
                  "2xl": "10px 20px",
                }}
                // bgImage={`url(${DisputeImg})`}
                // bgSize={"cover"}
                // bgPos={"center"}
                // bgRepeat={"no-repeat"}
                backgroundColor={"#D7E3F1"}
                color={"#000000"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                _hover={{
                  opacity: "0.8",
                  transition: "all 0.5s ease",
                }}
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
                      xs: "11px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "20px",
                    }}
                    fontFamily={"CeraRoundPro"}
                    fontWeight={500}
                    textAlign={"left"}
                  >
                    New Service
                  </Text>
                  <VStack
                    width={"100%"}
                    height={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                  >
                    <Text
                      fontSize={{
                        xs: "10px",
                        lg: "12px",
                        xl: "13px",
                        "2xl": "16px",
                      }}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={400}
                    >
                      A lil para about what this service is{" "}
                    </Text>
                    <HiOutlineArrowLongRight size={"3em"} />
                  </VStack>
                </Box>
              </GridItem>
              {/* empty grid */}
              <GridItem display={{ xs: "none", lg: "grid" }}>
                {/* empty */}
              </GridItem>
              {/* New Service */}
              <GridItem
                width={{ xs: "100%", lg: "80%", xl: "80%", "2xl": "80%" }}
                height={{
                  xs: "125px",
                  lg: "175px",
                  xl: "200px",
                  "2xl": "250px",
                }}
                padding={{
                  xs: "15% 10px",
                  lg: "6px 14px",
                  xl: "8px 16px",
                  "2xl": "10px 20px",
                }}
                // bgImage={`url(${DisputeImg})`}
                // bgSize={"cover"}
                // bgPos={"center"}
                // bgRepeat={"no-repeat"}
                backgroundColor={"#D7E3F1"}
                color={"#000000"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                _hover={{
                  opacity: "0.8",
                  transition: "all 0.5s ease",
                }}
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
                      xs: "11px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "20px",
                    }}
                    fontFamily={"CeraRoundPro"}
                    fontWeight={500}
                    textAlign={"left"}
                  >
                    New Service
                  </Text>
                  <VStack
                    width={"100%"}
                    height={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                  >
                    <Text
                      fontSize={{
                        xs: "10px",
                        lg: "12px",
                        xl: "13px",
                        "2xl": "16px",
                      }}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={400}
                    >
                      A lil para about what this service is{" "}
                    </Text>
                    <HiOutlineArrowLongRight size={"3em"} />
                  </VStack>
                </Box>
              </GridItem>
            </Grid>
          </Box>

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default AllServices;
