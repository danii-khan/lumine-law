import {
  Text,
  Container,
  Box,
  Input,
  createListCollection,
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
import NewsArticles from "./NewsArticles";

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
              display={"grid"}
              alignSelf={"center"}
              justifyContent={"center"}
              alignItems={"center"}
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

                {/* Grid Articles */}
                <NewsArticles />
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
