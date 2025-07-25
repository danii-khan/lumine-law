import React from "react";
import {
  Text,
  Container,
  Box,
  HStack,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";

// Import all images
import BannerImg from "../../../assets/services/main/family/family-banner.webp";
import ImmigrationImg from "../../../assets/services/main/immigration/main-banner.webp";
import ResidentialImg from "../../../assets/services/main/residential/main-banner.webp";
import CommercialImg from "../../../assets/services/main/commercial/main-banner.webp";
import IntellectualImg from "../../../assets/services/main/intellectual/main-banner.webp";
import DisputeImg from "../../../assets/services/main/dispute/main-banner.webp";
import LandlordImg from "../../../assets/services/main/landlord/main-banner.webp";
import WillsProbateImg from "../../../assets/services/main/wills-probate/main-banner.webp";
import AllServicesImg from "../../../assets/services/all/bannertest.webp";

// Family services data
const familyServices = [
  {
    title: "Adoption and Surrogacy",
    path: "/lumine-law/all-services/family/adoption-surrogacy",
  },
  {
    title: "Child Arrangements",
    path: "/lumine-law/all-services/family/child-arrangements",
  },
  {
    title: "Consent Orders",
    path: "/lumine-law/all-services/family/consent-orders",
  },
  {
    title: "Divorce",
    path: "/lumine-law/all-services/family/divorce",
  },
  {
    title: "Domestic Violence",
    path: "/lumine-law/all-services/family/domestic-violence",
  },
  {
    title: "Financial Settlements",
    path: "/lumine-law/all-services/family/financial-settlements",
  },
  {
    title: "Parental Responsibility",
    path: "/lumine-law/all-services/family/parental-responsbility",
  },
  {
    title: "Pre Nuptial Agreements",
    path: "/lumine-law/all-services/family/nuptial-agreement",
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
    title: "Wills and Probate",
    path: "/lumine-law/all-services/wills-probate",
    image: WillsProbateImg,
  },
  {
    title: "All Services",
    path: "/lumine-law/all-services",
    image: AllServicesImg,
  },
];

// Reusable Family Service Button Component
const FamilyServiceButton = ({ title, path }) => (
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

const Family = () => {
  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor="#fccab3"
        overflow="auto"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law Family and Children Services</title>
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
            justifyContent="flex-start"
            alignItems="center"
            _loading={"eager"}
          >
            <Text
              fontSize={{ xs: "20px", lg: "30px", xl: "36px", "2xl": "45px" }}
              fontWeight={600}
              fontFamily="CeraRoundPro"
              ml="2.5%"
            >
              Family and Children
            </Text>
          </Box>

          {/* Main Content */}
          <Box width="100%" display="flex" flexFlow="column" color="black">
            <Box
              width="95%"
              alignSelf="center"
              mt={{ xs: "10%", sm: "10%", md: "7.5%", xl: "5%" }}
              mb={{ xs: "10%", sm: "10%", md: "7.5%", xl: "5%" }}
            >
              <Text
                fontFamily="CeraRoundPro"
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign="justify"
              >
                Our legal services are highly recommended by our clients and
                other professionals such as barristers and other solicitors. Our
                immigration and litigation departments fight to win.
              </Text>
            </Box>
          </Box>

          {/* Family Services Grid */}
          <Box
            width="100%"
            display="flex"
            flexFlow="column"
            alignItems="center"
            color="black"
          >
            <Grid
              templateColumns={{ xs: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
              width={{ xs: "90%", md: "80%", lg: "75%", xl: "70%" }}
              justifySelf="center"
              justifyItems="center"
              gap={{ xs: "10px", lg: "15px", xl: "30px" }}
              gapY={0}
              mb="100px"
            >
              {familyServices.map((service) => (
                <FamilyServiceButton
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

export default Family;
