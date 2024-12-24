import React, { Suspense } from "react";
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
  Flex,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ImmigrationImg from "../../assets/pricing/property-prices.webp";
import ResidentialImg from "../../assets/pricing/debt-recovery.webp";
import BannerImg from "../../assets/pricing/immigration.webp";
import { Helmet } from "react-helmet";
import UKWorkVisa from "./Immigration/UKWorkVisa";
import TimeFrameSection from "./Immigration/TimeFrameSection";
import DisbursementsSection from "./Immigration/DisbursementsSection";
import StudentVisa from "./Immigration/StudentVisa";
import ProofOfResidence from "./Immigration/ProofOfResidence";
import NatBrit from "./Immigration/NatBrit";
import VisitVisa from "./Immigration/VisitVisa";
import ImmiApps from "./Immigration/ImmiApps";
import AppealAdmin from "./Immigration/AppealAdmin";
import AllServiceLinks from "../NavLinks/AllServiceLinks";
import AllNewsInsights from "../NavLinks/AllNewsInsights";

const ImmigrationPrices = () => {
  const [purchaseState, setPurchaseState] = useState(false);
  const [disbursementsState, setDisbursementsState] = useState(false);
  const [serviceState, setServiceState] = useState(false);
  const [leaseholdState, setLeaseholdState] = useState(false);
  const [houseState, setHouseState] = useState(false);
  const [feeState, setFeeState] = useState(false);
  const [residentialState, setResidentialState] = useState(false);
  const [likelyState, setLikelyState] = useState(false);
  const [additionalState, setAdditionalState] = useState(false);
  const [timescaleState, setTimescaleState] = useState(false);
  const [nameState, setNameState] = useState(false);
  const [appState, setAppState] = useState(false);
  const [adminState, setAdminState] = useState(false);
  const [judicialState, setJudicialState] = useState(false);

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
          <title>Lumine Law Immigration Prices </title>
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
            _loading={"eager"}
          >
            <Text
              fontSize={{ xs: "20px", lg: "30px", xl: "36px", "2xl": "45px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
            >
              Immigration Prices
            </Text>
          </Box>

          {/* Main */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
          >
            {/* Heading */}
            <Box
              width={"90%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
              >
                A few lines on Immigration
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >
            {/* Our fees in relation to different categories of visas */}
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
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !purchaseState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={purchaseState && "black"}
                onClick={() => setPurchaseState(!purchaseState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  Our Fees in Relation to Different Categories of Visas
                </Text>
                {!purchaseState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {purchaseState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Our exact fees will depend on the circumstances of your
                    particular case. You will need to pay us extra legal fees in
                    relation to any additional family members. We will determine
                    our fees depending on the following circumstances:
                  </Text>

                  <List.Root
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>The type of application</List.Item>
                    <List.Item>
                      The amount of supporting evidence that we need to consider
                    </List.Item>
                    <List.Item>Which language(s) you speak</List.Item>
                    <List.Item>
                      Whether you are applying with dependants
                    </List.Item>
                  </List.Root>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={600}
                    fontFamily={"CeraRoundPro"}
                  >
                    Our fees include:
                  </Text>

                  <List.Root
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      Discussing the circumstances of your case in detail,
                      confirming the most appropriate application for you to
                      make and advising you on what other options may be
                      available to you
                    </List.Item>
                    <List.Item>
                      Giving you advice about the requirements of the
                      Immigration Rules and whether you meet the criteria
                    </List.Item>
                    <List.Item>
                      If you do not fulfil certain criteria, whether this can be
                      overcome and how
                    </List.Item>
                    <List.Item>
                      Considering the supporting evidence you have provided
                    </List.Item>
                    <List.Item>
                      Where necessary, helping you obtain further evidence (such
                      as medical records and bank statements), including
                      considering statements of any witnesses
                    </List.Item>
                    <List.Item>
                      Preparing your application and submitting it on your
                      behalf
                    </List.Item>
                    <List.Item>
                      Booking the super priority service depending on the visa
                      application category
                    </List.Item>
                    <List.Item>
                      Attendance at a Home Office interview. If the Home Office
                      ask you to attend an interview, we will give you clear
                      advice (and discuss the possibility of us attending with
                      you) at the appropriate time
                    </List.Item>
                    <List.Item>
                      Giving you advice about the outcome of the application and
                      any further steps you need to take
                    </List.Item>
                    <List.Item>
                      Considering the number of documents, whether they need to
                      be translated, whether anything is missing and how long it
                      will take for you or us to obtain the missing documents
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Disbursements (not included in the pricing set out below) */}
            <DisbursementsSection
              isOpen={disbursementsState}
              onToggle={() => setDisbursementsState(!disbursementsState)}
            />

            {/* Time frame for immigration applications: */}
            <TimeFrameSection
              isOpen={serviceState}
              onToggle={() => setServiceState(!serviceState)}
            />

            {/* UK work visas: */}
            <UKWorkVisa
              isOpen={leaseholdState}
              onToggle={() => setLeaseholdState(!leaseholdState)}
            />

            {/* Student visas/tier 4: */}
            <StudentVisa
              isOpen={houseState}
              onToggle={() => setHouseState(!houseState)}
            />

            {/* Proof of residence for EU citizens */}
            <ProofOfResidence
              isOpen={feeState}
              onToggle={() => setFeeState(!feeState)}
            />

            {/* Long residence applications: */}
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
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !residentialState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={residentialState && "black"}
                onClick={() => setResidentialState(!residentialState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  Long Residence Applications:
                </Text>
                {!residentialState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {residentialState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Box
                    width={"100%"}
                    display={"flex"}
                    flexFlow={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontFamily={
                      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                    }
                  >
                    {/* Main - 1 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      backgroundColor="#d9edf7"
                      borderY="1px solid #bfbfbf"
                      fontSize={{ xs: "14px", lg: "16px" }}
                      fontWeight="600"
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        ILR – 10 Years Long Residence (Same Day Visa Service)
                      </GridItem>
                      <GridItem justifySelf="start" textAlign="left">
                        £800 - £1,500
                      </GridItem>
                    </Grid>

                    {/* 2 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Extension Of Stay – 10 Years Long Residence
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £800 - £1,500
                      </GridItem>
                    </Grid>
                  </Box>
                </VStack>
              )}
            </Box>

            {/* Naturalisation and British citizenship: */}
            <NatBrit
              isOpen={likelyState}
              onToggle={() => setLikelyState(!likelyState)}
            />

            {/* Passport and travel document applications: */}
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
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !additionalState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={additionalState && "black"}
                onClick={() => setAdditionalState(!additionalState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  Passport and Travel Document Applications:
                </Text>
                {!additionalState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {additionalState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Box
                    width={"100%"}
                    display={"flex"}
                    flexFlow={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontFamily={
                      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                    }
                  >
                    {/* Main - 1 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      backgroundColor="#d9edf7"
                      borderY="1px solid #bfbfbf"
                      fontSize={{ xs: "14px", lg: "16px" }}
                      fontWeight="600"
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Application For British Passport
                      </GridItem>
                      <GridItem justifySelf="start" textAlign="left">
                        £700
                      </GridItem>
                    </Grid>

                    {/* 2 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Refugee Travel Document
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £700
                      </GridItem>
                    </Grid>

                    {/* 3 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Stateless Person Travel Document
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £700
                      </GridItem>
                    </Grid>

                    {/* 4 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Certificate Of Travel
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £700
                      </GridItem>
                    </Grid>

                    {/* 5 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        One Way Travel Document
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £700
                      </GridItem>
                    </Grid>
                  </Box>
                </VStack>
              )}
            </Box>

            {/* Visitor visa: */}
            <VisitVisa
              isOpen={timescaleState}
              onToggle={() => setTimescaleState(!timescaleState)}
            />

            {/* Turkish Citizens: */}
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
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !nameState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={nameState && "black"}
                onClick={() => setNameState(!nameState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  Turkish Citizens:
                </Text>
                {!nameState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {nameState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Box
                    width={"100%"}
                    display={"flex"}
                    flexFlow={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontFamily={
                      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                    }
                  >
                    {/* Main - 1 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      backgroundColor="#d9edf7"
                      borderY="1px solid #bfbfbf"
                      fontSize={{ xs: "14px", lg: "16px" }}
                      fontWeight="600"
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Entry Clearance (Visa) As A Turkish ECAA Businessperson
                      </GridItem>
                      <GridItem justifySelf="start" textAlign="left">
                        £1,500 - £2,500
                      </GridItem>
                    </Grid>

                    {/* 2 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Switching Into Turkish ECAA Businessperson Category
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500 - £2,500
                      </GridItem>
                    </Grid>

                    {/* 3 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Extension Of Stay As A Turkish ECAA Businessperson
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500 - £2,500
                      </GridItem>
                    </Grid>

                    {/* 4 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        ILR As Turkish ECAA Businessperson
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500 - £2,500
                      </GridItem>
                    </Grid>

                    {/* 5 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Dependents of Turkish ECAA Businesspersons
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500 - £2,500
                      </GridItem>
                    </Grid>

                    {/* 6 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Turkish ECAA Workers
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500 - £2,500
                      </GridItem>
                    </Grid>

                    {/* 7 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Dependents of Turkish ECAA Worker
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £800
                      </GridItem>
                    </Grid>
                  </Box>
                </VStack>
              )}
            </Box>

            {/* Immigrations Apps */}
            <ImmiApps
              isOpen={appState}
              onToggle={() => setAppState(!appState)}
            />

            {/* Immigration appeal and admin review: */}
            <AppealAdmin
              isOpen={adminState}
              onToggle={() => setAdminState(!adminState)}
            />

            {/* Judicial review in the upper tribunal: */}
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
                borderY={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !judicialState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={judicialState && "black"}
                onClick={() => setJudicialState(!judicialState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#beab7c"}
                >
                  Judicial Review in the Upper Tribunal:
                </Text>
                {!judicialState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {judicialState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Box
                    width={"100%"}
                    display={"flex"}
                    flexFlow={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontFamily={
                      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                    }
                  >
                    {/* Main - 1 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      backgroundColor="#d9edf7"
                      borderY="1px solid #bfbfbf"
                      fontSize={{ xs: "14px", lg: "16px" }}
                      fontWeight="600"
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Pre Action Protocol For Judicial Review Against The Home
                        Office, UKBA
                      </GridItem>
                      <GridItem justifySelf="start" textAlign="left">
                        £700 - £1,500
                      </GridItem>
                    </Grid>

                    {/* 2 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Paper Application To Upper Tribunal For Permission To
                        Apply For Judicial Review (JR)
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500 - £3,000
                      </GridItem>
                    </Grid>

                    {/* 3 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Renewal Of An Application For Permission To Apply For
                        Judicial Review (JR) Against The Home Office, UKBA
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500
                      </GridItem>
                    </Grid>

                    {/* 4 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Judicial Review Against The Home Office, UKVI Following
                        Grant Of Permission To Apply For Judicial Review (JR)
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £3,000 - £4,500
                      </GridItem>
                    </Grid>

                    {/* 5 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Emergency Injunction To Stop Removal From The UK
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £2,000 - £3,000
                      </GridItem>
                    </Grid>
                  </Box>
                </VStack>
              )}
            </Box>
          </VStack>

          {/* Other Prices */}
          <Box mb="50px">
            {/* Header */}
            <Box
              width={"100%"}
              display={"flex"}
              flexFlow={"column"}
              color={"black"}
            >
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
                  Other Prices
                </Text>
              </Box>
            </Box>

            {/* List */}
            <Box
              width={"100%"}
              display={"flex"}
              flexFlow={"column"}
              alignItems={"center"}
              color={"black"}
            >
              <Grid
                width={"90%"}
                templateColumns={{ xs: "repeat(2, 2fr)", lg: "repeat(2, 2fr)" }}
                gap={{
                  xs: "25px",
                  sm: "30px",
                  md: "35px",
                  lg: "40px",
                  xl: "45px",
                  "2xl": "50px",
                }}
                justifyItems={"center"}
                alignItems={"center"}
              >
                {/* Col 1 */}
                <GridItem
                  width={"100%"}
                  height={{
                    xs: "175px",
                    sm: "175px",
                    md: "175px",
                    lg: "200px",
                    xl: "225px",
                    "2xl": "250px",
                  }}
                  padding={{ xs: "10px 10px", lg: "10px 20px" }}
                  border={"1px solid black"}
                  borderRadius={"8px"}
                  cursor={"pointer"}
                  _hover={{
                    opacity: "0.8",
                    transition: "all 0.5s ease",
                  }}
                  bgImage={`url(${ImmigrationImg})`}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                  _loading={"lazy"}
                >
                  <Link
                    to={"/lumine-law/prices/property-prices"}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      height={"100%"}
                      display={"flex"}
                      flexFlow={"column"}
                      justifyContent={"space-between"}
                      alignItems={"flex-start"}
                      gap={"10px"}
                    >
                      <Text
                        fontSize={{
                          xs: "14px",
                          sm: "14px",
                          md: "16px",
                          lg: "18px",
                          xl: "20px",
                          "2xl": "22px",
                        }}
                        fontFamily={"CeraRoundPro"}
                        fontWeight={500}
                        textAlign={"left"}
                        color={"#ffffff"}
                      >
                        Property Prices
                      </Text>
                      <HiOutlineArrowLongRight color={"#ffffff"} size={"2em"} />
                    </Box>
                  </Link>
                </GridItem>

                {/* Col 2 */}
                <GridItem
                  width={"100%"}
                  height={{
                    xs: "175px",
                    sm: "175px",
                    md: "175px",
                    lg: "200px",
                    xl: "225px",
                    "2xl": "250px",
                  }}
                  padding={{ xs: "10px 10px", lg: "10px 20px" }}
                  border={"1px solid black"}
                  borderRadius={"8px"}
                  cursor={"pointer"}
                  _hover={{
                    opacity: "0.8",
                    transition: "all 0.5s ease",
                  }}
                  bgImage={`url(${ResidentialImg})`}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                  _loading={"lazy"}
                >
                  <Link
                    to={"/lumine-law/prices/debt-recovery"}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      height={"100%"}
                      display={"flex"}
                      flexFlow={"column"}
                      justifyContent={"space-between"}
                      alignItems={"flex-start"}
                      gap={"10px"}
                    >
                      <Text
                        fontSize={{
                          xs: "14px",
                          sm: "14px",
                          md: "16px",
                          lg: "18px",
                          xl: "20px",
                          "2xl": "22px",
                        }}
                        fontFamily={"CeraRoundPro"}
                        fontWeight={500}
                        textAlign={"left"}
                        color={"#ffffff"}
                      >
                        Debt Recovery Prices
                      </Text>
                      <HiOutlineArrowLongRight color={"#ffffff"} size={"2em"} />
                    </Box>
                  </Link>
                </GridItem>
              </Grid>
            </Box>
          </Box>

          {/* All Services */}
          <Suspense fallback={<div>Loading All Services ...</div>}>
            <AllServiceLinks />
          </Suspense>

          {/* News and Insights */}
          <Suspense fallback={<div>Loading All News and Insights ...</div>}>
            <AllNewsInsights />
          </Suspense>

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default ImmigrationPrices;
