import {
  Text,
  Container,
  Box,
  HStack,
  List,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import BannerImg from "../../../assets/services/main/family/family-banner.png";
import ArrowImg from "../../../assets/services/main/immigration/main-link-arrow.png";
import "../../../styles/fonts.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Family = () => {
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
          <title>Lumine Law Family and Children Services</title>
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
              Family and Children
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
                What is Family and Children services?{" "}
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
              // templateRows={"repeat(7,1fr)"}
              templateColumns={"repeat(3, 1fr)"}
              width={{ xs: "90%", md: "75%", lg: "70%", xl: "60%" }}
              justifySelf={"center"}
              justifyItems={"center"}
              gap={{ xs: "10px", lg: "15px", xl: "30px" }}
              gapY={0}
              mb={"100px"}
            >
              {/* Divorce */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/divorce"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
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
                Divorce
              </GridItem>

              {/* Pre Nuptial Agreements */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/nuptial-agreement"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
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
                Pre Nuptial Agreements
              </GridItem>

              {/* Child Arrangements */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/child-arrangements"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
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
                Child Arrangements
              </GridItem>

              {/* Parental Responsibility */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/parental-responsbility"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
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
                Parental Responsibility
              </GridItem>

              {/* Consent Orders */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/consent-orders"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
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
                Consent Orders
              </GridItem>

              {/* Financial Statements */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/financial-settlements"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
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
                Financial Settlements
              </GridItem>

              {/* Domestic Violence */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/domestic-violence"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
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
                Domestic Violence
              </GridItem>

              {/* Adoption and Surrogacy */}
              <GridItem
                as={Link}
                to={"/lumine-law/all-services/family/adoption-surrogacy"}
                color={"black"}
                border={"1px solid black"}
                borderRadius={"8px"}
                p={"25px 10px"}
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
                Adoption and Surrogacy
              </GridItem>
            </Grid>
          </Box>

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Family;
