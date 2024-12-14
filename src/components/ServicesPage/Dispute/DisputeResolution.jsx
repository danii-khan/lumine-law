import { useState } from "react";
import {
  Text,
  Container,
  Box,
  VStack,
  HStack,
  List,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import BannerImg from "../../../assets/services/main/dispute/dispute-banner.png";
import "../../../styles/fonts.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { GoPlus } from "react-icons/go";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ResidentialImg from "../../../assets/services/main/residential/main-banner.png";
import ImmigrationImg from "../../../assets/services/main/immigration/main-banner.png";
import LandlordImg from "../../../assets/services/main/landlord/main-banner.png";
import FamilyImg from "../../../assets/services/main/family/main-banner.png";
import { AiOutlineMinus } from "react-icons/ai";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";
import AllServicesImg from "../../../assets/services/all/bannertest.png";

const Dispute = () => {
  const [eligibilityState, setEligibilityState] = useState(false);
  const [applicationState, setApplicationState] = useState(false);
  const [helpState, setHelpState] = useState(false);

  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor={"#011a29"}
        // backgroundColor={"white"}
        overflow="auto"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>
            Lumine Law Dispute Resolution and Civil Litigation Services
          </title>
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
              Dispute Resolution and Civil Litigation Services
            </Text>
          </Box>

          {/* Main */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"white"}
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
                Dispute Resolution and Civil Litigation Services
              </Text>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
              >
                Dispute resolution solicitors in London offer a range of
                services to settle disputes between individuals and also for
                businesses.
              </Text>
            </Box>
          </Box>

          {/* Grid */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            alignItems={"center"}
            color={"black"}
            // mb={{ xs: "25px", lg: "50px" }}
          >
            <Grid
              // templateRows={"repeat(7,1fr)"}
              templateColumns={"repeat(3, 1fr)"}
              width={{ xs: "90%", md: "75%", lg: "70%", xl: "60%" }}
              justifySelf={"center"}
              justifyItems={"center"}
              gap={{ xs: "10px", lg: "15px", xl: "30px" }}
              gapY={0}
              mb={"100px"}
            >
              {/* Debt Matters */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/divorce"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
                _hover={{
                  backgroundColor: "#000000",
                  color: "#beab7c",
                  transition: "0.3s ease all",
                  fontWeight: "600",
                  textDecor: "underline",
                }}
                fontSize={{
                  xs: "12px",
                  sm: "14px",
                  md: "15px",
                  lg: "16px",
                  xl: "16px",
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Debt Matters
              </GridItem>

              {/* Contract Disputes */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/nuptial-agreement"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
                _hover={{
                  backgroundColor: "#000000",
                  color: "#beab7c",
                  transition: "0.3s ease all",
                  fontWeight: "600",
                  textDecor: "underline",
                }}
                fontSize={{
                  xs: "12px",
                  sm: "14px",
                  md: "15px",
                  lg: "16px",
                  xl: "16px",
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Contract Disputes
              </GridItem>

              {/* Corporate and Personal Bankruptcy Matters  */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/child-arrangements"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
                _hover={{
                  backgroundColor: "#000000",
                  color: "#beab7c",
                  transition: "0.3s ease all",
                  fontWeight: "600",
                  textDecor: "underline",
                }}
                fontSize={{
                  xs: "12px",
                  sm: "14px",
                  md: "15px",
                  lg: "16px",
                  xl: "16px",
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Corporate and Personal Bankruptcy Matters
              </GridItem>

              {/* Building Contract Disputes */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/parental-responsbility"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
                _hover={{
                  backgroundColor: "#000000",
                  color: "#beab7c",
                  transition: "0.3s ease all",
                  fontWeight: "600",
                  textDecor: "underline",
                }}
                fontSize={{
                  xs: "12px",
                  sm: "14px",
                  md: "15px",
                  lg: "16px",
                  xl: "16px",
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Building Contract Disputes
              </GridItem>

              {/* Contracts for the Supply of Goods and Services  */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/consent-orders"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
                _hover={{
                  backgroundColor: "#000000",
                  color: "#beab7c",
                  transition: "0.3s ease all",
                  fontWeight: "600",
                  textDecor: "underline",
                }}
                fontSize={{
                  xs: "12px",
                  sm: "14px",
                  md: "15px",
                  lg: "16px",
                  xl: "16px",
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Contracts for the Supply of Goods and Services
              </GridItem>

              {/* Building Contracts */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/financial-settlements"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
                _hover={{
                  backgroundColor: "#000000",
                  color: "#beab7c",
                  transition: "0.3s ease all",
                  fontWeight: "600",
                  textDecor: "underline",
                }}
                fontSize={{
                  xs: "12px",
                  sm: "14px",
                  md: "15px",
                  lg: "16px",
                  xl: "16px",
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Building Contracts
              </GridItem>

              {/* Debt Recovery */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/domestic-violence"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
                _hover={{
                  backgroundColor: "#000000",
                  color: "#beab7c",
                  transition: "0.3s ease all",
                  fontWeight: "600",
                  textDecor: "underline",
                }}
                fontSize={{
                  xs: "12px",
                  sm: "14px",
                  md: "15px",
                  lg: "16px",
                  xl: "16px",
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Debt Recovery
              </GridItem>
            </Grid>
          </Box>

          {/* Other Services */}
          <Box mb="50px">
            {/* Header */}
            <Box
              width={"100%"}
              display={"flex"}
              flexFlow={"column"}
              color={"black"}
            >
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
                {/* Col 1 */}
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
                        <HiOutlineArrowLongRight
                          color={"#ffffff"}
                          size={"2em"}
                        />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>

                {/* Col 2 */}
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
                    to={"/lumine-law/all-services/residential-commercial"}
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
                        <HiOutlineArrowLongRight
                          color={"#ffffff"}
                          size={"2em"}
                        />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>

                {/* Col 4 */}
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
                        color={"#ffffff"}
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
                          color={"#ffffff"}
                          fontFamily={"CeraRoundPro"}
                          fontWeight={400}
                        >
                          A lil para about what this service is{" "}
                        </Text>
                        <HiOutlineArrowLongRight
                          color={"#ffffff"}
                          size={"2em"}
                        />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>

                {/* Col 5 */}
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
                        <HiOutlineArrowLongRight
                          color={"#ffffff"}
                          size={"2em"}
                        />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>

                {/* Col 6 */}
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
                        <HiOutlineArrowLongRight
                          color={"#ffffff"}
                          size={"2em"}
                        />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>
              </Grid>
            </Box>
          </Box>

          <AllPrices />

          {/* News and Insights */}
          <AllNewsInsights />

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Dispute;
