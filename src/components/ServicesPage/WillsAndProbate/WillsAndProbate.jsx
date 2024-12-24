import React from "react";
import { Text, Container, Box, VStack, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";
import BannerImg from "../../../assets/services/main/wills-probate/wills-probate-banner.webp";
import ImmigrationImg from "../../../assets/services/main/immigration/main-banner.webp";
import ResidentialImg from "../../../assets/services/main/residential/main-banner.webp";
import CommercialImg from "../../../assets/services/main/commercial/main-banner.webp";
import IntellectualImg from "../../../assets/services/main/intellectual/main-banner.webp";
import DisputeImg from "../../../assets/services/main/dispute/main-banner.webp";
import LandlordImg from "../../../assets/services/main/landlord/main-banner.webp";
import FamilyImg from "../../../assets/services/main/family/main-banner.webp";
import AllServicesImg from "../../../assets/services/all/bannertest.webp";

// Wills and Probate services data
const willsServices = [
  {
    title: "Estate Planning",
    path: "/lumine-law/all-services/wills-probate/estate-planning",
  },
  {
    title: "Inheritance Tax Planning",
    path: "/lumine-law/all-services/wills-probate/inheritance-tax-planning",
  },
  {
    title: "Power of Attorney",
    path: "/lumine-law/all-services/wills-probate/power-attorney",
  },
  {
    title: "Private Wealth Management",
    path: "/lumine-law/all-services/wills-probate/private-wealth-management",
  },
  {
    title: "Probate",
    path: "/lumine-law/all-services/wills-probate/probate",
  },
  {
    title: "Succession Planning",
    path: "/lumine-law/all-services/wills-probate/succession-planning",
  },
  {
    title: "Trusts",
    path: "/lumine-law/all-services/wills-probate/trusts",
  },
  {
    title: "Wills",
    path: "/lumine-law/all-services/wills-probate/wills",
  },
];

// Other services data
const otherServices = [
  {
    title: "Immigration",
    path: "/lumine-law/all-services/immigration",
    image: ImmigrationImg,
  },
  {
    title: "Residential Property",
    path: "/lumine-law/all-services/residential",
    image: ResidentialImg,
  },
  {
    title: "Commercial Property",
    path: "/lumine-law/all-services/commercial",
    image: CommercialImg,
  },
  {
    title: "Intellectual Property",
    path: "/lumine-law/all-services/intellectual-property",
    image: IntellectualImg,
  },
  {
    title: "Dispute Resolution and Civil Litigation",
    path: "/lumine-law/all-services/dispute-resolution",
    image: DisputeImg,
  },
  {
    title: "Landlord & Tenant Disputes",
    path: "/lumine-law/all-services/landlord-tenant",
    image: LandlordImg,
  },
  {
    title: "Family & Children",
    path: "/lumine-law/all-services/family-and-children",
    image: FamilyImg,
  },
  {
    title: "All Services",
    path: "/lumine-law/all-services",
    image: AllServicesImg,
  },
];

// Reusable Wills Service Button Component
const WillsServiceButton = ({ title, path }) => (
  <GridItem
    as={Link}
    to={path}
    color="black"
    border="1px solid black"
    borderRadius="8px"
    width="100%"
    height={{ xs: "100px", sm: "125px", md: "150px", lg: "175px" }}
    display="flex"
    justifyContent="center"
    alignItems="center"
    backgroundColor="white"
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
      "2xl": "16px",
    }}
    fontWeight={500}
    fontFamily="CeraRoundPro"
    cursor="pointer"
    p="10px 5px"
  >
    {title}
  </GridItem>
);

