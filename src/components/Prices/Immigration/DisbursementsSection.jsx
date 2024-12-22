import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  List,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

const DisbursementsSection = ({ isOpen, onToggle }) => {
  // Data for disbursements table
  const disbursementData = [
    { type: "Annual per person fee", cost: "£400" },
    {
      type: "Home Office fees and Super Priority Fees",
      cost: "Please refer to the Home Office Web Site",
    },
    { type: "UKVCAS FEES", cost: "Please refer to the UKVCAS Web Site" },
    { type: "Tribunal fees", cost: "" },
    { type: "Paper appeal", cost: "£80" },
    { type: "Oral appeal", cost: "£140" },
    {
      type: "Translation fees: variable depending on language and number of words.",
      cost: "",
    },
    {
      type: "Interpreters fees: These fees are difficult to estimate, and we will have to obtain a quote from a third-party interpreter who we will use. Sometimes only a couple of hours is needed with an interpreter, other applications may need 10 or 15 hours. The number of hours needed will vary depending on the complexities of the case. Clients do not always need to use an interpreter of our choosing and may bring a friend or associate to come and help interpret",
      cost: "",
      fullWidth: true,
    },
    {
      type: "Independent expert reports e.g. medical experts - these are not required in many cases, we will let you know as soon as possible if we consider an expert report is necessary.",
      cost: "(£1,500.00 – £5,000.00)",
    },
  ];

  const TableRow = ({ type, cost, isAlternate, fullWidth = false }) => (
    <Grid
      width="100%"
      templateColumns={fullWidth ? "1fr" : "3fr 1fr"}
      py="20px"
      px="10px"
      borderY="1px solid #bfbfbf"
      backgroundColor={isAlternate ? "#f3f3f3" : "#ffffff"}
      fontSize={{ xs: "12px", lg: "14px" }}
      fontWeight={fullWidth ? "600" : "500"}
      _hover={{ backgroundColor: isAlternate ? "#ebe8e8" : "#f3f3f3" }}
    >
      <GridItem justifySelf="start" textAlign="left">
        {type}
      </GridItem>
      {!fullWidth && (
        <GridItem
          justifySelf={{ xs: "center", md: "start" }}
          textAlign={{ xs: "center", md: "left" }}
        >
          {cost}
        </GridItem>
      )}
    </Grid>
  );

  return (
    <Box
      display="flex"
      flexDir="column"
      color="black"
      width="90%"
      justifyContent="center"
      alignItems="center"
    >
      <HStack
        borderTop="1px solid #adacac"
        width="100%"
        justifyContent="space-between"
        px={{
          xs: "8px",
          sm: "10px",
          md: "12px",
          lg: "13px",
          xl: "14px",
          "2xl": "15px",
        }}
        py={{
          xs: "4px",
          sm: "6px",
          md: "7px",
          lg: "8px",
          xl: "9px",
          "2xl": "10px",
        }}
        cursor="pointer"
        _hover={{ backgroundColor: !isOpen && "black" }}
        transition="all 0.3s ease"
        backgroundColor={isOpen ? "black" : undefined}
        onClick={onToggle}
      >
        <Text
          textAlign="left"
          fontSize={{
            xs: "14px",
            sm: "14px",
            md: "16px",
            lg: "16px",
            xl: "18px",
            "2xl": "20px",
          }}
          fontWeight={500}
          fontFamily="CeraRoundPro"
          color="#beab7c"
        >
          Disbursements (not included in the pricing set out below)
        </Text>
        {!isOpen ? (
          <GoPlus color="#beab7c" size="2em" />
        ) : (
          <AiOutlineMinus color="#beab7c" size="2em" />
        )}
      </HStack>

      {isOpen && (
        <VStack
          justifyContent="center"
          alignItems="flex-start"
          gap={{ xs: "20px", md: "30px" }}
          mb={{ xs: "4px", md: "10px" }}
          borderTop="1px solid #adacac"
          py={{ xs: "15px", md: "30px" }}
          width="100%"
        >
          <Text
            textAlign="justify"
            fontSize={{
              xs: "12px",
              sm: "12px",
              md: "14px",
              lg: "14px",
              xl: "16px",
              "2xl": "18px",
            }}
            fontWeight={400}
            fontFamily="CeraRoundPro"
          >
            Disbursements are costs related to your matter that are payable to
            third parties, such as visa fees. We handle the payment of any
            disbursements on your behalf to ensure a smoother process. These are
            not included in the fees quoted above as they vary depending on what
            work is required.
          </Text>

          <Text
            textAlign="justify"
            fontSize={{
              xs: "12px",
              sm: "12px",
              md: "14px",
              lg: "14px",
              xl: "16px",
              "2xl": "18px",
            }}
            fontWeight={600}
            fontFamily="CeraRoundPro"
          >
            Our quoted fees do not include:
          </Text>

          <List.Root
            textAlign="justify"
            fontSize={{
              xs: "12px",
              sm: "12px",
              md: "14px",
              lg: "14px",
              xl: "16px",
              "2xl": "18px",
            }}
            fontWeight={400}
            fontFamily="CeraRoundPro"
          >
            <List.Item>
              VAT applies in cases where people already have Leave to Remain in
              the UK. This should be added to our figures at 20%.
            </List.Item>
            <List.Item>
              Our fees quoted do not include fees for work if the Home Office
              refuses your application/dependant's application and our advice
              and assistance is required in relation to any appeal or
              Administrative Review.
            </List.Item>
          </List.Root>

          <Box
            width="100%"
            display="flex"
            flexFlow="column"
            justifyContent="center"
            alignItems="center"
            fontFamily="HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
          >
            {/* Table header */}
            <Grid
              width="100%"
              templateColumns="3fr 1fr"
              backgroundColor="#d9edf7"
              py="20px"
              borderY="1px solid #bfbfbf"
              px="10px"
              fontSize={{ xs: "14px", lg: "16px" }}
              fontWeight="600"
            >
              <GridItem justifySelf="start" textAlign="left">
                Immigration Health Surcharge is to be paid in every application
                (except applications for Indefinite Leave to remain or
                Naturalisation)
              </GridItem>
              <GridItem></GridItem>
            </Grid>

            {/* Rows */}
            {disbursementData.map((item, index) => (
              <TableRow
                key={index}
                type={item.type}
                cost={item.cost}
                isAlternate={index % 2 !== 0}
              />
            ))}
          </Box>
        </VStack>
      )}
    </Box>
  );
};

export default DisbursementsSection;
