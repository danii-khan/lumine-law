import React, { Suspense } from "react";
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
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));

// Import all images
import BannerImg from "../../assets/services/all/bannertest.webp";
import ImmigrationImg from "../../assets/services/main/immigration/main-banner.webp";
import DisputeImg from "../../assets/services/main/dispute/main-banner.webp";
import LandlordImg from "../../assets/services/main/landlord/main-banner.webp";
import FamilyImg from "../../assets/services/main/family/main-banner.webp";
import IntellectualImg from "../../assets/services/main/intellectual/main-banner.webp";
import ResidentialImg from "../../assets/services/main/residential/main-banner.webp";
import CommercialImg from "../../assets/services/main/commercial/main-banner.webp";
import WillsProbateImg from "../../assets/services/main/wills-probate/main-banner.webp";
import "../../styles/fonts.css";

// Services data
const services = [
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
    title: "Dispute & Resolution Civil Litigation",
    path: "/lumine-law/all-services/dispute-resolution",
    image: DisputeImg,
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
];

// Service Card Component
const ServiceCard = ({ service }) => (
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
    bgImage={`url(${service.image})`}
    bgSize="cover"
    bgPos="center"
    bgRepeat="no-repeat"
    border="1px solid black"
    borderRadius="8px"
    cursor="pointer"
    _hover={{
      opacity: "0.8",
      transition: "all 0.5s ease",
    }}
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
            xs: "11px",
            lg: "14px",
            xl: "16px",
            "2xl": "20px",
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
          <Text
            fontSize={{
              xs: "10px",
              lg: "12px",
              xl: "13px",
              "2xl": "16px",
            }}
            fontFamily="CeraRoundPro"
            fontWeight={400}
            color={service.textColor}
          >
            {service.description}
          </Text>
          <HiOutlineArrowLongRight size="3em" color={service.textColor} />
        </VStack>
      </Box>
    </Link>
  </GridItem>
);

// Banner Component
const Banner = () => (
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
    justifyContent="space-around"
    alignItems="center"
    _loading={"eager"}
  >
    <Text
      fontSize={{ xs: "20px", lg: "30px", xl: "36px", "2xl": "45px" }}
      fontWeight={600}
      fontFamily="CeraRoundPro"
    >
      Services
    </Text>
    <Box width={{ xs: "60%", md: "65%", lg: "75%" }} />
  </Box>
);

// Main Content Section
const MainContent = () => (
  <Box width="100%" display="flex" flexFlow="column" color="black">
    <HStack
      justifyContent="space-around"
      alignItems="center"
      my={{ xs: "5%", lg: "2%", xl: "2.5%", "2xl": "1%" }}
    >
      <Text
        fontFamily="CeraRoundPro"
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
      />
    </HStack>

    <Box
      width={{ xs: "95%", lg: "92.5%", xl: "95%" }}
      alignSelf="center"
      mb={{ xs: "5%", lg: "2.5%", xl: "5%", "2xl": "2.5%" }}
    >
      <Text
        fontFamily="CeraRoundPro"
        fontWeight={400}
        fontSize={{ xs: "10px", lg: "12px", xl: "14px", "2xl": "16px" }}
        textAlign="justify"
      >
        Our legal services are highly recommended by our clients and other
        professionals such as barristers and other solicitors. Our immigration
        and litigation departments fight to win. Our property department is
        focused on achieving the best and fastest outcome for our clients. We
        explain complicated legal issues clearly and offer optimum solutions for
        each client by providing advice which is versatile and effective. Known
        for our integrity and commitment to our clients, we are pleased to say
        that 90% of our clients come to us through recommendations.
      </Text>
    </Box>
  </Box>
);

// Services Grid Section
const ServicesGrid = () => (
  <Box
    width="100%"
    display="flex"
    flexFlow="column"
    alignItems="center"
    color="black"
    mb={{ xs: "25px", lg: "50px" }}
  >
    <Grid
      width={{ xs: "95%", lg: "95%", xl: "95%", "2xl": "80%" }}
      templateColumns={{ xs: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      templateRows={{ xs: "repeat(3, 1fr)", lg: "repeat(2, 1fr)" }}
      gap={{ xs: "10px", lg: "20px", xl: "25px", "2xl": "30px" }}
      justifyItems="center"
      alignItems="center"
    >
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
      <GridItem display={{ xs: "none", lg: "grid" }} />
    </Grid>
  </Box>
);

const AllServices = () => {
  return (
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
        <title>Lumine Law Services</title>
      </Helmet>

      <Box width="100%" flex="1" p={0} m={0} pt="50px">
        <Banner />
        <MainContent />
        <ServicesGrid />
        <Suspense fallback={<div>Loading All Prices ...</div>}>
          <AllPrices />
        </Suspense>
        <Suspense fallback={<div>Loading All News and Insights ...</div>}>
          <AllNewsInsights />
        </Suspense>
        <Footer />
      </Box>
    </Container>
  );
};

export default AllServices;
