import {
  Text,
  Container,
  Box,
  Input,
  createListCollection,
  Flex,
  VStack,
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
import BannerImg from "../../assets/insights/insights.png";
import { Helmet } from "react-helmet";
import AllServiceLinks from "../NavLinks/AllServiceLinks";
import AllPrices from "../NavLinks/AllPrices";
import MainArticle from "../../assets/insights/main-article.png";
import InsightsArticles from "./InsightsArticles";
import { Link } from "react-router-dom";

const Insights = () => {
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
          <title>Lumine Law Insights</title>
        </Helmet>

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
              Insights
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
            <Box width={"90%"} alignSelf={"center"} mt={"5%"}>
              <VStack
                justifyContent={"center"}
                alignItems={"center"}
                gap={"10px"}
                width={"100%"}
              >
                {/* Search */}
                <InputGroup flex="1" endElement={<LuSearch />} width={"100%"}>
                  <Input placeholder="Search" />
                </InputGroup>

                <Flex
                  flexDir={{ xs: "column", lg: "row" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={"100%"}
                  gap={"20px"}
                >
                  {/* Filter */}
                  <SelectRoot
                    collection={frameworks}
                    size="sm"
                    width={{ xs: "100%", lg: "25%" }}
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

                  {/* Service */}
                  <SelectRoot
                    collection={frameworks}
                    size="sm"
                    width={{ xs: "100%", lg: "25%" }}
                  >
                    <SelectTrigger>
                      <SelectValueText placeholder="Service" />
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

                  {/* Region */}
                  <SelectRoot
                    collection={frameworks}
                    size="sm"
                    width={{ xs: "100%", lg: "25%" }}
                  >
                    <SelectTrigger>
                      <SelectValueText placeholder="Region" />
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

                  {/* Date */}
                  <SelectRoot
                    collection={frameworks}
                    size="sm"
                    width={{ xs: "100%", lg: "25%" }}
                  >
                    <SelectTrigger>
                      <SelectValueText placeholder="DD-MM-YY" />
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
              </VStack>
            </Box>

            {/* Main Article */}
            <Box
              as={Link}
              to={"/lumine-law/article-page"}
              width={"100%"}
              height={{
                xs: "200px",
                lg: "250px",
                xl: "300px",
                "2xl": "350px",
              }}
              bgImage={`url(${MainArticle})`}
              bgSize={"cover"}
              bgPos={"center"}
              bgRepeat={"no-repeat"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              my={{ xs: "5%", md: "2.5%" }}
              _hover={{ opacity: "0.9" }}
              transition={"0.3s all ease"}
              cursor={"pointer"}
            >
              <Text
                fontSize={{ xs: "20px", lg: "30px", xl: "36px", "2xl": "45px" }}
                fontWeight={600}
                fontFamily={"CeraRoundPro"}
                fontStyle={"italic"}
                width={"90%"}
                textAlign={"left"}
                backgroundColor={"rgba(0, 0, 0, 0.4)"}
                borderRadius={"8px"}
                color={"white"}
              >
                Understanding the role of Solicitors in London in Property
                Transactions
              </Text>
            </Box>

            {/* Grid Box*/}
            <Box
              display={"grid"}
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
              <Box
                width={"90%"}
                justifySelf={"center"}
                alignSelf={"center"}
                mt={"2.5%"}
              >
                {/* Sub Heading */}
                <Box mb={"2.5%"}>
                  <Text
                    fontFamily={"CeraRoundPro"}
                    fontSize={"24px"}
                    fontWeight={600}
                    textAlign={"left"}
                    mb={"0.5%"}
                  >
                    Insights
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
                    A lil paragraph explaining what these insights are, whether
                    they are featured insights/articles, whatever it is, just 2
                    or 3 lines on it.
                  </Text>
                </Box>

                {/* Grid - Articles */}
                <InsightsArticles />
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

export default Insights;
