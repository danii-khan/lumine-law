import { useState } from "react";
import { Text, Container, Box, VStack, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";
import BannerImg from "../../../assets/services/main/dispute/dispute-banner.webp";
import ResidentialImg from "../../../assets/services/main/residential/main-banner.webp";
import CommercialImg from "../../../assets/services/main/commercial/main-banner.webp";
import ImmigrationImg from "../../../assets/services/main/immigration/main-banner.webp";
import IntellectualImg from "../../../assets/services/main/intellectual/main-banner.webp";
import LandlordImg from "../../../assets/services/main/landlord/main-banner.webp";
import FamilyImg from "../../../assets/services/main/family/main-banner.webp";
import WillsProbateImg from "../../../assets/services/main/wills-probate/main-banner.webp";
import AllServicesImg from "../../../assets/services/all/bannertest.webp";
import "../../../styles/fonts.css";

// Dispute services data
const disputeServices = [
  {
    title: "Building Contract Disputes",
    path: "/lumine-law/all-services/dispute-resolution/building-contract-disputes",
  },
  {
    title: "Building Contracts",
    path: "/lumine-law/all-services/dispute-resolution/building-contracts",
  },
  {
    title: "Contract Disputes",
    path: "/lumine-law/all-services/dispute-resolution/contract-disputes",
  },
  {
    title: "Contracts for the Supply of Goods and Services",
    path: "/lumine-law/all-services/dispute-resolution/supply-goods-services",
  },
  {
    title: "Corporate and Personal Bankruptcy Matters",
    path: "/lumine-law/all-services/dispute-resolution/bankruptcy-matters",
  },
  {
    title: "Debt Matters",
    path: "/lumine-law/all-services/dispute-resolution/debt-matters",
  },
  {
    title: "Debt Recovery",
    path: "/lumine-law/all-services/dispute-resolution/debt-recovery",
  },
];

// Other services data
const otherServices = [
  {
    title: "Immigration",
    path: "/lumine-law/all-services/immigration",
    image: ImmigrationImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "Residential Property",
    path: "/lumine-law/all-services/residential",
    image: ResidentialImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "Commercial Property",
    path: "/lumine-law/all-services/commercial",
    image: CommercialImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "Intellectual Property",
    path: "/lumine-law/all-services/intellectual-property",
    image: IntellectualImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "Landlord & Tenant Disputes",
    path: "/lumine-law/all-services/landlord-tenant",
    image: LandlordImg,
    description: "A lil para about what this service is",
    textColor: "#000000",
  },
  {
    title: "Family & Children",
    path: "/lumine-law/all-services/family-and-children",
    image: FamilyImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "Wills and Probate",
    path: "/lumine-law/all-services/wills-probate",
    image: WillsProbateImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "All Services",
    path: "/lumine-law/all-services",
    image: AllServicesImg,
    description: "",
    textColor: "#ffffff",
  },
];

// Reusable Service Button Component
const ServiceButton = ({ service }) => (
  <GridItem
    as={Link}
    to={service.path}
    color="black"
    border="1px solid black"
    borderRadius="8px"
    p="25px 10px"
    width="100%"
    height="100%"
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
  >
    {service.title}
  </GridItem>
);

// Reusable Service Card Component
const ServiceCard = ({ service }) => (
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
    bgImage={`url(${service.image})`}
    bgPos="center"
    bgSize="cover"
    bgRepeat="no-repeat"
    _loading={"lazy"}
  >
    <Link to={service.path} style={{ textDecoration: "none" }}>
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
          color={service.textColor}
        >
          {service.title}
        </Text>
        <VStack
          width="100%"
          height="100%"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {service.description && (
            <Text
              fontSize={{
                xs: "12px",
                sm: "13px",
                md: "14px",
                lg: "15px",
                xl: "16px",
                "2xl": "18px",
              }}
              color={service.textColor}
              fontFamily="CeraRoundPro"
              fontWeight={400}
            >
              {service.description}
            </Text>
          )}
          <HiOutlineArrowLongRight color={service.textColor} size="2em" />
        </VStack>
      </Box>
    </Link>
  </GridItem>
);

// Main Component
const Dispute = () => {
  return (
    <Container
      width="100vw"
      maxWidth="100%"
      minHeight="100vh"
      backgroundColor="#93d4eb"
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
            fontStyle="italic"
            width="90%"
            textAlign="left"
          >
            Dispute Resolution and Civil Litigation Services
          </Text>
        </Box>

        {/* Main Content */}
        <Box width="100%" display="flex" flexFlow="column" color="white">
          <Box
            width="90%"
            alignSelf="center"
            mb="5%"
            my={{ xs: "5%", md: "2.5%" }}
          >
            <Text
              fontFamily="CeraRoundPro"
              fontSize="24px"
              fontWeight={600}
              textAlign="justify"
              mb="2.5%"
              color="black"
            >
              Dispute Resolution and Civil Litigation Services
            </Text>

            <Text
              fontFamily="CeraRoundPro"
              fontWeight={400}
              fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
              textAlign="justify"
              color="black"
            >
              Dispute resolution solicitors in London offer a range of services
              to settle disputes between individuals and also for businesses.
            </Text>
          </Box>
        </Box>

        {/* Dispute Services Grid */}
        <Box
          width="100%"
          display="flex"
          flexFlow="column"
          alignItems="center"
          color="black"
          mb="100px"
        >
          <Grid
            templateColumns="repeat(3, 1fr)"
            width={{ xs: "90%", md: "75%", lg: "70%", xl: "60%" }}
            justifySelf="center"
            justifyItems="center"
            gap={{ xs: "10px", lg: "15px", xl: "30px" }}
            gapY={0}
          >
            {disputeServices.map((service, index) => (
              <ServiceButton key={index} service={service} />
            ))}
          </Grid>
        </Box>

        {/* Other Services */}
        <Box mb="50px">
          <Box width="100%" display="flex" flexFlow="column" color="black">
            <Box width="90%" alignSelf="center">
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
                fontStyle="italic"
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
          </Box>

          <Box
            width="100%"
            display="flex"
            flexFlow="column"
            alignItems="center"
            color="black"
          >
            <Grid
              width="90%"
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
              {otherServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </Grid>
          </Box>
        </Box>

        <AllPrices />
        <AllNewsInsights />
        <Footer />
      </Box>
    </Container>
  );
};

export default Dispute;
