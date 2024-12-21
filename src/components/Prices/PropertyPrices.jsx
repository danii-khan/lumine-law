import {
  Text,
  Container,
  Box,
  HStack,
  VStack,
  List,
  Grid,
  GridItem,
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
import ImmigrationImg from "../../assets/pricing/debt-recovery.webp";
import ResidentialImg from "../../assets/pricing/immigration.webp";
import BannerImg from "../../assets/pricing/property-prices.webp";
import { Helmet } from "react-helmet";
import AllServiceLinks from "../NavLinks/AllServiceLinks";
import AllNewsInsights from "../NavLinks/AllNewsInsights";

const PropertyPrices = () => {
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
          <title>Lumine Law Property Prices </title>
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
            backgroundColor={"#60657e"}
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
              Property Prices
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
                A few lines on Property Prices
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >
            {/* Purchase of residential property freehold and leasehold */}
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
                  Purchase of Residential Property Freehold and Leasehold
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
                    textAlign={"left"}
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
                    Our fees cover all the work required to complete the
                    purchase of your new home, including dealing with
                    registration at the Land Registry and dealing with the
                    payment of Stamp Duty Land Tax (Stamp Duty) if the property
                    is in England*
                  </Text>

                  <List.Root
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
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      VAT will be added to the Legal Fees and some disbursements
                      at a rate of 20%
                    </List.Item>
                  </List.Root>

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
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Disbursements are costs related to your matter that are
                    payable to third parties, such as search fees. We handle the
                    payment of the disbursements on your behalf to ensure a
                    smoother process. There are certain disbursements which will
                    be set out in the individual lease relating to the Property.
                    The disbursements which we anticipate will apply are set out
                    separately below. This list is not exhaustive and other
                    disbursements may apply depending on the terms of the lease.
                    We will update you on the specific fees upon receipt and
                    review of the lease from the seller’s solicitors.
                  </Text>

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
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      backgroundColor={"#d9edf7"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "14px",
                        lg: "16px",
                      }}
                      fontWeight={"600"}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Legal fees:
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £550 -£1200 (for properties between £100,000 and
                        £1,000,000)
                      </GridItem>
                      <GridItem justifySelf={"end"}> VAT@ 20%</GridItem>
                    </Grid>

                    {/* 2 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Fees for acting on behalf of a mortgage lender
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £150.00
                      </GridItem>
                      <GridItem justifySelf={"end"}> VAT@ 20%</GridItem>
                    </Grid>

                    {/* 3 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Search fees:
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £350 - £450 approx
                      </GridItem>
                      <GridItem justifySelf={"end"}> </GridItem>
                    </Grid>

                    {/* 4 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        HM Land Registry fee:
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        This depends on the purchase price of your property,
                        this amount can be calculated using HMLR’s website:{" "}
                        <Link style={{ textDecoration: "underline" }}>
                          http://landregistry.data.gov.uk/fees-calculator.html{" "}
                        </Link>
                      </GridItem>
                      <GridItem justifySelf={"end"}></GridItem>
                    </Grid>

                    {/* 5 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Stamp Duty Land Tax
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        This will depend upon the purchase price of your
                        property. You can calculate the amount due by using
                        HMRC’s website :
                        <Link style={{ textDecoration: "underline" }}>
                          https://www.tax.service
                          https://www.tax.service.gov.uk/calculate-stamp-duty-land-tax/#/intro
                        </Link>
                      </GridItem>
                      <GridItem justifySelf={"end"}></GridItem>
                    </Grid>

                    {/* 6 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Electronic money transfer admin fee:
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £25
                      </GridItem>
                      <GridItem justifySelf={"end"}></GridItem>
                    </Grid>

                    {/* 7 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Bankruptcy search
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £2 per person
                      </GridItem>
                      <GridItem justifySelf={"end"}></GridItem>
                    </Grid>

                    {/* 8 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderTop={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Land Registry Priority Search
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £3
                      </GridItem>
                      <GridItem justifySelf={"end"}></GridItem>
                    </Grid>
                  </Box>
                </VStack>
              )}
            </Box>

            {/* Further anticipated disbursements */}
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
                _hover={{ backgroundColor: !disbursementsState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={disbursementsState && "black"}
                onClick={() => setDisbursementsState(!disbursementsState)}
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
                  Further Anticipated Disbursements
                </Text>
                {!disbursementsState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {disbursementsState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <List.Root
                    textAlign={"left"}
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
                      Notice of Transfer fee- This fee if chargeable is set out
                      in the lease. Often the fee is between £50-£80. However,
                      it varies from lease to lease
                    </List.Item>
                    <List.Item>
                      Notice of Charge fee- (if the property is to be
                      mortgaged)- This fee is set out in the lease. Often the
                      fee is between £50-£80. However, it varies from lease to
                      lease
                    </List.Item>
                    <List.Item>
                      Deed of Covenant fee-This fee is provided by the
                      management company for the property and can be difficult
                      to estimate
                    </List.Item>
                    <List.Item>
                      Certificate of Compliance fee- To be confirmed upon
                      receipt of the lease
                    </List.Item>
                    <List.Item>
                      In Leasehold matters we may also need to pay a fee to the
                      Landlords Solicitors or Agents in respect of providing
                      replies to Standard Leasehold Enquiries of the Landlord.
                      This cost varies from one property to the next. We will
                      advise you of this cost, however this usually ranges
                      between £100 – £250 plus VAT
                    </List.Item>
                    <List.Item>
                      You should note that for all new clients of the firm, we
                      will conduct an electronic ID search for Anti Money
                      Laundering compliance. The administrative fee for
                      arranging these checks is approximately £15 plus VAT
                    </List.Item>
                  </List.Root>

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
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    These fees vary from property to property and can on
                    occasion be significantly more than the ranges given above.
                    We can give you an accurate figure once we have sight of
                    your specific documents.
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
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    You should also be aware that ground rent and service charge
                    are likely to apply throughout your ownership of the
                    property. We will confirm the ground rent and the
                    anticipated service charge as soon as we receive this
                    information.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* As part of our professional service we will: */}
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
                _hover={{ backgroundColor: !serviceState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={serviceState && "black"}
                onClick={() => setServiceState(!serviceState)}
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
                  As Part of Our Professional Service we will:
                </Text>
                {!serviceState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {serviceState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Flex flexFlow={{ xs: "column", md: "row" }} gap={"10px"}>
                    {/* 1st col */}
                    <List.Root
                      textAlign={"left"}
                      fontSize={{
                        xs: "12px",
                        xl: "14px",
                        "2xl": "16px",
                      }}
                      fontWeight={400}
                      fontFamily={"CeraRoundPro"}
                    >
                      <List.Item>
                        Take your instructions and give you initial advice
                        depending on the terms of your purchase
                      </List.Item>
                      <List.Item>
                        Check finances are in place and arrangements have been
                        made to fund the purchase, we will contact the lender’s
                        solicitors if needed
                      </List.Item>
                      <List.Item>
                        Receive contract documentation and advise you on these
                      </List.Item>
                      <List.Item>Carry out the necessary searches</List.Item>
                      <List.Item>
                        Acquire further planning documentation if required
                      </List.Item>
                      <List.Item>
                        Make any necessary enquiries of the seller’s solicitor
                      </List.Item>
                      <List.Item>
                        Report to you and provide you advice on all documents
                        and information received
                      </List.Item>
                      <List.Item>
                        Go through conditions of any mortgage offers
                      </List.Item>
                      <List.Item>
                        Send the final contract to you for signature
                      </List.Item>
                    </List.Root>

                    {/* 2nd col */}
                    <List.Root
                      textAlign={"left"}
                      fontSize={{
                        xs: "12px",
                        xl: "14px",
                        "2xl": "16px",
                      }}
                      fontWeight={400}
                      fontFamily={"CeraRoundPro"}
                    >
                      <List.Item>Draft a Transfer Deed</List.Item>
                      <List.Item>
                        Agree a completion date, exchange contracts and notify
                        you that this has happened
                      </List.Item>
                      <List.Item>
                        Arrange for all monies needed to be received from the
                        lender and you
                      </List.Item>
                      <List.Item>Complete purchase</List.Item>
                      <List.Item>
                        Deal with payment of Stamp Duty/Land Tax
                      </List.Item>
                      <List.Item>
                        Deal with the application for registration at Land
                        Registry
                      </List.Item>
                      <List.Item>
                        Send you updated registration documents once
                        registration at Land Registry has been concluded
                      </List.Item>
                    </List.Root>
                  </Flex>
                </VStack>
              )}
            </Box>

            {/* If the property is leasehold we will also : */}
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
                _hover={{ backgroundColor: !leaseholdState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={leaseholdState && "black"}
                onClick={() => setLeaseholdState(!leaseholdState)}
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
                  If the Property is Leasehold we will also :
                </Text>
                {!leaseholdState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {leaseholdState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <List.Root
                    textAlign={"left"}
                    fontSize={{
                      xs: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      Advise you on service charge, ground rent and any
                      arrangements with managing agents/management companies
                      involved
                    </List.Item>
                    <List.Item>
                      Make enquiries in relation to any licence to assign
                      required from the Landlord
                    </List.Item>
                    <List.Item>
                      Review your lease and report to you on the terms
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* How long will my house purchase take? */}
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
                _hover={{ backgroundColor: !houseState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={houseState && "black"}
                onClick={() => setHouseState(!houseState)}
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
                  How long will my House Purchase take?
                </Text>
                {!houseState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {houseState && (
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
                    textAlign={"left"}
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
                    How long it will take from your offer being accepted until
                    you can move in to your house will depend on a number of
                    factors. The average process takes between 5-8 weeks. It can
                    be quicker or slower, depending on factors such as any the
                    parties in a chain.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Our fee assumes that: */}
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
                _hover={{ backgroundColor: !feeState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={feeState && "black"}
                onClick={() => setFeeState(!feeState)}
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
                  Our Fee assumes that:
                </Text>
                {!feeState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {feeState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <List.Root
                    as={"ol"}
                    textAlign={"left"}
                    fontSize={{
                      xs: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      This is a standard transaction and that no unforeseen
                      matters arise including for example (but not limited to) a
                      defect in title which requires remedying prior to
                      completion or the preparation of additional documents
                      ancillary to the main transaction
                    </List.Item>
                    <List.Item>
                      This is the assignment of an existing lease and is not the
                      grant of a new lease
                    </List.Item>
                    <List.Item>
                      The transaction is concluded in a timely manner and no
                      unforeseen complication arise
                    </List.Item>
                    <List.Item>
                      All parties to the transaction are co-operative and there
                      is no unreasonable delay from third parties providing
                      documentation
                    </List.Item>
                    <List.Item>
                      No indemnity policies are required. Additional
                      disbursements may apply if indemnity policies are
                      required.
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Residential sale freehold and leasehold estimated fee */}
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
                  Residential Sale Freehold and Leasehold Estimated Fee
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
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Our fee for dealing with a normal conveyancing property sale
                    is:
                  </Text>

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
                      width={"100%"}
                      templateColumns={"1fr 1fr 1fr"}
                      backgroundColor={"#d9edf7"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "14px",
                        lg: "16px",
                      }}
                      fontWeight={"600"}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Sale Price
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        Our Legal Fees (Freehold)
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        {" "}
                        Our Legal Fees (Leasehold)
                      </GridItem>
                    </Grid>

                    {/* 2 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        £0 - £250,000
                      </GridItem>
                      <GridItem
                        ustifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £650
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        {" "}
                        £700
                      </GridItem>
                    </Grid>

                    {/* 3 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        £251,000 - £500,000
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £750
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        {" "}
                        £800{" "}
                      </GridItem>
                    </Grid>

                    {/* 4 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        £501,000 - £999,000
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £950
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        {" "}
                        £1,000
                      </GridItem>
                    </Grid>

                    {/* 5 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        £1,000,000+
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        0.15% - 0.175%
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        {" "}
                        0.15% - 0.175%
                      </GridItem>
                    </Grid>
                  </Box>

                  <Box
                    border={"1px solid black"}
                    width={"100%"}
                    my={"15px"}
                  ></Box>

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
                    fontFamily={"CeraRoundPro"}
                  >
                    Please note VAT will be added to our legal fees
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
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    If there are charges/ mortgage over the property you are
                    selling we charge an additional fee of £125 plus VAT per
                    mortgage assuming the mortgage is with a high street lender.
                    This includes:
                  </Text>

                  <List.Root
                    textAlign={"left"}
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
                    <List.Item>Obtaining a redemption statement</List.Item>
                    <List.Item>
                      Transferring the redemption amount to the Lender on
                      completion
                    </List.Item>
                    <List.Item>
                      Obtaining discharge documents and sending to the Buyer’s
                      solicitors following completion
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Likely disbursements */}
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
                _hover={{ backgroundColor: !likelyState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={likelyState && "black"}
                onClick={() => setLikelyState(!likelyState)}
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
                  Likely Disbursements
                </Text>
                {!likelyState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {likelyState && (
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
                    textAlign={"left"}
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
                    (These are costs related to your matter that are payable to
                    third parties. We handle the payment of the disbursements on
                    your behalf to ensure a smoother process)
                  </Text>

                  <List.Root
                    textAlign={"left"}
                    fontSize={{
                      xs: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      Land Registry Title Documents (Freehold) £6 each (no VAT)
                    </List.Item>
                    <List.Item>
                      Land Registry Title Documents (Leasehold) £6 (no VAT)
                    </List.Item>
                    <List.Item>
                      Copy Lease £3.00 if it is available electronically or £12
                      if the land registry need to manually process this
                    </List.Item>
                    <List.Item>
                      Acquiring any planning permission documents – price
                      depends on the individual local authority
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Potential additional disbursements */}
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
                  Potential Additional Disbursements
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
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    In Leasehold matters we may also need to pay a fee to the
                    Landlords Solicitors or Agents in respect of providing
                    replies to Standard Leasehold Enquiries of the Landlord.
                    This cost varies from one property to the next, depending on
                    the fees confirmed in the Lease/ agreed with the landlord.
                    We will advise you of this cost, however this usually ranges
                    between £100 – £250 plus VAT.
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
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    You should note that these disbursements can vary from
                    property to property and can on occasion be significantly
                    more than the ranges given above. We can give you an
                    accurate indication of costs once we have had sight of the
                    specific documents. Other disbursements may apply depending
                    on the terms of your Lease.
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
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    You should note that for all new clients of the firm, we
                    will conduct an electronic ID search for Anti Money
                    Laundering compliance. The administrative fee for arranging
                    these checks is £15 plus VAT. If we are arranging the
                    transfer of funds electronically, we will charge a fee for
                    our time involved in arranging each transfer, for example
                    sending the proceeds of sale to you on completion, the cost
                    of this and the amount we pay to the bank for the transfer
                    is £25 plus VAT per transfer.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Average timescales */}
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
                _hover={{ backgroundColor: !timescaleState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={timescaleState && "black"}
                onClick={() => setTimescaleState(!timescaleState)}
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
                  Average Timescales
                </Text>
                {!timescaleState ? (
                  <GoPlus color={"#beab7c"} size={"2em"} />
                ) : (
                  <AiOutlineMinus color={"#beab7c"} size={"2em"} />
                )}
              </HStack>

              {timescaleState && (
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
                    textAlign={"left"}
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
                    How long it will take from you accepting the buyer(s) offer
                    to completing the sale will depend on various factors. The
                    average process takes between 5 to 7 weeks to exchange, and
                    a further one or two weeks before completion, dependent on
                    all parties involved being agreeable to the completion date.
                    The process can also be quicker or slower, depending on any
                    parties in the chain. Leasehold matters often take longer
                    due to the additional parties involved in the transaction,
                    including landlords/ managing agents/ companies.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Change Name */}
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
                  As Part of Our Professional Service we will:{" "}
                  <span style={{ color: "red", fontWeight: 900 }}>
                    Change Name
                  </span>
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
                  <Flex flexFlow={{ xs: "column", md: "row" }} gap={"10px"}>
                    {/* 1st col */}
                    <List.Root
                      textAlign={"left"}
                      fontSize={{
                        xs: "12px",
                        xl: "14px",
                        "2xl": "16px",
                      }}
                      fontWeight={400}
                      fontFamily={"CeraRoundPro"}
                    >
                      <List.Item>
                        Take initial instructions from you and provide you any
                        initial advice, according to the terms of your sale
                      </List.Item>
                      <List.Item>
                        Acquire title documents from the Land Registry and
                        prepare the contract pack
                      </List.Item>
                      <List.Item>
                        Provide you guidance if needed on the initial property
                        information forms for the property you are selling
                      </List.Item>
                      <List.Item>
                        Draft your sale contract and issue to the buyer’s
                        solicitors
                      </List.Item>
                      <List.Item>
                        Take your instructions and respond to any enquiries
                        raised by your Buyer’s solicitors
                      </List.Item>
                      <List.Item>
                        Send you the final contract and arrange for you to sign
                        in readiness for exchange of contracts
                      </List.Item>
                      <List.Item>Agree a completion date</List.Item>
                    </List.Root>

                    {/* 2nd col */}
                    <List.Root
                      textAlign={"left"}
                      fontSize={{
                        xs: "12px",
                        xl: "14px",
                        "2xl": "16px",
                      }}
                      fontWeight={400}
                      fontFamily={"CeraRoundPro"}
                    >
                      <List.Item>
                        Exchange Contracts and notify you that exchange has
                        taken place
                      </List.Item>
                      <List.Item>
                        Approve the Transfer Deed from the Buyer’s solicitors
                        and send to you for signature and witnessing
                      </List.Item>
                      <List.Item>
                        Request your Estate Agents Commission invoice for
                        settlement upon completion
                      </List.Item>
                      <List.Item>
                        Complete your transaction and send you the proceeds of
                        sale once all fees and balances due have been settled
                      </List.Item>
                      <List.Item>
                        Send executed transfer to the Buyer’s solicitors
                      </List.Item>
                      <List.Item>
                        In relation to leasehold properties we will also
                      </List.Item>
                      <List.Item>
                        Obtain a copy of your Lease from the Land Registry/ you
                      </List.Item>
                      <List.Item>
                        Advise on service charge and ground rent as per the
                        lease
                      </List.Item>
                      <List.Item>
                        Contact the Landlord/ Managing Agent for replies to
                        Standard Leasehold Enquiries and raise any specific
                        enquiries raised by the Buyer’s solicitors to the
                        Landlord or their agents
                      </List.Item>
                      <List.Item>
                        Advise you of any additional costs required pursuant to
                        the Lease in respect of landlord/ managing agents/
                        management company involved, as appropriate
                      </List.Item>
                    </List.Root>
                  </Flex>
                </VStack>
              )}
            </Box>
          </VStack>

          {/* Other Prices */}
          <Box mb="50px">
            {/* Header */}
            <HStack justifyContent={"center"} alignItems={"center"}>
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
              >
                Other Prices
              </Text>
              <Box
                width={{
                  xs: "55%",
                  sm: "55%",
                  md: "60%",
                  lg: "65%",
                  xl: "70%",
                  "2xl": "75%",
                }}
              ></Box>
            </HStack>

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
                >
                  <Link
                    to={"/lumine-law/prices/immigration-prices"}
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
                        Immigration Prices
                      </Text>
                      <HiOutlineArrowLongRight color={"#ffffff"} size={"2em"} />
                    </Box>
                  </Link>
                </GridItem>
              </Grid>
            </Box>
          </Box>

          {/* All Services */}
          <AllServiceLinks />

          {/* News and Insights */}
          <AllNewsInsights />

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default PropertyPrices;
