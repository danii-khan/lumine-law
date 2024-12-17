import { Text, Box, VStack, Grid, GridItem } from "@chakra-ui/react";
import "../../styles/fonts.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ImmigrationImg from "../../assets/services/main/immigration/main-banner.png";
import ResidentialImg from "../../assets/services/main/residential/main-banner.png";
import DisputeImg from "../../assets/services/main/dispute/main-banner.png";
import LandlordImg from "../../assets/services/main/landlord/main-banner.png";
import FamilyImg from "../../assets/services/main/family/main-banner.png";
import IntellectualImg from "../../assets/services/main/intellectual/main-banner.png";
import CommercialImg from "../../assets/services/main/commercial/main-banner.png";
import WillsProbateImg from "../../assets/services/main/wills-probate/main-banner.png";

import AllServicesImg from "../../assets/services/all/bannertest.png";

const AllServiceLinks = () => {
  return (
    <Box mb="50px" _loading={"lazy"}>
      {/* Header */}
      <Box width={"100%"} display={"flex"} flexFlow={"column"} color={"black"}>
        <Box width={"90%"} alignSelf={"center"}>
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
            textAlign={"left"}
          >
            Other Services
          </Text>
        </Box>
      </Box>

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
          templateColumns={{ xs: "repeat(2, 2fr)", lg: "repeat(3, 1fr)" }}
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
          {/* Immigration */}
          <GridItem
            width={"100%"}
            height={{
              xs: "175px",
              sm: "175px",
              md: "175px",
              lg: "200px",
              xl: "225px",
              "2xl": "250px",
            }}
            padding={{ xs: "10px 10px", lg: "10px 20px" }}
            border={"1px solid black"}
            borderRadius={"8px"}
            cursor={"pointer"}
            _hover={{
              opacity: "0.8",
              transition: "all 0.5s ease",
            }}
            bgImage={`url(${ImmigrationImg})`}
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
                  <HiOutlineArrowLongRight color={"#ffffff"} size={"2em"} />
                </VStack>
              </Box>
            </Link>
          </GridItem>

          {/* Residential */}
          <GridItem
            width={"100%"}
            height={{
              xs: "175px",
              sm: "175px",
              md: "175px",
              lg: "200px",
              xl: "225px",
              "2xl": "250px",
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
                  Residential Property
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
                  <HiOutlineArrowLongRight color={"#ffffff"} size={"2em"} />
                </VStack>
              </Box>
            </Link>
          </GridItem>

          {/* Commercial */}
          <GridItem
            width={"100%"}
            height={{
              xs: "175px",
              sm: "175px",
              md: "175px",
              lg: "200px",
              xl: "225px",
              "2xl": "250px",
            }}
            padding={{ xs: "10px 10px", lg: "10px 20px" }}
            border={"1px solid black"}
            borderRadius={"8px"}
            cursor={"pointer"}
            _hover={{
              opacity: "0.8",
              transition: "all 0.5s ease",
            }}
            bgImage={`url(${CommercialImg})`}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
          >
            <Link
              to={"/lumine-law/all-services/commercial"}
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
                  Commercial Property
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
                  <HiOutlineArrowLongRight color={"#ffffff"} size={"2em"} />
                </VStack>
              </Box>
            </Link>
          </GridItem>

          {/* Intellectual Property */}
          <GridItem
            width={"100%"}
            height={{
              xs: "175px",
              sm: "175px",
              md: "175px",
              lg: "200px",
              xl: "225px",
              "2xl": "250px",
            }}
            padding={{ xs: "10px 10px", lg: "10px 20px" }}
            border={"1px solid black"}
            borderRadius={"8px"}
            cursor={"pointer"}
            _hover={{
              opacity: "0.8",
              transition: "all 0.5s ease",
            }}
            bgImage={`url(${IntellectualImg})`}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
          >
            <Link
              to={"/lumine-law/all-services/intellectual-property"}
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
                  Intellectual Property
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
                  <HiOutlineArrowLongRight color={"#ffffff"} size={"2em"} />
                </VStack>
              </Box>
            </Link>
          </GridItem>

          {/* Dispute Resolution */}
          <GridItem
            width={"100%"}
            height={{
              xs: "175px",
              sm: "175px",
              md: "175px",
              lg: "200px",
              xl: "225px",
              "2xl": "250px",
            }}
            padding={{ xs: "10px 10px", lg: "10px 20px" }}
            border={"1px solid black"}
            borderRadius={"8px"}
            cursor={"pointer"}
            _hover={{
              opacity: "0.8",
              transition: "all 0.5s ease",
            }}
            bgImage={`url(${DisputeImg})`}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
          >
            <Link
              to={"/lumine-law/all-services/dispute-resolution"}
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
                  Dispute Resolution and Civil Litigation
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
                  <HiOutlineArrowLongRight color={"#ffffff"} size={"2em"} />
                </VStack>
              </Box>
            </Link>
          </GridItem>

          {/* Landlord & Tenant Disputes */}
          <GridItem
            width={"100%"}
            height={{
              xs: "175px",
              sm: "175px",
              md: "175px",
              lg: "200px",
              xl: "225px",
              "2xl": "250px",
            }}
            padding={{ xs: "10px 10px", lg: "10px 20px" }}
            border={"1px solid black"}
            borderRadius={"8px"}
            cursor={"pointer"}
            _hover={{
              opacity: "0.8",
              transition: "all 0.5s ease",
            }}
            bgImage={`url(${LandlordImg})`}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
          >
            <Link
              to={"/lumine-law/all-services/landlord-tenant"}
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
                  color={"#000000"}
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
                      xs: "12px",
                      sm: "13px",
                      md: "14px",
                      lg: "15px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    color={"#000000"}
                    fontFamily={"CeraRoundPro"}
                    fontWeight={400}
                  >
                    A lil para about what this service is{" "}
                  </Text>
                  <HiOutlineArrowLongRight color={"#000000"} size={"2em"} />
                </VStack>
              </Box>
            </Link>
          </GridItem>

          {/* Family & Children */}
          <GridItem
            width={"100%"}
            height={{
              xs: "175px",
              sm: "175px",
              md: "175px",
              lg: "200px",
              xl: "225px",
              "2xl": "250px",
            }}
            padding={{ xs: "10px 10px", lg: "10px 20px" }}
            border={"1px solid black"}
            borderRadius={"8px"}
            cursor={"pointer"}
            _hover={{
              opacity: "0.8",
              transition: "all 0.5s ease",
            }}
            bgImage={`url(${FamilyImg})`}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
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
                  <HiOutlineArrowLongRight color={"#ffffff"} size={"2em"} />
                </VStack>
              </Box>
            </Link>
          </GridItem>

          {/* Wills & Probate*/}
          <GridItem
            width={"100%"}
            height={{
              xs: "175px",
              sm: "175px",
              md: "175px",
              lg: "200px",
              xl: "225px",
              "2xl": "250px",
            }}
            padding={{ xs: "10px 10px", lg: "10px 20px" }}
            border={"1px solid black"}
            borderRadius={"8px"}
            cursor={"pointer"}
            _hover={{
              opacity: "0.8",
              transition: "all 0.5s ease",
            }}
            bgImage={`url(${WillsProbateImg})`}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
          >
            <Link
              to={"/lumine-law/all-services/wills-probate"}
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
                  Wills and Probate
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
                  <HiOutlineArrowLongRight color={"#ffffff"} size={"2em"} />
                </VStack>
              </Box>
            </Link>
          </GridItem>

          {/* All Services */}
          <GridItem
            width={"100%"}
            height={{
              xs: "175px",
              sm: "175px",
              md: "175px",
              lg: "200px",
              xl: "225px",
              "2xl": "250px",
            }}
            padding={{ xs: "10px 10px", lg: "10px 20px" }}
            border={"1px solid black"}
            borderRadius={"8px"}
            cursor={"pointer"}
            _hover={{
              opacity: "0.8",
              transition: "all 0.5s ease",
            }}
            bgImage={`url(${AllServicesImg})`}
            bgPos={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
          >
            <Link
              to={"/lumine-law/all-services"}
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
                  All Services
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
                  ></Text>
                  <HiOutlineArrowLongRight color={"#ffffff"} size={"2em"} />
                </VStack>
              </Box>
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default AllServiceLinks;
