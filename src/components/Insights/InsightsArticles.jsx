import { Text, Box, Grid, GridItem, Image } from "@chakra-ui/react";
import "../../styles/fonts.css";
import NewsInsightsOne from "../../assets/landing/news-insights-one.webp";
import NewsInsightsTwo from "../../assets/landing/news-insights-two.webp";
import NewsInsightsThree from "../../assets/landing/news-insights-three.webp";
import NewsInsightsFour from "../../assets/landing/news-insights-four.webp";
import { Link } from "react-router-dom";

const images = [
  NewsInsightsOne,
  NewsInsightsTwo,
  NewsInsightsThree,
  NewsInsightsFour,
];

const articles = [
  // 1
  {
    key: 1,
    image: images[3],
    date: "10 December 2023",
    heading:
      "Understanding the role of Solicitors in London in Property Transactions",
    description:
      "Understand the role of Solicitors in London in property transactions. Learn why choosing local solicitors in London offers a personal touch, in depth market knowledge",
  },

  // 2
  {
    key: 2,
    image: images[2],
    date: "10 November 2023",
    heading:
      "The Building Safety Act 2022 and Establishment of the New Homes Ombudsman Scheme",
    description:
      "A few intro lines to this article and what it holds or signifies, just so the reader has an idea what they are about to read.",
  },

  // 3
  {
    key: 3,
    image: images[1],
    date: "02 October 2023",
    heading: "LATEST ‘HOW TO RENT’ GUIDE",
    description:
      "A few intro lines to this article and what it holds or signifies, just so the reader has an idea what they are about to read.",
  },

  // 4
  {
    key: 4,
    image: images[1],
    date: "10 December 2023",
    heading:
      "Understanding the role of Solicitors in London in Property Transactions",
    description:
      "Understand the role of Solicitors in London in property transactions. Learn why choosing local solicitors in London offers a personal touch, in depth market knowledge",
  },

  // 5
  {
    key: 5,
    image: images[0],
    date: "10 November 2023",
    heading:
      "The Building Safety Act 2022 and Establishment of the New Homes Ombudsman Scheme",
    description:
      "A few intro lines to this article and what it holds or signifies, just so the reader has an idea what they are about to read.",
  },

  // 6
  {
    key: 6,
    image: images[3],
    date: "02 October 2023",
    heading: "LATEST ‘HOW TO RENT’ GUIDE",
    description:
      "A few intro lines to this article and what it holds or signifies, just so the reader has an idea what they are about to read.",
  },

  // 7
  {
    key: 1,
    image: images[3],
    date: "10 December 2023",
    heading:
      "Understanding the role of Solicitors in London in Property Transactions",
    description:
      "Understand the role of Solicitors in London in property transactions. Learn why choosing local solicitors in London offers a personal touch, in depth market knowledge",
  },

  // 8
  {
    key: 2,
    image: images[2],
    date: "10 November 2023",
    heading:
      "The Building Safety Act 2022 and Establishment of the New Homes Ombudsman Scheme",
    description:
      "A few intro lines to this article and what it holds or signifies, just so the reader has an idea what they are about to read.",
  },

  // 9
  {
    key: 3,
    image: images[1],
    date: "02 October 2023",
    heading: "LATEST ‘HOW TO RENT’ GUIDE",
    description:
      "A few intro lines to this article and what it holds or signifies, just so the reader has an idea what they are about to read.",
  },
];

const InsightsArticles = () => {
  return (
    <Grid
      templateColumns={{
        xs: "repeat(1, 1fr)",
        lg: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
      }}
      gap={"2.5%"}
      mb={"5%"}
      pb={"5%"}
    >
      {articles.map((article) => (
        <GridItem
          as={Link}
          to={"/lumine-law/article-page"}
          key={article.key}
          width={"100%"}
          height={"100%"}
          cursor={"pointer"}
          display={"flex"}
          flexDir={"column"}
          gap={0}
          border={"1px solid black"}
          borderRadius={"8px"}
          _hover={{ opacity: "0.85" }}
          transition={"0.3s all ease"}
        >
          <Image
            src={article.image}
            height={{
              xs: "150px",
              sm: "175px",
              md: "225px",
              lg: "250px",
              xl: "275px",
              "2xl": "300px",
            }}
            width={"100%"}
            borderRadius={"8px"}
            objectFit={"cover"}
            loading="lazy"
          />
          <Box
            height={"100%"}
            width={"100%"}
            backgroundColor={"#d9d9d9"}
            py={"10px"}
            px={"10px"}
            fontFamily={"CeraRoundPro"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"flex-start"}
            gap={"5px"}
            borderRadius={"8px"}
          >
            {/* Date */}
            <Text
              textAlign={"left"}
              fontSize={{
                xs: "8px",
                md: "10px",
                "2xl": "12px",
              }}
              fontWeight={300}
            >
              {article.date}
            </Text>

            {/* Heading */}
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
              {article.heading}
            </Text>

            {/* Description */}
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
              {article.description}
            </Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default InsightsArticles;
