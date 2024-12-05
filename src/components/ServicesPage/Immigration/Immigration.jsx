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
import BannerImg from "../../../assets/services/main/immigration/immigration-banner.png";
import ArrowImg from "../../../assets/services/main/immigration/main-link-arrow.png";
import "../../../styles/fonts.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
            height={"200px"}
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
          <Grid
            templateRows={"repeat(7,1fr)"}
            templateColumns={"repeat(3, 1fr)"}
            width={{ xs: "90%", md: "75%", lg: "70%", xl: "60%" }}
            justifySelf={"center"}
            justifyItems={"center"}
            gap={{ xs: "10px", lg: "15px", xl: "30px" }}
            gapY={0}
            mb={"100px"}
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
                xl: "18px",
                "2xl": " 20px",
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
                xl: "18px",
                "2xl": " 20px",
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
                xl: "18px",
                "2xl": " 20px",
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
                xl: "18px",
                "2xl": " 20px",
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
                xl: "18px",
                "2xl": " 20px",
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
                xl: "18px",
                "2xl": " 20px",
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
                xl: "18px",
                "2xl": " 20px",
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
                xl: "18px",
                "2xl": " 20px",
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
                xl: "18px",
                "2xl": " 20px",
              }}
              fontWeight={500}
              fontFamily={"CeraRoundPro"}
              cursor={"pointer"}
            >
              Switching Visa Categories from within the UK
            </GridItem>

            {/* Visa Extensions */}
            <GridItem
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
                xl: "18px",
                "2xl": " 20px",
              }}
              fontWeight={500}
              fontFamily={"CeraRoundPro"}
              cursor={"pointer"}
            >
              Visa Extensions{" "}
            </GridItem>

            {/* Indefinite Leave To Remain */}
            <GridItem
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
                xl: "18px",
                "2xl": " 20px",
              }}
              fontWeight={500}
              fontFamily={"CeraRoundPro"}
              cursor={"pointer"}
            >
              Indefinite Leave to Remain{" "}
            </GridItem>

            {/* Private Life/Humans Right-Based Applications */}
            <GridItem
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
                xl: "18px",
                "2xl": " 20px",
              }}
              fontWeight={500}
              fontFamily={"CeraRoundPro"}
              cursor={"pointer"}
            >
              Private Life/Humans Right-Based Applications
            </GridItem>

            {/* Discretionary Leave */}
            <GridItem
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
                xl: "18px",
                "2xl": " 20px",
              }}
              fontWeight={500}
              fontFamily={"CeraRoundPro"}
              cursor={"pointer"}
            >
              Discretionary Leave
            </GridItem>

            {/* Immigration Bail and Revocation of a Deportation Order */}
            <GridItem
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
                xl: "18px",
                "2xl": " 20px",
              }}
              fontWeight={500}
              fontFamily={"CeraRoundPro"}
              cursor={"pointer"}
            >
              Immigration Bail and Revocation of a Deportation Order
            </GridItem>

            {/* EU Settlement Scheme Applications */}
            <GridItem
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
                xl: "18px",
                "2xl": " 20px",
              }}
              fontWeight={500}
              fontFamily={"CeraRoundPro"}
              cursor={"pointer"}
            >
              EU Settlement Scheme Applications
            </GridItem>

            {/* Adminstrative Reviews, Appeals and Judicial Reviews*/}
            <GridItem
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
                xl: "18px",
                "2xl": " 20px",
              }}
              fontWeight={500}
              fontFamily={"CeraRoundPro"}
              cursor={"pointer"}
            >
              Adminstrative Reviews, Appeals and Judicial Reviews
            </GridItem>

            {/* Asylum */}
            <GridItem
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
                xl: "18px",
                "2xl": " 20px",
              }}
              fontWeight={500}
              fontFamily={"CeraRoundPro"}
              cursor={"pointer"}
            >
              Asylum
            </GridItem>

            {/* Innovator Founder Visa */}
            <GridItem
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
                xl: "18px",
                "2xl": " 20px",
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
                xl: "18px",
                "2xl": " 20px",
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
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Immigration;
