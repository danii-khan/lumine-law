import React from "react";
import {
  Text,
  Container,
  Box,
  VStack,
  List,
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
import BannerImg from "../../../assets/services/main/landlord/landlord-banner.png";
import ImmigrationImg from "../../../assets/services/main/immigration/main-banner.png";
import ResidentialImg from "../../../assets/services/main/residential/main-banner.png";
import CommercialImg from "../../../assets/services/main/commercial/main-banner.png";
import IntellectualImg from "../../../assets/services/main/intellectual/main-banner.png";
import DisputeImg from "../../../assets/services/main/dispute/main-banner.png";
import FamilyImg from "../../../assets/services/main/family/main-banner.png";
import WillsProbateImg from "../../../assets/services/main/wills-probate/main-banner.png";
import AllServicesImg from "../../../assets/services/all/bannertest.png";

// Service card data
const serviceCards = [
  {
    title: "Immigration",
    path: "/lumine-law/all-services/immigration",
    image: ImmigrationImg,
    description: "A lil para about what this service is",
  },
  {
    title: "Residential Property",
    path: "/lumine-law/all-services/residential",
    image: ResidentialImg,
    description: "A lil para about what this service is",
  },
  {
    title: "Commercial Property",
    path: "/lumine-law/all-services/commercial",
    image: CommercialImg,
    description: "A lil para about what this service is",
  },
  {
    title: "Intellectual Property",
    path: "/lumine-law/all-services/intellectual-property",
    image: IntellectualImg,
    description: "A lil para about what this service is",
  },
  {
    title: "Dispute Resolution and Civil Litigation",
    path: "/lumine-law/all-services/dispute-resolution",
    image: DisputeImg,
    description: "A lil para about what this service is",
  },
  {
    title: "Family & Children",
    path: "/lumine-law/all-services/family-and-children",
    image: FamilyImg,
    description: "A lil para about what this service is",
  },
  {
    title: "Wills and Probate",
    path: "/lumine-law/all-services/wills-probate",
    image: WillsProbateImg,
    description: "A lil para about what this service is",
  },
  {
    title: "All Services",
    path: "/lumine-law/all-services",
    image: AllServicesImg,
    description: "",
  },
];

// Reusable Service Card Component
const ServiceCard = ({ title, path, image, description }) => (
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
          {description && (
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
              {description}
            </Text>
          )}
          <HiOutlineArrowLongRight color="white" size="2em" />
        </VStack>
      </Box>
    </Link>
  </GridItem>
);

const Landlord = () => {
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
          <title>Lumine Law Landlord and Tenant Disputes Services</title>
        </Helmet>
        <Navbar />

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
          >
            <Text
              fontSize={{ xs: "20px", lg: "30px", xl: "36px", "2xl": "45px" }}
              fontWeight={600}
              fontFamily="CeraRoundPro"
              fontStyle="italic"
              width="90%"
              textAlign="left"
              color="black"
            >
              Landlord and Tenant Disputes
            </Text>
          </Box>

          {/* Main Content */}
          <Box width="100%" display="flex" flexFlow="column" color="black">
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
                textAlign="left"
                mb="2.5%"
              >
                Landlord and Tenant Disputes Services
              </Text>

              <Text
                fontFamily="CeraRoundPro"
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign="left"
              >
                We can assist you in the following areas:
              </Text>

              <List.Root
                textAlign="left"
                fontSize={{
                  xs: "12px",
                  sm: "12px",
                  md: "14px",
                  lg: "14px",
                  xl: "16px",
                  "2xl": "18px",
                }}
                fontWeight={400}
                fontFamily="CeraRoundPro"
              >
                <List.Item>
                  Possession claims including the preparation, service and
                  defence of section 8 and section 21 notices
                </List.Item>
                <List.Item>Recovery of rent arrears</List.Item>
                <List.Item>Claims for disrepair</List.Item>
              </List.Root>

              <Text
                textAlign="left"
                fontSize={{
                  xs: "12px",
                  sm: "12px",
                  md: "14px",
                  lg: "14px",
                  xl: "16px",
                  "2xl": "18px",
                }}
                fontWeight={400}
                fontFamily="CeraRoundPro"
              >
                For all civil litigation and dispute issues, Please do not
                hesitate to get in touch with Lumine solicitors{" "}
                <strong>020 3950 2246</strong> or{" "}
                <strong>
                  <Link to="/lumine-law/contact">Contact Us HERE</Link>
                </strong>
              </Text>
            </Box>
          </Box>

          {/* Other Services */}
          <Box mb="50px">
            <Box
              width="90%"
              justifySelf={"center"}
              alignSelf="center"
              mb="40px"
            >
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
                {serviceCards.map((service) => (
                  <ServiceCard
                    key={service.title}
                    title={service.title}
                    path={service.path}
                    image={service.image}
                    description={service.description}
                  />
                ))}
              </Grid>
            </Box>
          </Box>

          {/* Additional Sections */}
          <AllPrices />
          <AllNewsInsights />
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Landlord;
