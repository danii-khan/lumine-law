import { Text, Box, Image } from "@chakra-ui/react";
import "../../styles/fonts.css";
import NewsInsightsOne from "../../assets/landing/news-insights-one.png";
import NewsInsightsTwo from "../../assets/landing/news-insights-two.png";
import NewsInsightsThree from "../../assets/landing/news-insights-three.png";
import NewsInsightsFour from "../../assets/landing/news-insights-four.png";

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
      >
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
          width={{ xs: "22%", md: "22.5%" }}
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
          width={{ xs: "22%", md: "22.5%" }}
          objectFit={"cover"}
        />
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
          width={{ xs: "22%", md: "22.5%" }}
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
          width={{ xs: "22%", md: "22.5%" }}
          objectFit={"cover"}
        />
      </Box>
    </Box>
  );
};

export default AllNewsInsights;
