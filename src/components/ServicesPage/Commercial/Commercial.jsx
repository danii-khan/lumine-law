import { Text, Container, Box, VStack, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Helmet } from "react-helmet";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";

// Import all images
import BannerImg from "../../../assets/services/main/commercial/commercial-banner.webp";
import ImmigrationImg from "../../../assets/services/main/immigration/main-banner.webp";
import DisputeImg from "../../../assets/services/main/dispute/main-banner.webp";
import LandlordImg from "../../../assets/services/main/landlord/main-banner.webp";
import FamilyImg from "../../../assets/services/main/family/main-banner.webp";
import ResidentialImg from "../../../assets/services/main/residential/main-banner.webp";
import IntellectualImg from "../../../assets/services/main/intellectual/main-banner.webp";
import WillsProbateImg from "../../../assets/services/main/wills-probate/main-banner.webp";
import AllServicesImg from "../../../assets/services/all/bannertest.webp";
import "../../../styles/fonts.css";

// Commercial services data
const commercialServices = [
  {
    title:
      "Advice on Commercial Lease Terms, Survey Reports, and Repairing Obligations",
    path: "/lumine-law/all-services/commercial/advice-multiple",
  },
  {
    title: "Break Clauses and Rent Reviews",
    path: "/lumine-law/all-services/commercial/break-rent",
  },
  {
    title: "Commercial Property Dilapidations",
    path: "/lumine-law/all-services/commercial/property-dilapidations",
  },
  {
    title: "Consents for Alterations",
    path: "/lumine-law/all-services/commercial/consent-alterations",
  },
  {
    title: "Forfeiture and Notices",
    path: "/lumine-law/all-services/commercial/forfeiture-notices",
  },
  {
    title: "Lease Renewals",
    path: "/lumine-law/all-services/commercial/lease-renewals",
  },
  {
    title: "Purchase of Business and Licenses to Assign",
    path: "/lumine-law/all-services/commercial/business-licenses",
  },
  {
    title: "Purchase of Commercial Property",
    path: "/lumine-law/all-services/commercial/purchase-commercial",
  },
  {
    title: "Rent Recovery",
    path: "/lumine-law/all-services/commercial/rent-recovery",
  },
  {
    title: "Sales of Commercial Property",
    path: "/lumine-law/all-services/commercial/sales-commercial",
  },
  {
    title: "Schedules of Conditions",
    path: "/lumine-law/all-services/commercial/schedules-conditions",
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
    title: "Intellectual Property",
    path: "/lumine-law/all-services/intellectual-property",
    image: IntellectualImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "Dispute Resolution and Civil Litigation",
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
const Commercial = () => {
  return (
    <Container
      width="100vw"
      maxWidth="100%"
      minHeight="100vh"
      backgroundColor="#cecece"
      overflow="auto"
      m={0}
      p={0}
      display="flex"
      flexDirection="column"
    >
      <Helmet>
        <title>Lumine Law Commercial Property Services</title>
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
            Commercial Property
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
              Commercial Property
            </Text>

            <Text
              fontFamily="CeraRoundPro"
              fontWeight={400}
              fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
              textAlign="justify"
            >
              When it comes to legal matters concerning property we provide
              expertise that you can rely on and trust. Whether it's for
              residential property dealings or commercial property transactions.
            </Text>
          </Box>
        </Box>

        {/* Commercial Services Grid */}
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
            {commercialServices.map((service, index) => (
              <ServiceButton key={index} service={service} />
            ))}
          </Grid>
        </Box>

        {/* Other Services Section */}
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

export default Commercial;
