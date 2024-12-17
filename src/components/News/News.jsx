import {
  Text,
  Container,
  Box,
  HStack,
  Input,
  createListCollection,
  Grid,
  GridItem,
  Image,
  Flex,
} from "@chakra-ui/react";
import { InputGroup } from "../../lib/chakra-components/ui/input-group";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../../lib/chakra-components/ui/select";
import { LuSearch } from "react-icons/lu";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import BannerImg from "../../assets/news/news.png";
import { Helmet } from "react-helmet";
import AllServiceLinks from "../NavLinks/AllServiceLinks";
import AllPrices from "../NavLinks/AllPrices";
import NewsInsightsOne from "../../assets/landing/news-insights-one.png";
import NewsInsightsTwo from "../../assets/landing/news-insights-two.png";
import NewsInsightsThree from "../../assets/landing/news-insights-three.png";
import NewsInsightsFour from "../../assets/landing/news-insights-four.png";

const News = () => {
  const frameworks = createListCollection({
    items: [
      { label: "Type 1", value: "typeOne" },
      { label: "Type 2", value: "typeTwo" },
      { label: "Type 3", value: "typeThree" },
    ],
  });

  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor={"white"}
        overflow="auto"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law News</title>
        </Helmet>

        <Navbar />

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "200px",
              lg: "250px",
              xl: "300px",
              "2xl": "350px",
            }}
            bgImage={`url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontSize={{ xs: "20px", lg: "30px", xl: "36px", "2xl": "45px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              fontStyle={"italic"}
              width={"90%"}
              textAlign={"left"}
            >
              News
            </Text>
          </Box>

          {/* Main */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
            minHeight={"100%"}
          >
            {/* Main Heading Box*/}
            <Box
              width={"90%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Flex
                flexFlow={{ xs: "column", lg: "row" }}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"10px"}
              >
                {/* Search */}
                <InputGroup
                  flex="1"
                  endElement={<LuSearch />}
                  width={{ xs: "100%", lg: "80%" }}
                >
                  <Input placeholder="Search" />
                </InputGroup>

                {/* Filter */}
                <SelectRoot
                  collection={frameworks}
                  size="sm"
                  width={{ xs: "100%", lg: "20%" }}
                >
                  <SelectTrigger>
                    <SelectValueText placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {frameworks.items.map((movie) => (
                      <SelectItem
                        item={movie}
                        key={movie.value}
                        color={"#beab7c"}
                        cursor={"pointer"}
                      >
                        {movie.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Flex>
            </Box>

            {/* Grid Box*/}
            <Box
              width={"90%"}
              alignSelf={"center"}
              mb={"5%"}
              border={"1px solid black"}
              borderRadius={"8px"}
              justifySelf={"center"}
              overflow={"scroll"}
              css={{
                "&::-webkit-scrollbar": {
                  display: "none", // Optional: hides scrollbar
                },
                msOverflowStyle: "none", // Optional: hides scrollbar in IE
                scrollbarWidth: "none", // Optional: hides scrollbar in Firefox
              }}
            >
              <Box width={"90%"} justifySelf={"center"} mt={"2.5%"}>
                {/* Sub Heading */}
                <Box mb={"2.5%"}>
                  <Text
                    fontFamily={"CeraRoundPro"}
                    fontSize={"24px"}
                    fontWeight={600}
                    textAlign={"left"}
                    mb={"0.5%"}
                  >
                    News
                  </Text>

                  <Text
                    fontFamily={"CeraRoundPro"}
                    fontWeight={400}
                    fontSize={{
                      xs: "12px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    textAlign={"left"}
                  >
                    A lil paragraph explaining what these news are, whether they
                    are featured insights/articles, whatever it is, just 2 or 3
                    lines on it.
                  </Text>
                </Box>

                {/* Grid - Articles */}
                <Grid
                  templateColumns={{
                    xs: "repeat(1, 1fr)",
                    lg: "repeat(2, 1fr)",
                    xl: "repeat(3, 1fr)",
                  }}
                  gap={"2.5%"}
                  mb={"5%"}
                >
                  {/* Article 1 */}
                  <GridItem
                    width={"100%"}
                    height={"100%"}
                    cursor={"pointer"}
                    display={"flex"}
                    flexDir={"column"}
                    gap={0}
                    border={"1px solid black"}
                    borderRadius={"8px"}
                  >
                    <Image
                      src={NewsInsightsFour}
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
                        10 December 2023
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
                        Understanding the role of Solicitors in London in
                        Property Transactions
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
                        Understand the role of Solicitors in London in property
                        transactions. Learn why choosing local solicitors in
                        London offers a personal touch, in depth market
                        knowledge
                      </Text>
                    </Box>
                  </GridItem>
                  {/* Article 2 */}
                  <GridItem
                    width={"100%"}
                    cursor={"pointer"}
                    display={"flex"}
                    flexDir={"column"}
                    gap={0}
                    border={"1px solid black"}
                    borderRadius={"8px"}
                  >
                    <Image
                      src={NewsInsightsThree}
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
                        10 November 2023
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
                        The Building Safety Act 2022 and Establishment of the
                        New Homes Ombudsman Scheme
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
                        A few intro lines to this article and what it holds or
                        signifies, just so the reader has an idea what they are
                        about to read.
                      </Text>
                    </Box>
                  </GridItem>
                  {/* Article 3 */}
                  <GridItem
                    width={"100%"}
                    cursor={"pointer"}
                    display={"flex"}
                    flexDir={"column"}
                    gap={0}
                    border={"1px solid black"}
                    borderRadius={"8px"}
                  >
                    <Image
                      src={NewsInsightsTwo}
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
                        02 October 2023
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
                        LATEST ‘HOW TO RENT’ GUIDE
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
                        A few intro lines to this article and what it holds or
                        signifies, just so the reader has an idea what they are
                        about to read.
                      </Text>
                    </Box>
                  </GridItem>
                  {/* Article 4 */}
                  <GridItem
                    width={"100%"}
                    cursor={"pointer"}
                    display={"flex"}
                    flexDir={"column"}
                    gap={0}
                    border={"1px solid black"}
                    borderRadius={"8px"}
                  >
                    <Image
                      src={NewsInsightsTwo}
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
                        10 December 2023
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
                        Understanding the role of Solicitors in London in
                        Property Transactions
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
                        Understand the role of Solicitors in London in property
                        transactions. Learn why choosing local solicitors in
                        London offers a personal touch, in depth market
                        knowledge
                      </Text>
                    </Box>
                  </GridItem>
                  {/* Article 5 */}
                  <GridItem
                    width={"100%"}
                    cursor={"pointer"}
                    display={"flex"}
                    flexDir={"column"}
                    gap={0}
                    border={"1px solid black"}
                    borderRadius={"8px"}
                  >
                    <Image
                      src={NewsInsightsOne}
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
                        10 December 2023
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
                        Understanding the role of Solicitors in London in
                        Property Transactions
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
                        Understand the role of Solicitors in London in property
                        transactions. Learn why choosing local solicitors in
                        London offers a personal touch, in depth market
                        knowledge
                      </Text>
                    </Box>
                  </GridItem>
                  {/* Article 6 */}
                  <GridItem
                    width={"100%"}
                    cursor={"pointer"}
                    display={"flex"}
                    flexDir={"column"}
                    gap={0}
                    border={"1px solid black"}
                    borderRadius={"8px"}
                  >
                    <Image
                      src={NewsInsightsFour}
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
                        10 November 2023
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
                        The Building Safety Act 2022 and Establishment of the
                        New Homes Ombudsman Scheme
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
                        A few intro lines to this article and what it holds or
                        signifies, just so the reader has an idea what they are
                        about to read.
                      </Text>
                    </Box>
                  </GridItem>
                </Grid>
              </Box>
            </Box>
          </Box>

          {/* Other Services */}
          <AllServiceLinks />

          {/* Prices */}
          <AllPrices />

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default News;
