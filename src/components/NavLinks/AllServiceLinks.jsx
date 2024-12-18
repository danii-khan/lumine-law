import { Text, Box, VStack, Grid, GridItem } from "@chakra-ui/react";
import "../../styles/fonts.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

// Import all images
import ImmigrationImg from "../../assets/services/main/immigration/main-banner.png";
import ResidentialImg from "../../assets/services/main/residential/main-banner.png";
import DisputeImg from "../../assets/services/main/dispute/main-banner.png";
import LandlordImg from "../../assets/services/main/landlord/main-banner.png";
import FamilyImg from "../../assets/services/main/family/main-banner.png";
import IntellectualImg from "../../assets/services/main/intellectual/main-banner.png";
import CommercialImg from "../../assets/services/main/commercial/main-banner.png";
import WillsProbateImg from "../../assets/services/main/wills-probate/main-banner.png";
import AllServicesImg from "../../assets/services/all/bannertest.png";

// Service card data
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

// Reusable service card component
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

const AllServiceLinks = () => {
  return (
    <Box mb="50px" _loading="lazy">
      {/* Header */}
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

      {/* List */}
      <Box
        width="100%"
        display="flex"
        flexFlow="column"
        alignItems="center"
        color="black"
      >
        <Grid
          width="90%"
          templateColumns={{ xs: "repeat(2, 2fr)", lg: "repeat(3, 1fr)" }}
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
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AllServiceLinks;
