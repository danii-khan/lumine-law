import { Box, Text, VStack, Button, HStack, Image } from "@chakra-ui/react";
import NewsInsightsBg from "../../assets/landing/news-insights.png";
import NewsInsightsOne from "../../assets/landing/news-insights-one.png";
import NewsInsightsTwo from "../../assets/landing/news-insights-two.png";
import NewsInsightsThree from "../../assets/landing/news-insights-three.png";
import NewsInsightsFour from "../../assets/landing/news-insights-four.png";
import "../../styles/fonts.css";
import { Link } from "react-router-dom";

const NewsNInsightsSection = () => {
  return (
    <Box
      width="100%"
      height="100%"
      p={0}
      m={0}
      display={"flex"}
      flexDir={"column"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      gap={"25px"}
      bgImage={`url(${NewsInsightsBg})`}
      bgPos={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      pt={{
        xs: "20%",
        sm: "5%",
        md: "6%",
        lg: "13.5%",
        xl: "13.5%",
        "2xl": "13.5%",
      }}
      _loading={"lazy"}
    >
      <Text
        color="#000000"
        fontSize={{
          xs: "14px",
          sm: "16px",
          md: "18px",
          lg: "18px",
          xl: "18px",
          "2xl": "25px",
        }}
        fontWeight={300}
        fontFamily={
          "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
        }
        ml={{
          xs: "0%",
          sm: "2.5%",
          md: "5%",
          lg: "8%",
          xl: "10%",
          "2xl": "12.5%",
        }}
      >
        A small intro about what our team is like, diverse etc. just a few
        lines.{" "}
      </Text>
      <HStack
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10px"}
      >
        <VStack width={"45%"} gap={"10px"}>
          <HStack width={"100%"}>
            <Image
              src={NewsInsightsOne}
              height={{
                xs: "150px",
                sm: "175px",
                md: "225px",
                lg: "275px",
                xl: "325px",
                "2xl": "375px",
              }}
              width={"50%"}
              objectFit={"cover"}
            />
            <Image
              src={NewsInsightsTwo}
              height={{
                xs: "150px",
                sm: "175px",
                md: "225px",
                lg: "275px",
                xl: "325px",
                "2xl": "375px",
              }}
              width={"50%"}
              objectFit={"cover"}
            />
          </HStack>
          <Button
            as={Link}
            to={"/lumine-law/all-services"}
            style={{ textDecoration: "none" }}
            border={"1px solid white"}
            backgroundColor={"black"}
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
            News
          </Button>
        </VStack>
        <VStack width={"45%"} gap={"10px"}>
          <HStack width={"100%"}>
            <Image
              src={NewsInsightsThree}
              height={{
                xs: "150px",
                sm: "175px",
                md: "225px",
                lg: "275px",
                xl: "325px",
                "2xl": "375px",
              }}
              width={"50%"}
              objectFit={"cover"}
            />
            <Image
              src={NewsInsightsFour}
              height={{
                xs: "150px",
                sm: "175px",
                md: "225px",
                lg: "275px",
                xl: "325px",
                "2xl": "375px",
              }}
              width={"50%"}
              objectFit={"cover"}
            />
          </HStack>
          <Button
            as={Link}
            to={"/lumine-law/all-services"}
            style={{ textDecoration: "none" }}
            border={"1px solid white"}
            backgroundColor={"black"}
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
            Insights
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default NewsNInsightsSection;
