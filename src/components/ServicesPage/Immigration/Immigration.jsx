import {
  Text,
  Container,
  Box,
  HStack,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import AllPrices from "../../NavLinks/AllPrices";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";

// Import all images
import BannerImg from "../../../assets/services/main/immigration/immigration-banner.webp";
import DisputeImg from "../../../assets/services/main/dispute/main-banner.webp";
import LandlordImg from "../../../assets/services/main/landlord/main-banner.webp";
import FamilyImg from "../../../assets/services/main/family/main-banner.webp";
import AllServicesImg from "../../../assets/services/all/bannertest.webp";
import IntellectualImg from "../../../assets/services/main/intellectual/main-banner.webp";
import ResidentialImg from "../../../assets/services/main/residential/main-banner.webp";
import CommercialImg from "../../../assets/services/main/commercial/main-banner.webp";
import WillsProbateImg from "../../../assets/services/main/wills-probate/main-banner.webp";
import "../../../styles/fonts.css";

// Immigration services data
const immigrationServices = [
  {
    title: "Administrative Reviews, Appeals and Judicial Reviews",
    path: "/lumine-law/all-services/immigration/reviews-appeals",
  },
  {
    title: "Asylum",
    path: "/lumine-law/all-services/immigration/asylum",
  },
  {
    title: "British Citizenship Application",
    path: "/lumine-law/all-services/immigration/british-citizenship-application",
  },
  {
    title: "Certificate of Sponsorship",
    path: "/lumine-law/all-services/immigration/certificate-of-sponsorship",
  },
  {
    title: "Creative Worker Visa",
    path: "/lumine-law/all-services/immigration/creative-worker",
  },
  {
    title: "Discretionary Leave",
    path: "/lumine-law/all-services/immigration/discretionary-leave",
  },
  {
    title: "Entry Clearance Applications from Outside of the UK",
    path: "/lumine-law/all-services/immigration/entry-clearance",
  },
  {
    title: "EU Settlement Scheme Applications",
    path: "/lumine-law/all-services/immigration/eu-settlement",
  },
  {
    title: "Immigration Bail and Revocation of a Deportation Order",
    path: "/lumine-law/all-services/immigration/bail-revocation",
  },
  {
    title: "Indefinite Leave to Remain",
    path: "/lumine-law/all-services/immigration/indefinite-leave",
  },
  {
    title: "Innovator Founder Visa",
    path: "/lumine-law/all-services/immigration/innovator-founder",
  },
  {
    title: "Private Life/Humans Right-Based Applications",
    path: "/lumine-law/all-services/immigration/human-rights-app",
  },
  {
    title:
      "Skilled Migrant Sponsorship License Applications (In All Categories)",
    path: "/lumine-law/all-services/immigration/skilled-migrant",
  },
  {
    title: "Skilled Worker Visa",
    path: "/lumine-law/all-services/immigration/skilled-worker-visa",
  },
  {
    title: "Spouse Visa",
    path: "/lumine-law/all-services/immigration/spouse-visa",
  },
  {
    title: "Student Visa",
    path: "/lumine-law/all-services/immigration/student-visa",
  },
  {
    title: "Switching Visa Categories from within the UK",
    path: "/lumine-law/all-services/immigration/visa-categories",
  },
  {
    title: "UK Visitor Visa",
    path: "/lumine-law/all-services/immigration/uk-visitor-visa",
  },
  {
    title: "Visa Extensions",
    path: "/lumine-law/all-services/immigration/visa-extensions",
  },
];

// Other services data
const otherServices = [
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

// Immigration Service Button Component
const ImmigrationServiceButton = ({ service }) => (
  <GridItem
    as={Link}
    to={service.path}
    color="black"
    border="1px solid black"
    borderRadius="8px"
    p="2.5px 10px"
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

// Other Service Card Component
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
          <HiOutlineArrowLongRight color={service.textColor} size="2em" />
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
    justifyContent="flex-start"
    alignItems="center"
    _loading={"eager"}
  >
    <Text fontSize="40px" fontWeight={600} fontFamily="CeraRoundPro" ml="2.5%">
      Immigration
    </Text>
  </Box>
);

// Main Content Section
const MainContent = () => (
  <Box width="100%" display="flex" flexFlow="column" color="black">
    <HStack
      justifyContent="flex-start"
      alignItems="center"
      mt="2%"
      mb="1%"
      ml="2.5%"
    >
      <Text fontFamily="CeraRoundPro" fontSize="24px" fontWeight={600}>
        What is Immigration?
      </Text>
    </HStack>

    <Box
      width="95%"
      alignSelf="center"
      mb={{ xs: "15%", sm: "10%", md: "7.5%", xl: "5%" }}
    >
      <Text
        fontFamily="CeraRoundPro"
        fontWeight={400}
        fontSize="18px"
        textAlign="justify"
      >
        Our legal services are highly recommended by our clients and other
        professionals such as barristers and other solicitors. Our immigration
        and litigation departments fight to win.
      </Text>
    </Box>
  </Box>
);

// Immigration Services Grid
const ImmigrationServicesGrid = () => (
  <Box
    width="100%"
    display="flex"
    flexFlow="column"
    alignItems="center"
    color="black"
    mb={{ xs: "25px", lg: "50px" }}
  >
    <Grid
      templateRows="repeat(7,1fr)"
      templateColumns="repeat(3, 1fr)"
      width={{ xs: "90%", md: "75%", lg: "70%", xl: "60%" }}
      justifySelf="center"
      justifyItems="center"
      gap={{ xs: "10px", lg: "15px", xl: "30px" }}
      gapY={0}
    >
      {immigrationServices.map((service, index) => (
        <ImmigrationServiceButton key={index} service={service} />
      ))}
      <GridItem /> {/* Empty grid item */}
    </Grid>
  </Box>
);

// Other Services Section
const OtherServices = () => (
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
);

const Immigration = () => {
  return (
    <Container
      width="100vw"
      maxWidth="100%"
      minHeight="100vh"
      backgroundColor="#a2cce0"
      overflow="auto"
      m={0}
      p={0}
      display="flex"
      flexDirection="column"
    >
      <Helmet>
        <title>Lumine Law Immigration Services</title>
      </Helmet>

      <Box width="100%" flex="1" p={0} m={0} pt="50px">
        <Banner />
        <MainContent />
        <ImmigrationServicesGrid />
        <OtherServices />
        <AllPrices />
        <AllNewsInsights />
        <Footer />
      </Box>
    </Container>
  );
};

export default Immigration;
