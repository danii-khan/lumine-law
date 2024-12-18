import {
  Text,
  Box,
  Image,
  Button,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import "../../styles/fonts.css";
import NewsInsightsOne from "../../assets/landing/news-insights-one.png";
import NewsInsightsTwo from "../../assets/landing/news-insights-two.png";
import NewsInsightsThree from "../../assets/landing/news-insights-three.png";
import NewsInsightsFour from "../../assets/landing/news-insights-four.png";
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
        height={{
          xs: "150px",
          sm: "175px",
          md: "225px",
          lg: "250px",
          xl: "275px",
          "2xl": "300px",
        }}
        width="100%"
        objectFit="cover"
      />
    </Box>

    <Flex
      flex="1"
      direction="column"
      gap="5px"
      p="10px"
      backgroundColor={"#d9d9d9"}
      color={"black"}
      fontFamily="CeraRoundPro"
    >
      <Text
        textAlign={"left"}
        fontSize={{
          xs: "8px",
          md: "10px",
          "2xl": "12px",
        }}
        fontWeight={300}
      >
        {item.date}
      </Text>

      <Text
        textAlign={"left"}
        fontSize={{
          xs: "12px",
          sm: "12px",
          md: "14px",
          lg: "14px",
          xl: "16px",
          "2xl": "18px",
        }}
        fontWeight={600}
      >
        {item.heading}
      </Text>

      <Text
        textAlign={"left"}
        fontSize={{
          xs: "10px",
          sm: "12px",
          md: "12px",
          lg: "12px",
          xl: "14px",
          "2xl": "16px",
        }}
        fontWeight={400}
      >
        {item.description}
      </Text>
    </Flex>
  </Flex>
);

const AllNewsInsights = () => {
  return (
    <Flex
      width="100%"
      direction="column"
      align="flex-start"
      justify="center"
      mb="50px"
    >
      {/* Header */}
      <Box width="90%" mx="auto">
        <Text
          color="black"
          fontSize={{
            xs: "20px",
            sm: "20px",
            md: "24px",
            lg: "26px",
            xl: "28px",
            "2xl": "30px",
          }}
          fontWeight={500}
          fontStyle="italic"
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

      {/* Content */}
      <Flex
        width="90%"
        mx="auto"
        direction={{ base: "column", "2xl": "row" }}
        gap="20px"
      >
        {/* News Section */}
        <Flex direction="column" flex="1" gap="20px">
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap="10px"
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
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap="10px"
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
    </Flex>
  );
};

export default AllNewsInsights;
