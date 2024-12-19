import {
  Box,
  Text,
  VStack,
  Button,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import ServicesBg from "../../assets/landing/services.png";
import ImmigrationIcon from "../../assets/landing/landing-icons/immigration-icon.png";
import ResidentialIcon from "../../assets/landing/landing-icons/residential-icon.png";
import LandlordIcon from "../../assets/landing/landing-icons/landlord-icon.png";
import DisputeIcon from "../../assets/landing/landing-icons/dispute-icon.png";
import FamilyIcon from "../../assets/landing/landing-icons/family-icon.png";
import IntellectualIcon from "../../assets/landing/landing-icons/intellectual-icon.png";
import WillsProbateIcon from "../../assets/landing/landing-icons/wills-probate-icon.png";
import "../../styles/fonts.css";
import { Link } from "react-router-dom";

const servicesContent = [
  // Immigration
  {
    link: "/lumine-law/all-services/immigration",
    image: ImmigrationIcon,
    heading: "Immigration Services",
  },

  //  Residential Property
  {
    link: "/lumine-law/all-services/residential",
    image: ResidentialIcon,
    heading: "Residential Property",
  },

  //  Commercial Property
  {
    link: "/lumine-law/all-services/commercial",
    image: ResidentialIcon,
    heading: "Commercial Property",
  },

  //  Intellectual Property
  {
    link: "/lumine-law/all-services/intellectual-property",
    image: IntellectualIcon,
    heading: "Intellectual Property",
  },

  //  Dispute Resolution
  {
    link: "/lumine-law/all-services/dispute-resolution",
    image: DisputeIcon,
    heading: "Dispute Resolution",
  },

  //  Landlord & Tenant Disputes
  {
    link: "/lumine-law/all-services/landlord-tenant",
    image: LandlordIcon,
    heading: "Landlord & Tenant Disputes",
  },

  //  Family & Children
  {
    link: "/lumine-law/all-services/family-and-children",
    image: FamilyIcon,
    heading: "Family & Children",
  },

  //  Wills & Probate
  {
    link: "/lumine-law/all-services/wills-probate",
    image: WillsProbateIcon,
    heading: "Wills & Probate",
  },
];

const ServicesSection = () => {
  return (
    <Box
      width="100%"
      height="100%"
      p={0}
      m={0}
      display={"flex"}
      flexFlow={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      bgImage={`url(${ServicesBg})`}
      bgPos={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      pt={{ xs: "0%", md: "3%" }}
      _loading={"lazy"}
    >
      <Grid
        templateColumns={{ xs: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        templateRows={{ xs: "repeat(4, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={{
          xs: "14px",
          sm: "16px",
          md: "18px",
          lg: "20px",
          xl: "22px",
          "2xl": "25px",
        }}
        height={{ xs: "35%", sm: "40%", md: "45%", lg: "50%" }}
        width={{ xs: "85%", md: "70%" }}
        alignItems={"flex-start"}
        justifyItems={"center"}
      >
        {/* Service Items */}
        {servicesContent.map((content) => (
          <GridItem
            border={"1px solid white"}
            backgroundColor={"rgba(0, 0, 0, 0.6)"}
            height={"100%"}
            width={"100%"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
            _hover={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              borderColor: "#beab7c",
              color: "#beab7c",
            }}
            transition={"all 0.3s ease"}
            zIndex={999}
          >
            <Link
              to={content.link}
              style={{ textDecoration: "none" }}
              p={0}
              m={0}
              width={"80%"}
            >
              <VStack>
                <Image
                  src={content.image}
                  height={{ xs: "30px", md: "40px" }}
                />
                <Text
                  fontSize={{
                    xs: "12px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={400}
                  fontFamily={"CeraRoundPro"}
                  color={"white"}
                >
                  {content.heading}
                </Text>
              </VStack>
            </Link>
          </GridItem>
        ))}

        {/* Button */}
        <GridItem colSpan={{ xs: "2", lg: "4" }}>
          <Button
            as={Link}
            to={"/lumine-law/all-services"}
            style={{ textDecoration: "none" }}
            border={"1px solid white"}
            backgroundColor={"rgba(0, 0, 0, 0.6)"}
            py={{
              //base: {"15px"}
              xs: "6px",
              md: "8px",
              lg: "10px",
              xl: "12px",
              "2xl": "15px",
            }}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
            _hover={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              borderColor: "#beab7c",
              color: "#beab7c",
            }}
            transition={"all 0.3s ease"}
            fontSize={{
              xs: "14px",
              sm: "14px",
              md: "16px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            fontWeight={400}
            fontFamily={"CeraRoundPro"}
            color={"white"}
          >
            All Services{" "}
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ServicesSection;
