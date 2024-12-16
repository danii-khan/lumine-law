import React from "react";
import { Text, Box, HStack, VStack, Grid, GridItem } from "@chakra-ui/react";
import "../../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

const UKWorkVisa = ({ isOpen, onToggle }) => {
  // Data for visa types and costs
  const visaData = [
    { type: "ILR Tier 1 General", cost: "£2,000 - £3,500" },
    { type: "Entry Clearance As Innovator Visa", cost: "£4,000 - £5,000" },
    { type: "Switching into Innovator Visa", cost: "£4,000 - £5,000" },
    { type: "Tier 1 Entrepreneur Visa Extension", cost: "£2,500 - £3,500" },
    { type: "ILR As Tier 1 Entrepreneur", cost: "£2,000- £3,500" },
    { type: "Dependants of Tier 1 Entrepreneur", cost: "£1,000" },
    {
      type: "Entry Clearance As Tier 1 Exceptional Talent",
      cost: "£2,500 - £3,500",
    },
    {
      type: "Switching Into Tier 1 Exceptional Talent",
      cost: "£2,000 - £3,500",
    },
    {
      type: "Extension Of Stay As Tier 1 Exceptional Talent",
      cost: "£1,800 - £3,000",
    },
    { type: "ILR As Tier 1 Exceptional Talent", cost: "£2,500 - £3,500" },
    { type: "Dependants Of Tier 1 Exceptional Talent Migrant", cost: "£800" },
    {
      type: "Switching Into Tier 1 Graduate Entrepreneur",
      cost: "£1,700 - £2,500",
    },
    {
      type: "Tier 1 Graduate Entrepreneur Visa Extension",
      cost: "£1,700 - £2,500",
    },
    { type: "Dependants Of Tier 1 Graduate Entrepreneur", cost: "£800" },
    { type: "Entry Clearance As Tier 1 Investor", cost: "£3,000 - £4,000" },
    { type: "Switching Into Tier 1 Investor Visa", cost: "£3,000 - £4,000" },
    { type: "Tier 1 Investor Visa Extension", cost: "£3,000 - £4,000" },
    { type: "ILR As Tier 1 Investor", cost: "£3,500 - £5,000" },
    {
      type: "Entry Clearance As Tier 2 General Migrant",
      cost: "£1,500 - £2,000",
    },
    { type: "Switching Into Tier 2 General", cost: "£1,500 - £2,000" },
    { type: "Tier 2 General Extension", cost: "£1,500 - £2,000" },
    { type: "ILR Tier 2 General", cost: "£1,700 - £2,500" },
    { type: "Dependants Of Tier 2 General Migrant", cost: "£800" },
    {
      type: "Entry Clearance As Tier 2 Minister Of Religion",
      cost: "£1,000 - £1,200",
    },
    {
      type: "Switching Into Tier 2 Minister Of Religion",
      cost: "£1,500 - £2,500",
    },
    {
      type: "Tier 2 Minister Of Religion Visa Extension",
      cost: "£1,500 - £2,500",
    },
    { type: "ILR Tier 2 Minister Of Religion", cost: "£1,500 - £2,500" },
    { type: "Dependants Of Tier 2 Minister Of Religion", cost: "£1,000" },
    { type: "Entry Clearance As Tier 2 Sportsperson", cost: "£1,500" },
    { type: "Switching Into Tier 2 Sportsperson", cost: "£1,500" },
    { type: "Tier 2 Sportsperson Visa Extension", cost: "£1,000 - £1,500" },
    { type: "ILR Tier 2 Sportsperson", cost: "£1,000 - £1,700" },
    { type: "Dependants Of Tier 2 Sportsperson", cost: "£800" },
    { type: "Entry Clearance As Tier 2 ICT", cost: "£2,000 - £3,000" },
    { type: "Switching Into Tier 2 ICT", cost: "£1,500 - £2,000" },
    { type: "Tier 2 ICT Extension", cost: "£1,500" },
    { type: "ILR Tier 2 ICT", cost: "£2,000 - £3,000" },
    { type: "Dependants Of Tier 2 ICT Migrant", cost: "£1,000" },
    { type: "Entry Clearance As Domestic Worker", cost: "£2,000 - £3,000" },
    { type: "Domestic Worker Visa Extension", cost: "£1,500 - £2,500" },
    { type: "ILR Domestic Worker", cost: "£2,500 - £3,500" },
    { type: "Dependants Of Domestic Worker", cost: "£1,000" },
    {
      type: "Entry Clearance As A Sole Representative Of Overseas Business",
      cost: "£3,000 - £4,500",
    },
    { type: "Sole Representative Visa Extension", cost: "£2,000 - £4,000" },
    { type: "ILR As Sole Representative", cost: "£3,000 - £4,500" },
    { type: "Dependants of Sole Representatives", cost: "£1,000 - £2,000" },
    {
      type: "Dependants Of A Person With UK Ancestry Visa",
      cost: "£2,000 - £3,000",
    },
    { type: "ILR UK Ancestry", cost: "£2,000 - £3,000" },
    { type: "UK Ancestry Visa Extension", cost: "£1,500" },
    { type: "Entry Clearance – UK Ancestry Visa", cost: "£2,500 - £3,500" },
    {
      type: "Entry Clearance As Tier 5 Charity Worker",
      cost: "£1,000 - £1,800",
    },
    { type: "Tier 5 Charity Workers Visa Extension", cost: "£1,000 - £1,800" },
    { type: "Dependants Of Tier 5 Charity Worker", cost: "£1,000" },
    { type: "Entry Clearance As Tier 5 Creative & Sporting", cost: "£2,000" },
    {
      type: "Switching Into Tier 5 Creative & Sporting",
      cost: "£1,500 - £2,500",
    },
    { type: "Tier 5 Creative & Sporting Extension", cost: "£1,500 - £2,500" },
    { type: "Dependants Of Tier 5 Creative & Sporting", cost: "£1,000" },
    {
      type: "Entry Clearance As Tier 5 Religious Worker",
      cost: "£1,500 - £2,500",
    },
    {
      type: "Tier 5 Religious Workers Visa Extension",
      cost: "£1,500 - £2,500",
    },
    {
      type: "Switching Into Tier 5 Government Authorised Exchange",
      cost: "£1,500 - £2,500",
    },
    {
      type: "Tier 5 Government Authorised Exchange Visa Extension",
      cost: "£1,500 - £2,500",
    },
    { type: "Tier 5 Youth Mobility Scheme (YMS)", cost: "£1,500 - £2,500" },
    {
      type: "Switching Into Tier 5 International Agreement",
      cost: "£1,500 - £2,500",
    },
    {
      type: "Tier 5 International Agreement Visa Extension",
      cost: "£1,500 - £2,500",
    },
    { type: "ILR – Tier 5 International Agreement", cost: "£2,000 - £2,500" },
  ];

  const TableRow = ({ type, cost, isAlternate }) => (
    <Grid
      width="100%"
      templateColumns="3fr 1fr"
      py="20px"
      px="10px"
      // borderBottom="1px solid #bfbfbf"
      backgroundColor={isAlternate ? "#f3f3f3" : "#ffffff"}
      fontSize={{ xs: "12px", lg: "14px" }}
      fontWeight="500"
      _hover={{ backgroundColor: isAlternate ? "#ebe8e8" : "#f3f3f3" }}
    >
      <GridItem justifySelf="start" textAlign="left">
        {type}
      </GridItem>
      <GridItem
        justifySelf={{ xs: "center", md: "start" }}
        textAlign={{ xs: "center", md: "left" }}
      >
        {cost}
      </GridItem>
    </Grid>
  );

  const TableHeader = () => (
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
        Type of Visa
      </GridItem>
      <GridItem justifySelf="start" textAlign="left">
        Our Cost
      </GridItem>
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
          UK Work Visas:
        </Text>
        {!isOpen ? (
          <GoPlus color="#beab7c" size="2em" />
        ) : (
          <AiOutlineMinus color="#beab7c" size="2em" />
        )}
      </HStack>

      {isOpen && (
        <VStack
          width="100%"
          spacing={0}
          borderTop="1px solid #adacac"
          py={{ xs: "15px", md: "30px" }}
        >
          <TableHeader />
          {visaData.map((visa, index) => (
            <TableRow
              key={index}
              type={visa.type}
              cost={visa.cost}
              isAlternate={index % 2 !== 0}
            />
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default UKWorkVisa;