// Reusable Service Card Component
const ServiceCard = ({ title, path, image }) => (
  <GridItem
    width="100%"
    height={{
      xs: "175px",
      sm: "175px",
      md: "175px",
      lg: "200px",
      xl: "225px",
      "2xl": "250px",
    }}
    padding={{ xs: "10px 10px", lg: "10px 20px" }}
    border="1px solid black"
    borderRadius="8px"
    cursor="pointer"
    _hover={{
      opacity: "0.8",
      transition: "all 0.5s ease",
    }}
    bgImage={`url(${image})`}
    bgPos="center"
    bgSize="cover"
    bgRepeat="no-repeat"
    _loading={"lazy"}
  >
    <Link to={path} style={{ textDecoration: "none" }}>
      <Box
        height="100%"
        display="flex"
        flexFlow="column"
        justifyContent="center"
        alignItems="flex-start"
        gap="10px"
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
          fontFamily="CeraRoundPro"
          fontWeight={500}
          textAlign="left"
          color="white"
        >
          {title}
        </Text>
        <VStack
          width="100%"
          height="100%"
          justifyContent="space-between"
          alignItems="flex-start"
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
            color="white"
            fontFamily="CeraRoundPro"
            fontWeight={400}
          >
            {title !== "All Services" &&
              "A lil para about what this service is"}
          </Text>
          <HiOutlineArrowLongRight color="white" size="2em" />
        </VStack>
      </Box>
    </Link>
  </GridItem>
);

const WillsAndProbate = () => {
  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor="white"
        overflow="auto"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law Wills and Probate Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt="50px">
          {/* Banner */}
          <Box
            width="100%"
            height={{
              xs: "200px",
              lg: "250px",
              xl: "300px",
              "2xl": "350px",
            }}
            bgImage={`url(${BannerImg})`}
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _loading={"eager"}
          >
            <Text
              fontSize={{ xs: "20px", lg: "30px", xl: "36px", "2xl": "45px" }}
              fontWeight={600}
              fontFamily="CeraRoundPro"
              width="90%"
              textAlign="left"
            >
              Wills and Probate
            </Text>
          </Box>

          {/* Main Content */}
          <Box width="100%" display="flex" flexFlow="column" color="black">
            <Box width="90%" alignSelf="center" mt={{ xs: "5%", md: "2.5%" }}>
              <Text
                fontFamily="CeraRoundPro"
                fontSize="24px"
                fontWeight={600}
                textAlign="justify"
                mb="2.5%"
              >
                Wills and Probate
              </Text>

              <Text
                fontFamily="CeraRoundPro"
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign="justify"
                mb="20px"
              >
                Intro content about Wills and Probate
              </Text>
            </Box>

            <Box width="90%" alignSelf="center" my={{ xs: "5%", md: "0%" }}>
              <Text
                fontFamily="CeraRoundPro"
                fontSize="24px"
                fontWeight={600}
                textAlign="justify"
                mb="2.5%"
              >
                Services
              </Text>
            </Box>
          </Box>

          {/* Services Grid */}
          <Box
            width="100%"
            display="flex"
            flexFlow="column"
            alignItems="center"
            color="black"
            mb={{ xs: "25px", lg: "50px" }}
          >
            <Grid
              templateColumns={{ xs: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
              width={{ xs: "90%", md: "80%", lg: "75%", xl: "70%" }}
              justifySelf="center"
              justifyItems="center"
              gap={{ xs: "10px", lg: "15px", xl: "30px" }}
              gapY={0}
            >
              {willsServices.map((service) => (
                <WillsServiceButton
                  key={service.title}
                  title={service.title}
                  path={service.path}
                />
              ))}
            </Grid>
          </Box>

          {/* Other Services */}
          <Box mb="50px">
            <Box width="90%" justifySelf={"center"} alignSelf="center">
              <Text
                color="black"
                fontSize={{
                  xs: "20px",
                  sm: "20px",
                  md: "24px",
                  lg: "26px",
                  xl: "28px",
                  "2xl": "30px",
                }}
                fontWeight={500}
                mb={{
                  xs: "25px",
                  sm: "30px",
                  md: "35px",
                  lg: "40px",
                  xl: "45px",
                  "2xl": "50px",
                }}
                textAlign="left"
              >
                Other Services
              </Text>
            </Box>

            <Box width="90%" mx="auto">
              <Grid
                templateColumns={{ xs: "repeat(2, 2fr)", lg: "repeat(4, 1fr)" }}
                gap={{
                  xs: "25px",
                  sm: "30px",
                  md: "35px",
                  lg: "40px",
                  xl: "45px",
                  "2xl": "50px",
                }}
                justifyItems="center"
                alignItems="center"
              >
                {otherServices.map((service) => (
                  <ServiceCard
                    key={service.title}
                    title={service.title}
                    path={service.path}
                    image={service.image}
                  />
                ))}
              </Grid>
            </Box>
          </Box>

          <AllPrices />
          <AllNewsInsights />
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default WillsAndProbate;
