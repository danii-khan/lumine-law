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
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { GoPlus } from "react-icons/go";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { AiOutlineMinus } from "react-icons/ai";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";
import BannerImg from "../../../assets/services/main/intellectual/intellectual-banner.webp";
import CommercialImg from "../../../assets/services/main/commercial/main-banner.webp";
import ResidentialImg from "../../../assets/services/main/residential/main-banner.webp";
import ImmigrationImg from "../../../assets/services/main/immigration/main-banner.webp";
import LandlordImg from "../../../assets/services/main/landlord/main-banner.webp";
import IntellectualImg from "../../../assets/services/main/intellectual/main-banner.webp";
import FamilyImg from "../../../assets/services/main/family/main-banner.webp";
import WillsProbateImg from "../../../assets/services/main/wills-probate/main-banner.webp";
import DisputeImg from "../../../assets/services/main/dispute/main-banner.webp";
import AllServicesImg from "../../../assets/services/all/bannertest.webp";
import "../../../styles/fonts.css";

const introContent = {
  mainText:
    "Intellectual property (IP) rights are designed to protect the creations of human intellect, such as inventions, literary and artistic works, symbols, names, images, and designs. These rights allow individuals or organizations to have exclusive control over their creations and prevent others from using them without permission.",
  subText: "There are several reasons why IP rights are important:",
  listItems: [
    {
      title: "Encouraging Innovation",
      content:
        "IP rights provide an incentive for creators and innovators to invest time and resources in developing new ideas and products. The ability to protect their creations from unauthorized use gives them the confidence to take risks and explore new areas of research and development.",
    },
    {
      title: "Promoting Economic Growth",
      content:
        "IP rights can stimulate economic growth by creating new products and services, generating employment opportunities, and driving technological advancement. By protecting the rights of creators and innovators, IP rights can also help to attract investment and promote international trade.",
    },
    {
      title: "Protecting Consumer Interests",
      content:
        "IP rights can help to ensure that consumers have access to high-quality products and services by encouraging competition and preventing the spread of counterfeit or substandard goods.",
    },
    {
      title: "Encouraging Creativity and Cultural Expression",
      content:
        "IP rights can help to preserve and promote cultural heritage by protecting traditional knowledge and expressions of folklore.",
    },
  ],
  conclusion:
    "We, at Lumine Solicitors help individuals and businesses protect their intellectual property rights, which are trademarks, copyrights, patents, and trade secrets.",
};

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
    title: "Wills & Probate",
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

const IPServices = [
  {
    title: "Copyright",
    path: "/lumine-law/all-services/intellectual-property/copyright",
  },
  {
    title: "Patent",
    path: "/lumine-law/all-services/intellectual-property/patent",
  },
  {
    title: "Trademark",
    path: "/lumine-law/all-services/intellectual-property/trademark",
  },
];

const IPServiceButton = ({ title, path }) => (
  <GridItem
    as={Link}
    to={path}
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
    {title}
  </GridItem>
);

// Reusable Dropdown Component
const DropdownSection = ({ title, isOpen, onToggle, children }) => (
  <Box
    display="flex"
    flexDir="column"
    color="black"
    width="90%"
    justifyContent="center"
    alignItems="center"
  >
    <HStack
      borderTop="1px solid #adacac"
      width="100%"
      justifyContent="space-between"
      px={{
        xs: "8px",
        sm: "10px",
        md: "12px",
        lg: "13px",
        xl: "14px",
        "2xl": "15px",
      }}
      alignItems="center"
      py={{
        xs: "4px",
        sm: "6px",
        md: "7px",
        lg: "8px",
        xl: "9px",
        "2xl": "10px",
      }}
      cursor="pointer"
      _hover={{ backgroundColor: !isOpen && "black" }}
      transition="all 0.3s ease"
      backgroundColor={isOpen ? "black" : "#2e2d2d"}
      onClick={onToggle}
    >
      <Text
        textAlign="left"
        fontSize={{
          xs: "14px",
          sm: "14px",
          md: "16px",
          lg: "16px",
          xl: "18px",
          "2xl": "20px",
        }}
        fontWeight={500}
        fontFamily="CeraRoundPro"
        color="#beab7c"
      >
        {title}
      </Text>
      {!isOpen ? (
        <GoPlus color="#beab7c" size="2em" />
      ) : (
        <AiOutlineMinus color="#beab7c" size="2em" />
      )}
    </HStack>
    {isOpen && (
      <VStack
        justifyContent="center"
        alignItems="flex-start"
        gap={{ xs: "20px", md: "30px" }}
        mb={{ xs: "4px", md: "10px" }}
        borderTop="1px solid #adacac"
        py={{ xs: "15px", md: "30px" }}
        width="100%"
      >
        {children}
      </VStack>
    )}
  </Box>
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
const IntellectualProperty = () => {
  return (
    <Container
      width="100vw"
      maxWidth="100%"
      minHeight="100vh"
      backgroundColor="#99acbd"
      overflow="auto"
      m={0}
      p={0}
      display="flex"
      flexDirection="column"
    >
      <Helmet>
        <title>Lumine Law Intellectual Property Services</title>
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
            Intellectual Property
          </Text>
        </Box>

        {/* Main */}
        <Box width="100%" display="flex" flexFlow="column" color="white">
          <Box
            width="90%"
            alignSelf="center"
            mb="5%"
            my={{ xs: "5%", md: "2.5%" }}
          >
            <Text
              fontFamily="CeraRoundPro"
              fontSize={{ xs: "14px", lg: "16px", xl: "20px", "2xl": "24px" }}
              fontWeight={600}
              textAlign="justify"
              mb="2.5%"
              color="black"
            >
              {introContent.mainText}
            </Text>

            <Text
              fontFamily="CeraRoundPro"
              fontWeight={400}
              fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
              textAlign="justify"
              color="black"
            >
              {introContent.subText}
            </Text>

            <List.Root
              as="ol"
              textAlign="justify"
              fontSize={{
                xs: "12px",
                sm: "12px",
                md: "14px",
                lg: "14px",
                xl: "16px",
                "2xl": "18px",
              }}
              color="black"
              fontWeight={400}
              fontFamily="CeraRoundPro"
            >
              {introContent.listItems.map((item, index) => (
                <List.Item key={index}>
                  <strong>{item.title}</strong>: {item.content}
                </List.Item>
              ))}
            </List.Root>

            <Text
              fontFamily="CeraRoundPro"
              fontWeight={400}
              fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
              textAlign="justify"
              color="black"
            >
              {introContent.conclusion}
            </Text>
          </Box>
          <Box width="90%" alignSelf="center" my={{ xs: "5%", md: "0%" }}>
            <Text
              fontFamily="CeraRoundPro"
              fontSize="24px"
              fontWeight={600}
              textAlign="left"
              mb="2.5%"
              color={"black"}
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
            templateColumns="repeat(3, 1fr)"
            width={{ xs: "90%", md: "75%", lg: "70%", xl: "60%" }}
            justifySelf="center"
            justifyItems="center"
            gap={{ xs: "10px", lg: "15px", xl: "30px" }}
            gapY={0}
          >
            {IPServices.map((service) => (
              <IPServiceButton
                key={service.title}
                title={service.title}
                path={service.path}
              />
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

export default IntellectualProperty;
