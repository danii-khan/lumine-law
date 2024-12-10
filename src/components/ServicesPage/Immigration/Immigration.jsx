import {
  Text,
  Container,
  Box,
  HStack,
  VStack,
  List,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import BannerImg from "../../../assets/services/main/immigration/immigration-banner.png";
import "../../../styles/fonts.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AllPrices from "../../NavLinks/AllPrices";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import ResidentialImg from "../../../assets/services/main/residential/main-banner.png";
import DisputeImg from "../../../assets/services/main/dispute/main-banner.png";
import LandlordImg from "../../../assets/services/main/landlord/main-banner.png";
import FamilyImg from "../../../assets/services/main/family/main-banner.png";
import AllServicesImg from "../../../assets/services/all/bannertest.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Immigration = () => {
  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor={"#a2cce0"}
        overflow="auto"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law Immigration Services</title>
        </Helmet>
        <Navbar />

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "200px",
              lg: "250px",
              xl: "300px",
              "2xl": "350px",
            }}
            bgImage={`url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Text
              fontSize={"40px"}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              fontStyle={"italic"}
              ml={"2.5%"}
            >
              Immigration
            </Text>
          </Box>

          {/* Main */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
          >
            {/* Heading */}
            <HStack
              justifyContent={"flex-start"}
              alignItems={"center"}
              mt={"2%"}
              mb={"1%"}
              ml={"2.5%"}
            >
              <Text
                fontFamily={"CeraRoundPro"}
                fontSize={"24px"}
                fontWeight={600}
              >
                What is Immigration?{" "}
              </Text>
            </HStack>

            {/* Main Para */}
            <Box
              width={"95%"}
              alignSelf={"center"}
              mb={{ xs: "15%", sm: "10%", md: "7.5%", xl: "5%" }}
            >
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={"18px"}
                textAlign={"left"}
              >
                Our legal services are highly recommended by our clients and
                other professionals such as barristers and other solicitors. Our
                immigration and litigation departments fight to win.
              </Text>
            </Box>
          </Box>

          {/* Grid  7x3*/}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            alignItems={"center"}
            color={"black"}
            mb={{ xs: "25px", lg: "50px" }}
          >
            <Grid
              templateRows={"repeat(7,1fr)"}
              templateColumns={"repeat(3, 1fr)"}
              width={{ xs: "90%", md: "75%", lg: "70%", xl: "60%" }}
              justifySelf={"center"}
              justifyItems={"center"}
              gap={{ xs: "10px", lg: "15px", xl: "30px" }}
              gapY={0}
              // mb={"100px"}
            >
              {/* Spouse Visa */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/immigration/spouse-visa"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Spouse Visa
              </GridItem>

              {/* UK Visitor Visa */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/immigration/uk-visitor-visa"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                UK Visitor Visa{" "}
              </GridItem>

              {/* British Citizenship App */}
              <GridItem
                as={Link}
                to={
                  "/lumine-law/all-services/immigration/british-citizenship-application"
                }
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                British Citizenship Application
              </GridItem>

              {/* Entry Clearance Applications from Outside of the UK */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/immigration/entry-clearance"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Entry Clearance Applications from Outside of the UK
              </GridItem>

              {/* Skilled Worker Visa */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/immigration/skilled-worker-visa"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Skilled Worker Visa{" "}
              </GridItem>

              {/* Skilled Migrant Sponsorship License Applications (In All Categories)*/}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/immigration/skilled-migrant"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Skilled Migrant Sponsorship License Applications (In All
                Categories)
              </GridItem>

              {/* Certificate of Sponsorship */}
              <GridItem
                as={Link}
                to="/lumine-law/all-services/immigration/certificate-of-sponsorship"
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Certificate of Sponsorship{" "}
              </GridItem>

              {/* Student Visa */}
              <GridItem
                as={Link}
                to="/lumine-law/all-services/immigration/student-visa"
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Student Visa{" "}
              </GridItem>

              {/* Switching Visa Categories from within the UK */}
              <GridItem
                as={Link}
                to="/lumine-law/all-services/immigration/visa-categories"
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Switching Visa Categories from within the UK
              </GridItem>

              {/* Visa Extensions */}
              <GridItem
                as={Link}
                to="/lumine-law/all-services/immigration/visa-extensions"
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Visa Extensions{" "}
              </GridItem>

              {/* Indefinite Leave To Remain */}
              <GridItem
                as={Link}
                to="/lumine-law/all-services/immigration/indefinite-leave"
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Indefinite Leave to Remain{" "}
              </GridItem>

              {/* Private Life/Humans Right-Based Applications */}
              <GridItem
                as={Link}
                to="/lumine-law/all-services/immigration/human-rights-app"
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Private Life/Humans Right-Based Applications
              </GridItem>

              {/* Discretionary Leave */}
              <GridItem
                as={Link}
                to="/lumine-law/all-services/immigration/discretionary-leave"
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Discretionary Leave
              </GridItem>

              {/* Immigration Bail and Revocation of a Deportation Order */}
              <GridItem
                as={Link}
                to="/lumine-law/all-services/immigration/bail-revocation"
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Immigration Bail and Revocation of a Deportation Order
              </GridItem>

              {/* EU Settlement Scheme Applications */}
              <GridItem
                as={Link}
                to="/lumine-law/all-services/immigration/eu-settlement"
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                EU Settlement Scheme Applications
              </GridItem>

              {/* Adminstrative Reviews, Appeals and Judicial Reviews*/}
              <GridItem
                as={Link}
                to="/lumine-law/all-services/immigration/reviews-appeals"
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Adminstrative Reviews, Appeals and Judicial Reviews
              </GridItem>

              {/* Asylum */}
              <GridItem
                as={Link}
                to="/lumine-law/all-services/immigration/asylum"
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Asylum
              </GridItem>

              {/* Innovator Founder Visa */}
              <GridItem
                as={Link}
                to="/lumine-law/all-services/immigration/innovator-founder"
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Innovator Founder Visa
              </GridItem>

              {/* empty */}
              <GridItem></GridItem>

              {/* Creative Worker Visa */}
              <GridItem
                as={Link}
                to="/lumine-law/all-services/immigration/creative-worker"
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"2.5px 10px"}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"white"}
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
                  "2xl": " 16px",
                }}
                fontWeight={500}
                fontFamily={"CeraRoundPro"}
                cursor={"pointer"}
              >
                Creative Worker Visa
              </GridItem>

              {/* empty */}
              <GridItem></GridItem>
            </Grid>
          </Box>

          {/* Other Services */}
          <Box mb="50px">
            {/* Header */}
            <Box
              width={"100%"}
              display={"flex"}
              flexFlow={"column"}
              color={"black"}
            >
              <Box width={"90%"} alignSelf={"center"}>
                <Text
                  color={"black"}
                  fontSize={{
                    xs: "20px",
                    sm: "20px",
                    md: "24px",
                    lg: "26px",
                    xl: "28px",
                    "2xl": "30px",
                  }}
                  fontWeight={500}
                  fontStyle={"italic"}
                  mb={{
                    xs: "25px",
                    sm: "30px",
                    md: "35px",
                    lg: "40px",
                    xl: "45px",
                    "2xl": "50px",
                  }}
                  textAlign={"left"}
                >
                  Other Services
                </Text>
              </Box>
            </Box>

            {/* List */}
            <Box
              width={"100%"}
              display={"flex"}
              flexFlow={"column"}
              alignItems={"center"}
              color={"black"}
            >
              <Grid
                width={"90%"}
                templateColumns={{ xs: "repeat(2, 2fr)", lg: "repeat(3, 1fr)" }}
                gap={{
                  xs: "25px",
                  sm: "30px",
                  md: "35px",
                  lg: "40px",
                  xl: "45px",
                  "2xl": "50px",
                }}
                justifyItems={"center"}
                alignItems={"center"}
              >
                {/* Col 1 */}
                <GridItem
                  width={"100%"}
                  height={{
                    xs: "175px",
                    sm: "175px",
                    md: "175px",
                    lg: "200px",
                    xl: "225px",
                    "2xl": "250px",
                  }}
                  padding={{ xs: "10px 10px", lg: "10px 20px" }}
                  border={"1px solid black"}
                  borderRadius={"8px"}
                  cursor={"pointer"}
                  _hover={{
                    opacity: "0.8",
                    transition: "all 0.5s ease",
                  }}
                  bgImage={`url(${ResidentialImg})`}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                >
                  <Link
                    to={"/lumine-law/all-services/residential-commercial"}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      height={"100%"}
                      display={"flex"}
                      flexFlow={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      gap={"10px"}
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
                        fontFamily={"CeraRoundPro"}
                        fontWeight={500}
                        textAlign={"left"}
                        color={"#ffffff"}
                      >
                        Residential & Commercial Property
                      </Text>
                      <VStack
                        width={"100%"}
                        height={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
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
                          color={"#ffffff"}
                          fontFamily={"CeraRoundPro"}
                          fontWeight={400}
                        >
                          A lil para about what this service is{" "}
                        </Text>
                        <HiOutlineArrowLongRight
                          color={"#ffffff"}
                          size={"2em"}
                        />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>

                {/* Col 2 */}
                <GridItem
                  width={"100%"}
                  height={{
                    xs: "175px",
                    sm: "175px",
                    md: "175px",
                    lg: "200px",
                    xl: "225px",
                    "2xl": "250px",
                  }}
                  padding={{ xs: "10px 10px", lg: "10px 20px" }}
                  border={"1px solid black"}
                  borderRadius={"8px"}
                  cursor={"pointer"}
                  _hover={{
                    opacity: "0.8",
                    transition: "all 0.5s ease",
                  }}
                  bgImage={`url(${DisputeImg})`}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                >
                  <Link
                    to={"/lumine-law/all-services/dispute-resolution"}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      height={"100%"}
                      display={"flex"}
                      flexFlow={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      gap={"10px"}
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
                        fontFamily={"CeraRoundPro"}
                        fontWeight={500}
                        textAlign={"left"}
                        color={"#ffffff"}
                      >
                        Dispute Resolution and Civil Litigation
                      </Text>
                      <VStack
                        width={"100%"}
                        height={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
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
                          color={"#ffffff"}
                          fontFamily={"CeraRoundPro"}
                          fontWeight={400}
                        >
                          A lil para about what this service is{" "}
                        </Text>
                        <HiOutlineArrowLongRight
                          color={"#ffffff"}
                          size={"2em"}
                        />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>

                {/* Col 3 */}
                <GridItem
                  width={"100%"}
                  height={{
                    xs: "175px",
                    sm: "175px",
                    md: "175px",
                    lg: "200px",
                    xl: "225px",
                    "2xl": "250px",
                  }}
                  padding={{ xs: "10px 10px", lg: "10px 20px" }}
                  border={"1px solid black"}
                  borderRadius={"8px"}
                  cursor={"pointer"}
                  _hover={{
                    opacity: "0.8",
                    transition: "all 0.5s ease",
                  }}
                  bgImage={`url(${LandlordImg})`}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                >
                  <Link
                    to={"/lumine-law/all-services/landlord-tenant"}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      height={"100%"}
                      display={"flex"}
                      flexFlow={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      gap={"10px"}
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
                        fontFamily={"CeraRoundPro"}
                        fontWeight={500}
                        textAlign={"left"}
                        color={"#ffffff"}
                      >
                        Landlord & Tenant Disputes
                      </Text>
                      <VStack
                        width={"100%"}
                        height={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
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
                          color={"#ffffff"}
                          fontFamily={"CeraRoundPro"}
                          fontWeight={400}
                        >
                          A lil para about what this service is{" "}
                        </Text>
                        <HiOutlineArrowLongRight
                          color={"#ffffff"}
                          size={"2em"}
                        />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>

                {/* Col 4 */}
                <GridItem
                  width={"100%"}
                  height={{
                    xs: "175px",
                    sm: "175px",
                    md: "175px",
                    lg: "200px",
                    xl: "225px",
                    "2xl": "250px",
                  }}
                  padding={{ xs: "10px 10px", lg: "10px 20px" }}
                  border={"1px solid black"}
                  borderRadius={"8px"}
                  cursor={"pointer"}
                  _hover={{
                    opacity: "0.8",
                    transition: "all 0.5s ease",
                  }}
                  bgImage={`url(${FamilyImg})`}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                >
                  <Link
                    to={"/lumine-law/all-services/family-and-children"}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      height={"100%"}
                      display={"flex"}
                      flexFlow={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      gap={"10px"}
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
                        fontFamily={"CeraRoundPro"}
                        fontWeight={500}
                        textAlign={"left"}
                        color={"#ffffff"}
                      >
                        Family & Children
                      </Text>
                      <VStack
                        width={"100%"}
                        height={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
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
                          color={"#ffffff"}
                          fontFamily={"CeraRoundPro"}
                          fontWeight={400}
                        >
                          A lil para about what this service is{" "}
                        </Text>
                        <HiOutlineArrowLongRight
                          color={"#ffffff"}
                          size={"2em"}
                        />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>

                {/* Col 5 */}
                <GridItem
                  width={"100%"}
                  height={{
                    xs: "175px",
                    sm: "175px",
                    md: "175px",
                    lg: "200px",
                    xl: "225px",
                    "2xl": "250px",
                  }}
                  padding={{ xs: "10px 10px", lg: "10px 20px" }}
                  border={"1px solid black"}
                  borderRadius={"8px"}
                  cursor={"pointer"}
                  _hover={{
                    opacity: "0.8",
                    transition: "all 0.5s ease",
                  }}
                  bgImage={`url(${AllServicesImg})`}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                >
                  <Link
                    to={"/lumine-law/all-services"}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      height={"100%"}
                      display={"flex"}
                      flexFlow={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      gap={"10px"}
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
                        fontFamily={"CeraRoundPro"}
                        fontWeight={500}
                        textAlign={"left"}
                        color={"#ffffff"}
                      >
                        All Services
                      </Text>
                      <VStack
                        width={"100%"}
                        height={"100%"}
                        justifyContent={"space-between"}
                        alignItems={"flex-start"}
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
                          color={"#ffffff"}
                          fontFamily={"CeraRoundPro"}
                          fontWeight={400}
                        ></Text>
                        <HiOutlineArrowLongRight
                          color={"#ffffff"}
                          size={"2em"}
                        />
                      </VStack>
                    </Box>
                  </Link>
                </GridItem>
              </Grid>
            </Box>
          </Box>

          {/* All Prices */}
          <AllPrices />

          {/* News + Insights */}
          <AllNewsInsights />

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Immigration;
