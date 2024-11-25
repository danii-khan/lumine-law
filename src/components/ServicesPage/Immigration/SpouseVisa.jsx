import {
  Text,
  Container,
  Box,
  HStack,
  VStack,
  List,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "../../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import NewsInsightsBg from "../../../assets/landing/news-insights.png";
import NewsInsightsOne from "../../../assets/landing/news-insights-one.png";
import NewsInsightsTwo from "../../../assets/landing/news-insights-two.png";
import NewsInsightsThree from "../../../assets/landing/news-insights-three.png";
import NewsInsightsFour from "../../../assets/landing/news-insights-four.png";

const SpouseVisa = () => {
  const [spouseState, setSpouseState] = useState(false);
  const [eligibilityState, setEligibilityState] = useState(false);
  const [applicationState, setApplicationState] = useState(false);
  const [decisionState, setDecisionState] = useState(false);
  const [helpState, setHelpState] = useState(false);

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
        <Navbar />

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={"200px"}
            backgroundColor={"#EECA98"}
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
              Spouse Visa
            </Text>
            <Box width={"60%"}>{/* Empty */}</Box>
          </Box>

          {/* Main */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
          >
            {/* Heading */}
            <Box width={"90%"} alignSelf={"center"} mb={"5%"} my={"2.5%"}>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={"20px"}
                textAlign={"left"}
              >
                A few lines on what a Spouse visa is.
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >
            {/* What is Spouse Visa */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderTop={"1px solid black"}
                width={"100%"}
                justifyContent={"space-between"}
                px={"15px"}
                alignItems={"center"}
                py={"10px"}
                cursor={"pointer"}
                _hover={{ backgroundColor: !spouseState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={spouseState && "black"}
                onClick={() => setSpouseState(!spouseState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={"25px"}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  What is a spouse visa?
                </Text>
                {!spouseState ? (
                  <GoPlus color={"#beab7c"} size={"2.5em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2.5em"} />
                )}
              </HStack>

              {spouseState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={"30px"}
                  mb={"10px"}
                  borderTop={"1px solid black"}
                  py={"30px"}
                >
                  <Text
                    textAlign={"left"}
                    fontSize={"20px"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    The spouse visa enables an eligible foreign national to join
                    and live with their partner in the UK if they are a British
                    citizen or settled person e.g. a person with Indefinite
                    Leave to Remain or EU Settled Status. You must apply for a
                    Spouse Visa to live in the UK with your partner. Eligible
                    applicants include those who are married, in a civil
                    partnership, or unmarried.
                  </Text>

                  <Text
                    textAlign={"left"}
                    fontSize={"20px"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Lumine Solicitors’ team of highly experienced professionals
                    is here to expertly guide you through the spouse visa
                    application process.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Eligibility Requirements */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderTop={"1px solid black"}
                width={"100%"}
                justifyContent={"space-between"}
                px={"15px"}
                alignItems={"center"}
                py={"10px"}
                cursor={"pointer"}
                _hover={{ backgroundColor: !eligibilityState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={eligibilityState && "black"}
                onClick={() => setEligibilityState(!eligibilityState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={"25px"}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  Eligibility Requirements
                </Text>
                {!eligibilityState ? (
                  <GoPlus color={"#beab7c"} size={"2.5em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2.5em"} />
                )}
              </HStack>

              {eligibilityState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={"30px"}
                  mb={"10px"}
                  borderTop={"1px solid black"}
                  py={"30px"}
                >
                  <Text
                    textAlign={"left"}
                    fontSize={"20px"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    To make a successful application for a UK spouse visa
                    through Lumine Solicitors, you will need to meet the
                    eligibility requirements, including the following:
                  </Text>

                  <List.Root
                    textAlign={"left"}
                    fontSize={"20px"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      You are in a genuine and subsisting relationship with your
                      partner
                    </List.Item>
                    <List.Item>
                      Your and your partner’s income must be at least £29,000
                      (if your application was submitted prior to 11 April 2024,
                      the old income requirement of £18,600 will apply)
                    </List.Item>
                    <List.Item>
                      Your partner fulfils the English Language requirements
                    </List.Item>
                    <List.Item>
                      You and your partner have adequate accommodation in the UK
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Application Process */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderTop={"1px solid black"}
                width={"100%"}
                justifyContent={"space-between"}
                px={"15px"}
                alignItems={"center"}
                py={"10px"}
                cursor={"pointer"}
                _hover={{ backgroundColor: !applicationState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={applicationState && "black"}
                onClick={() => setApplicationState(!applicationState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={"25px"}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  Application Process
                </Text>
                {!applicationState ? (
                  <GoPlus color={"#beab7c"} size={"2.5em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2.5em"} />
                )}
              </HStack>

              {applicationState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={"30px"}
                  mb={"10px"}
                  borderTop={"1px solid black"}
                  py={"30px"}
                >
                  <Text
                    textAlign={"left"}
                    fontSize={"20px"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    To make a successful application for a UK spouse visa
                    through Lumine Solicitors, you will need to meet the
                    eligibility requirements, including the following:
                  </Text>

                  <List.Root
                    textAlign={"left"}
                    fontSize={"20px"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      You are in a genuine and subsisting relationship with your
                      partner
                    </List.Item>
                    <List.Item>
                      Your and your partner’s income must be at least £29,000
                      (if your application was submitted prior to 11 April 2024,
                      the old income requirement of £18,600 will apply)
                    </List.Item>
                    <List.Item>
                      Your partner fulfils the English Language requirements
                    </List.Item>
                    <List.Item>
                      You and your partner have adequate accommodation in the UK
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Decision */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderTop={"1px solid black"}
                width={"100%"}
                justifyContent={"space-between"}
                px={"15px"}
                alignItems={"center"}
                py={"10px"}
                cursor={"pointer"}
                _hover={{ backgroundColor: !decisionState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={decisionState && "black"}
                onClick={() => setDecisionState(!decisionState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={"25px"}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  How long does it take to reach a decision?
                </Text>
                {!decisionState ? (
                  <GoPlus color={"#beab7c"} size={"2.5em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2.5em"} />
                )}
              </HStack>

              {decisionState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={"30px"}
                  mb={"10px"}
                  borderTop={"1px solid black"}
                  py={"30px"}
                >
                  <Text
                    textAlign={"left"}
                    fontSize={"20px"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    To make a successful application for a UK spouse visa
                    through Lumine Solicitors, you will need to meet the
                    eligibility requirements, including the following:
                  </Text>

                  <List.Root
                    textAlign={"left"}
                    fontSize={"20px"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      You are in a genuine and subsisting relationship with your
                      partner
                    </List.Item>
                    <List.Item>
                      Your and your partner’s income must be at least £29,000
                      (if your application was submitted prior to 11 April 2024,
                      the old income requirement of £18,600 will apply)
                    </List.Item>
                    <List.Item>
                      Your partner fulfils the English Language requirements
                    </List.Item>
                    <List.Item>
                      You and your partner have adequate accommodation in the UK
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Help */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderY={"1px solid black"}
                width={"100%"}
                justifyContent={"space-between"}
                px={"15px"}
                alignItems={"center"}
                py={"10px"}
                cursor={"pointer"}
                _hover={{ backgroundColor: !helpState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={helpState && "black"}
                onClick={() => setHelpState(!helpState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={"25px"}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  How can Lumine Solicitors help?
                </Text>
                {!helpState ? (
                  <GoPlus color={"#beab7c"} size={"2.5em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2.5em"} />
                )}
              </HStack>

              {helpState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={"30px"}
                  mb={"10px"}
                  borderY={"1px solid black"}
                  py={"30px"}
                >
                  <Text
                    textAlign={"left"}
                    fontSize={"20px"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    To make a successful application for a UK spouse visa
                    through Lumine Solicitors, you will need to meet the
                    eligibility requirements, including the following:
                  </Text>

                  <List.Root
                    textAlign={"left"}
                    fontSize={"20px"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      You are in a genuine and subsisting relationship with your
                      partner
                    </List.Item>
                    <List.Item>
                      Your and your partner’s income must be at least £29,000
                      (if your application was submitted prior to 11 April 2024,
                      the old income requirement of £18,600 will apply)
                    </List.Item>
                    <List.Item>
                      Your partner fulfils the English Language requirements
                    </List.Item>
                    <List.Item>
                      You and your partner have adequate accommodation in the UK
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>
          </VStack>

          {/* Pricing TODO when design complete */}
          <Box
            width={"90%"}
            height={"300px"}
            border={"1px solid black"}
            borderRadius={"10px"}
            justifySelf={"center"}
            mb={"50px"}
          ></Box>

          {/* Other Services */}
          <Box mb="50px">
            <HStack justifyContent={"center"} alignItems={"center"}>
              <Text
                color={"black"}
                fontSize={"35px"}
                fontWeight={500}
                fontStyle={"italic"}
                mb={"50px"}
              >
                Other Services
              </Text>
              <Box width={"75%"}></Box>
            </HStack>
            <Box
              width={"100%"}
              display={"flex"}
              flexFlow={"column"}
              alignItems={"center"}
              color={"black"}
            >
              <Grid
                width={"95%"}
                templateColumns={"repeat(4, 1fr)"}
                gap={"50px"}
                justifyItems={"center"}
                alignItems={"center"}
              >
                {/* Col 1 */}
                <GridItem
                  width={"100%"}
                  height={"200px"}
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
                  <Link
                    to={"/all-services/immigration"}
                    style={{ textDecoration: "none" }}
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
                  </Link>
                </GridItem>

                {/* Col 2 */}
                <GridItem
                  width={"100%"}
                  height={"200px"}
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
                  <Link
                    to={"/all-services/immigration"}
                    style={{ textDecoration: "none" }}
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
                  </Link>
                </GridItem>

                {/* Col 3 */}
                <GridItem
                  width={"100%"}
                  height={"200px"}
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
                  <Link
                    to={"/all-services/immigration"}
                    style={{ textDecoration: "none" }}
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
                  </Link>
                </GridItem>

                {/* Col 4 */}
                <GridItem
                  width={"100%"}
                  height={"200px"}
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
                  <Link
                    to={"/all-services/immigration"}
                    style={{ textDecoration: "none" }}
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
                  </Link>
                </GridItem>
              </Grid>
            </Box>
          </Box>

          {/* News and Insights */}
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
            mb={"50px"}
          >
            <HStack
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
            >
              <Text
                color={"black"}
                fontSize={"35px"}
                fontWeight={500}
                fontStyle={"italic"}
              >
                News and Insights
              </Text>
              <Box width={"75%"}></Box>
            </HStack>
            <HStack
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"50px"}
            >
              <Image
                src={NewsInsightsOne}
                height={"100%"}
                width={"15%"}
                objectFit={"cover"}
              />
              <Image
                src={NewsInsightsTwo}
                height={"100%"}
                width={"15%"}
                objectFit={"cover"}
              />
              <Image
                src={NewsInsightsThree}
                height={"100%"}
                width={"15%"}
                objectFit={"cover"}
              />
              <Image
                src={NewsInsightsFour}
                height={"100%"}
                width={"15%"}
                objectFit={"cover"}
              />
              <Image
                src={NewsInsightsOne}
                height={"100%"}
                width={"15%"}
                objectFit={"cover"}
              />
            </HStack>
          </Box>

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default SpouseVisa;
