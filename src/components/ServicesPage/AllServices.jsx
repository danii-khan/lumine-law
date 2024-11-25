import {
  Text,
  Container,
  Box,
  HStack,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BannerImg from "../../assets/services/all/banner.png";
import "../../styles/fonts.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const AllServices = () => {
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
        display="flex" // Added
        flexDirection="column" // Added
      >
        <Navbar />

        <Box
          width="100%"
          flex="1" // Added to allow content to grow
          p={0}
          m={0}
          pt={"50px"}
        >
          {/* Banner */}
          <Box
            width={"100%"}
            height={"200px"}
            bgImage={`url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Text
              fontSize={"45px"}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              fontStyle={"italic"}
            >
              Services
            </Text>
            <Box width={"60%"}>{/* Empty */}</Box>
          </Box>

          {/* Main */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            // justifyContent={"center"}
            // alignItems={"center"}
            color={"black"}
          >
            {/* Heading */}
            <HStack
              justifyContent={"space-around"}
              alignItems={"center"}
              my={"2.5%"}
            >
              <Text
                fontFamily={"CeraRoundPro"}
                fontSize={"35px"}
                fontWeight={500}
              >
                Our Legal Services
              </Text>
              <Box width={"70%"}>{/* Empty */}</Box>
            </HStack>

            {/* Main Para */}
            <Box width={"95%"} alignSelf={"center"} mb={"5%"}>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={"20px"}
                textAlign={"left"}
              >
                Our legal services are highly recommended by our clients and
                other professionals such as barristers and other solicitors. Our
                immigration and litigation departments fight to win. Our
                property department is focused on achieving the best and fastest
                outcome for our clients. We explain complicated legal issues
                clearly and offer optimum solutions for each client by providing
                advice which is versatile and effective. Known for our integrity
                and commitment to our clients, we are pleased to say that 90% of
                our clients come to us through recommendations.
              </Text>
            </Box>
          </Box>

          {/* Service Grid */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            alignItems={"center"}
            color={"black"}
            mb="50px"
          >
            <Grid
              width={"70%"}
              templateColumns={"repeat(3, 1fr)"}
              templateRows={"repeat(3, 1fr)"}
              gap={"50px"}
              justifyItems={"center"}
              alignItems={"center"}
            >
              {/* Row 1 */} {/* Col 1 */}
              <GridItem
                width={"100%"}
                height={"300px"}
                padding={"10px 20px"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                _hover={{
                  color: "#beab7c",
                  backgroundColor: "black",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  height={"100%"}
                  display={"flex"}
                  flexFlow={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={"10px"}
                >
                  <Text
                    fontSize={"24px"}
                    fontFamily={"CeraRoundPro"}
                    fontWeight={500}
                    textAlign={"left"}
                  >
                    Immigration
                  </Text>
                  <VStack
                    width={"100%"}
                    height={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                  >
                    <Text
                      fontSize={"18px"}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={400}
                    >
                      A lil para about what this service is{" "}
                    </Text>
                    <HiOutlineArrowLongRight size={"3em"} />
                  </VStack>
                </Box>
              </GridItem>
              {/* Col 2 */}
              <GridItem
                width={"100%"}
                height={"300px"}
                padding={"10px 20px"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                _hover={{
                  color: "#beab7c",
                  backgroundColor: "black",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  height={"100%"}
                  display={"flex"}
                  flexFlow={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={"10px"}
                >
                  <Text
                    fontSize={"24px"}
                    fontFamily={"CeraRoundPro"}
                    fontWeight={500}
                    textAlign={"left"}
                  >
                    Residential & Commercial Property
                  </Text>
                  <VStack
                    width={"100%"}
                    height={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                  >
                    <Text
                      fontSize={"18px"}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={400}
                    >
                      A lil para about what this service is{" "}
                    </Text>
                    <HiOutlineArrowLongRight size={"3em"} />
                  </VStack>
                </Box>
              </GridItem>
              {/* Col 3 */}
              <GridItem
                width={"100%"}
                height={"300px"}
                padding={"10px 20px"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                _hover={{
                  color: "#beab7c",
                  backgroundColor: "black",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  height={"100%"}
                  display={"flex"}
                  flexFlow={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={"10px"}
                >
                  <Text
                    fontSize={"24px"}
                    fontFamily={"CeraRoundPro"}
                    fontWeight={500}
                    textAlign={"left"}
                  >
                    Dispute & Resolution Civil Litigation
                  </Text>
                  <VStack
                    width={"100%"}
                    height={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                  >
                    <Text
                      fontSize={"18px"}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={400}
                    >
                      A lil para about what this service is{" "}
                    </Text>
                    <HiOutlineArrowLongRight size={"3em"} />
                  </VStack>
                </Box>
              </GridItem>
              {/* Row 2 */} {/* Col 1 */}
              <GridItem
                width={"100%"}
                height={"300px"}
                padding={"10px 20px"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                _hover={{
                  color: "#beab7c",
                  backgroundColor: "black",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  height={"100%"}
                  display={"flex"}
                  flexFlow={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={"10px"}
                >
                  <Text
                    fontSize={"24px"}
                    fontFamily={"CeraRoundPro"}
                    fontWeight={500}
                    textAlign={"left"}
                  >
                    Landlord & Tenant Disputes
                  </Text>
                  <VStack
                    width={"100%"}
                    height={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                  >
                    <Text
                      fontSize={"18px"}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={400}
                    >
                      A lil para about what this service is{" "}
                    </Text>
                    <HiOutlineArrowLongRight size={"3em"} />
                  </VStack>
                </Box>
              </GridItem>
              {/* Col 2 */}
              <GridItem
                width={"100%"}
                height={"300px"}
                padding={"10px 20px"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                _hover={{
                  color: "#beab7c",
                  backgroundColor: "black",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  height={"100%"}
                  display={"flex"}
                  flexFlow={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={"10px"}
                >
                  <Text
                    fontSize={"24px"}
                    fontFamily={"CeraRoundPro"}
                    fontWeight={500}
                    textAlign={"left"}
                  >
                    Family & Children
                  </Text>
                  <VStack
                    width={"100%"}
                    height={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                  >
                    <Text
                      fontSize={"18px"}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={400}
                    >
                      A lil para about what this service is{" "}
                    </Text>
                    <HiOutlineArrowLongRight size={"3em"} />
                  </VStack>
                </Box>
              </GridItem>
              {/* Col 3 */}
              <GridItem
                width={"100%"}
                height={"300px"}
                padding={"10px 20px"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                _hover={{
                  color: "#beab7c",
                  backgroundColor: "black",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  height={"100%"}
                  display={"flex"}
                  flexFlow={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={"10px"}
                >
                  <Text
                    fontSize={"24px"}
                    fontFamily={"CeraRoundPro"}
                    fontWeight={500}
                    textAlign={"left"}
                  >
                    New Service
                  </Text>
                  <VStack
                    width={"100%"}
                    height={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                  >
                    <Text
                      fontSize={"18px"}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={400}
                    >
                      A lil para about what this service is{" "}
                    </Text>
                    <HiOutlineArrowLongRight size={"3em"} />
                  </VStack>
                </Box>
              </GridItem>
              {/* Row 4 */} {/* Col 1 */}
              <GridItem>{/* empty */}</GridItem>
              {/* Col 2 */}
              <GridItem
                width={"100%"}
                height={"300px"}
                padding={"10px 20px"}
                border={"1px solid black"}
                borderRadius={"8px"}
                cursor={"pointer"}
                _hover={{
                  color: "#beab7c",
                  backgroundColor: "black",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  height={"100%"}
                  display={"flex"}
                  flexFlow={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={"10px"}
                >
                  <Text
                    fontSize={"24px"}
                    fontFamily={"CeraRoundPro"}
                    fontWeight={500}
                    textAlign={"left"}
                  >
                    New Service
                  </Text>
                  <VStack
                    width={"100%"}
                    height={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                  >
                    <Text
                      fontSize={"18px"}
                      fontFamily={"CeraRoundPro"}
                      fontWeight={400}
                    >
                      A lil para about what this service is{" "}
                    </Text>
                    <HiOutlineArrowLongRight size={"3em"} />
                  </VStack>
                </Box>
              </GridItem>
            </Grid>
          </Box>

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default AllServices;
