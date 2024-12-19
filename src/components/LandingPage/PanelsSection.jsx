import { Box, Text } from "@chakra-ui/react";
import AnimatedPanels from "./AnimatedPanels";
import PanelsBg from "../../assets/landing/panels.png";
import PanelOne from "../../assets/landing/panel-images/panel-barclays.png";
import PanelTwo from "../../assets/landing/panel-images/panel-santander.png";
import PanelThree from "../../assets/landing/panel-images/panel-natwest.png";
import PanelFour from "../../assets/landing/panel-images/panel-tsb.png";
import PanelFive from "../../assets/landing/panel-images/panel-hsbc.png";
import PanelSix from "../../assets/landing/panel-images/panel-pm.png";
import PanelSeven from "../../assets/landing/panel-images/panel-poi.png";
import PanelEight from "../../assets/landing/panel-images/panel-clydesdale.png";
import PanelNine from "../../assets/landing/panel-images/panel-yorkshire.png";
import PanelTen from "../../assets/landing/panel-images/panel-darlington.png";
import PanelEleven from "../../assets/landing/panel-images/panel-ipswich.png";
import PanelTwelve from "../../assets/landing/panel-images/panel-natwest.png";
import "../../styles/fonts.css";

const PanelsSection = () => {
  return (
    <Box
      width="100%"
      height="100%"
      p={0}
      m={0}
      pt={"7.5%"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      gap={"25px"}
      bgImage={`url(${PanelsBg})`}
      bgPos={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      _loading={"lazy"}
    >
      <Text
        color="black"
        fontSize={{
          xs: "12px",
          sm: "14px",
          md: "15px",
          lg: "16px",
          xl: "18px",
          "2xl": "20px",
        }}
        fontWeight={300}
        fontFamily={
          "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
        }
        ml={{ xs: "2.5%", sm: "5%", md: "7.5%", lg: "10%", "2xl": "12.5%" }}
      >
        A small intro about what our team is like, diverse etc. just a few
        lines.{" "}
      </Text>
      <AnimatedPanels
        images={[
          PanelOne,
          PanelTwo,
          PanelThree,
          PanelFour,
          PanelFive,
          PanelSix,
          PanelSeven,
          PanelEight,
          PanelNine,
          PanelTen,
          PanelEleven,
          PanelTwelve,
        ]}
      />
    </Box>
  );
};

export default PanelsSection;
