import { Container, Image, Box, Text, VStack, Button } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import MainBg from "../../assets/landing/main-bg.jpg";
import "../../styles/fonts.css";

const LandingPage = () => {
  return (
    <Container width="100vw" maxWidth="100%" overflow="hidden" m={0} p={0}>
      <Navbar />
      {/* First Main Part */}
      <Box
        width="100%"
        height="90vh"
        p={0}
        m={0}
        bgImage={`url(${MainBg})`}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        display={"flex"}
        alignItems={"center"}
      >
        <VStack
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          width={"50%"}
          ml={"5%"}
          gap={"20px"}
        >
          <Text fontSize={"36px"} textAlign={"left"}>
            <span
              style={{
                color: "#beab7c",
                fontWeight: "600",
                fontFamily: "CeraRoundPro",
              }}
            >
              We represent{" "}
            </span>
            <span
              style={{
                color: "white",
                fontWeight: "500",
                fontFamily:
                  "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
                fontStyle: "italic",
              }}
            >
              what's next.
            </span>
          </Text>
          <Text
            fontSize={"28px"}
            fontWeight={300}
            fontFamily="HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
            textAlign={"left"}
          >
            A whole paragraph, slightly explaining what Lumine law is, or just
            like a smaller intro paragraph.
          </Text>
          <Button
            background={"none"}
            color={"white"}
            border={"1px solid #FFFFFF"}
            borderRadius={"8px"}
            fontSize={"16px"}
            fontWeight={500}
            fontFamily={"CeraRoundPro"}
            _hover={{
              borderColor: "#beab7c",
              backgroundColor: "black",
              color: "#beab7c",
              transition: "all 0.3s ease",
            }}
          >
            Explore Now
          </Button>
        </VStack>
      </Box>
      <Footer />
    </Container>
  );
};

export default LandingPage;
