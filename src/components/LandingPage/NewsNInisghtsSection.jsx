import {
  Box,
  Text,
  Button,
  Image,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import NewsInsightsBg from "../../assets/landing/news-insights.webp";
import NewsInsightsOne from "../../assets/landing/news-insights-one.webp";
import NewsInsightsTwo from "../../assets/landing/news-insights-two.webp";
import NewsInsightsThree from "../../assets/landing/news-insights-three.webp";
import NewsInsightsFour from "../../assets/landing/news-insights-four.webp";
import "../../styles/fonts.css";
import { Link } from "react-router-dom";

const images = [
  NewsInsightsOne,
  NewsInsightsTwo,
  NewsInsightsThree,
  NewsInsightsFour,
];

const news = [
  // 1
  {
    key: 1,
    image: images[0],
    date: "10 December 2023",
    heading:
      "Understanding the role of Solicitors in London in Property Transactions",
    description:
      "Understand the role of Solicitors in London in property transactions. Learn why choosing local solicitors in London offers a personal touch, in depth market knowledge",
  },

  // 2
  {
    key: 2,
    image: images[1],
    date: "10 November 2023",
    heading:
      "The Building Safety Act 2022 and Establishment of the New Homes Ombudsman Scheme",
    description:
      "A few intro lines to this article and what it holds or signifies, just so the reader has an idea what they are about to read.",
  },
];

const articles = [
  // 1
  {
    key: 1,
    image: images[2],
    date: "02 October 2023",
    heading: "LATEST ‘HOW TO RENT’ GUIDE",
    description:
      "A few intro lines to this article and what it holds or signifies, just so the reader has an idea what they are about to read.",
  },

  // 2
  {
    key: 2,
    image: images[3],
    date: "10 December 2023",
    heading:
      "Understanding the role of Solicitors in London in Property Transactions",
    description:
      "Understand the role of Solicitors in London in property transactions. Learn why choosing local solicitors in London offers a personal touch, in depth market knowledge",
  },
];

const Card = ({ item }) => (
  <Flex
    as={Link}
    to="/lumine-law/article-page"
    direction="column"
    width="100%"
    height="100%"
    cursor="pointer"
    border="1px solid black"
    borderRadius="8px"
    overflow="hidden"
    _hover={{ opacity: "0.85" }}
    transition="0.3s all ease"
  >
    <Box flexShrink={0}>
      <Image
        src={item.image}
        alt="Lumine Solicitors News and Insights"
        height={{
          xs: "75px",
          sm: "100px",
          md: "125px",
          lg: "150px",
          xl: "175px",
          "2xl": "200px",
        }}
        width="100%"
        objectFit="cover"
        loading="lazy"
      />
    </Box>

    <Flex
      flex="1"
      direction="column"
      gap="5px"
      p="10px"
      backgroundColor={"white"}
      color={"black"}
      fontFamily="CeraRoundPro"
    >
      {/* Date */}
      <Text
        display={{ xs: "none", xl: "grid" }}
        textAlign={"left"}
        fontSize={{
          xs: "8px",
          md: "9px",
          "2xl": "10px",
        }}
        fontWeight={300}
      >
        {item.date}
      </Text>

      {/* Heading */}
      <Text
        textAlign={"left"}
        fontSize={{
          xs: "10px",
          sm: "10px",
          md: "12px",
          lg: "12px",
          xl: "14px",
          "2xl": "15px",
        }}
        fontWeight={600}
      >
        {item.heading}
      </Text>

      {/* Description */}
      <Text
        display={{ xs: "none", lg: "grid" }}
        textAlign={"left"}
        fontSize={{
          xs: "8px",
          sm: "10px",
          md: "10px",
          lg: "10px",
          xl: "12px",
          "2xl": "13px",
        }}
        fontWeight={400}
      >
        {item.description}
      </Text>
    </Flex>
  </Flex>
);

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
        xs: "5%",
        sm: "5%",
        md: "6%",
        lg: "13.5%",
        xl: "13.5%",
        "2xl": "13.5%",
      }}
      _loading={"lazy"}
    >
      {/* Heading */}
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
      {/* Content */}
      <Flex
        width="90%"
        mx="auto"
        direction={{ base: "column", xl: "row", "2xl": "row" }}
        gap={{ xs: "10px", lg: "20px" }}
      >
        {/* News Section */}
        <Flex direction="column" flex="1" gap="20px">
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }}
            gap={{ xs: "5px", lg: "10px" }}
            height="100%"
          >
            {news.map((item) => (
              <GridItem key={item.key} height="100%">
                <Card item={item} />
              </GridItem>
            ))}
          </Grid>

          <Button
            as={Link}
            to="/lumine-law/news"
            alignSelf="center"
            width={{ base: "100%", md: "25%" }}
            backgroundColor="black"
            color="white"
            py={{
              xs: "6px",
              md: "8px",
              lg: "10px",
              xl: "12px",
              "2xl": "15px",
            }}
            borderRadius="10px"
            _hover={{
              borderColor: "#beab7c",
              color: "#beab7c",
            }}
            transition="all 0.3s ease"
            fontSize={{
              xs: "14px",
              md: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            fontFamily="CeraRoundPro"
          >
            News
          </Button>
        </Flex>

        {/* Articles Section */}
        <Flex direction="column" flex="1" gap="20px">
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }}
            gap={{ xs: "5px", lg: "10px" }}
            height="100%"
          >
            {articles.map((item) => (
              <GridItem key={item.key} height="100%">
                <Card item={item} />
              </GridItem>
            ))}
          </Grid>

          <Button
            as={Link}
            to="/lumine-law/insights"
            alignSelf="center"
            width={{ base: "100%", md: "25%" }}
            backgroundColor="black"
            color="white"
            py={{
              xs: "6px",
              md: "8px",
              lg: "10px",
              xl: "12px",
              "2xl": "15px",
            }}
            borderRadius="10px"
            _hover={{
              borderColor: "#beab7c",
              color: "#beab7c",
            }}
            transition="all 0.3s ease"
            fontSize={{
              xs: "14px",
              md: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            fontFamily="CeraRoundPro"
          >
            Insights
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NewsNInsightsSection;
