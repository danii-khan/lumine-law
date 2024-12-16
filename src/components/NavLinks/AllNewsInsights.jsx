import { Text, Box, Image, HStack, VStack, Button } from "@chakra-ui/react";
import "../../styles/fonts.css";
import NewsInsightsOne from "../../assets/landing/news-insights-one.png";
import NewsInsightsTwo from "../../assets/landing/news-insights-two.png";
import NewsInsightsThree from "../../assets/landing/news-insights-three.png";
import NewsInsightsFour from "../../assets/landing/news-insights-four.png";
import { Link } from "react-router-dom";

const AllNewsInsights = () => {
  return (
    <Box
      width="100%"
      p={0}
      m={0}
      display={"flex"}
      flexDir={"column"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      gap={"25px"}
      mb={"50px"}
      _loading={"lazy"}
    >
      {/* Header */}
      <Box width={"100%"} display={"flex"} flexFlow={"column"} color={"black"}>
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
            News and Insights
          </Text>
        </Box>
      </Box>

      {/* List */}
      <Box
        width={"100%"}
        display={"flex"}
        flexFlow={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"black"}
        gap={"2.5%"}
      >
        <VStack width={"43.75%"}>
          <HStack width={"100%"} gap={"2.5%"}>
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

        <VStack width={"43.75%"}>
          <HStack width={"100%"} gap={"2.5%"}>
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
      </Box>
    </Box>
  );
};

export default AllNewsInsights;
