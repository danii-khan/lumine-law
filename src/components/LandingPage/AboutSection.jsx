import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import AboutBg from "../../assets/landing/about-bg.png";
import "../../styles/fonts.css";

const AboutSection = () => {
  return (
    <Box
      width="100%"
      height="100%"
      p={0}
      m={0}
      bgImage={`url(${AboutBg})`}
      bgPos={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      display={"flex"}
      alignItems={"center"}
      _loading={"lazy"}
    >
      <Grid
        templateColumns={"repeat(6, 1fr)"}
        templateRows={"repeat(2, 1fr)"}
        gap={"30px"}
        pl={"10%"}
      >
        {/* <GridItem></GridItem> */}
        <GridItem colSpan={{ xs: "5", md: "3" }}>
          <Text
            fontSize={{
              xs: "12px",
              sm: "13px",
              md: "14px",
              lg: "15px",
              xl: "16px",
              "2xl": "20px",
            }}
            fontWeight={300}
            fontFamily="HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
            textAlign={"left"}
            color={"black"}
          >
            A whole paragraph, in further details explaining what Lumine Law
            does. Go into details. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
        </GridItem>
        <GridItem colSpan={{ xs: "0", md: "2" }}></GridItem>
        {/* <GridItem></GridItem> */}
        <GridItem colSpan={{ xs: "5", md: "3" }}>
          <Text
            fontSize={{
              xs: "12px",
              sm: "13px",
              md: "14px",
              lg: "15px",
              xl: "16px",
              "2xl": "20px",
            }}
            fontWeight={300}
            fontFamily="HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
            textAlign={"left"}
            color={"black"}
          >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AboutSection;
