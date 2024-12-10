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

const NatBrit = ({ isOpen, onToggle }) => {
  // Data for disbursements table
  const visaData = [
    {
      type: "Naturalisation As A British Citizen",
      cost: "£800",
    },
    {
      type: "Registration Of A Child As British Citizen – MN1 Application",
      cost: "£1,000 - £1,500",
    },
    {
      type: "Registration Of A Child As British Citizen Who Was Born In The UK And Has Lived In The UK For 10 Years",
      cost: "£1,000 - £1,500",
    },
    { type: "UKM Application", cost: "£1,500 - £2,000" },
    {
      type: "Registration As British Citizen By British Subject",
      cost: "£1,500 - £2,000",
    },
    {
      type: "Registration As British Citizen By British Protected Person",
      cost: "£1,500 - £2,000",
    },
    {
      type: "Registration As British Citizen By BOC",
      cost: "£1,500 - £2,000",
    },
    {
      type: "British Citizenship As BNO",
      cost: "£1,500 - £2,000",
    },
    {
      type: "Registration As British Citizen Under The British Nationality (Hong Kong) Act 1997",
      cost: "£1,500 - £2,000",
    },
    {
      type: "Registration As A British Citizen By BOTC",
      cost: "£1,500 - £2,000",
    },
    {
      type: "Registration As A British Citizen By A BOTC With A Connection With Gibraltar",
      cost: "£1,500 - £2,000",
    },
    {
      type: "Registration As A British Overseas Territories Citizen If You Had Previously Given Up Citizenship",
      cost: "£1,500 - £2,000",
    },
    {
      type: "Registration As A British Citizen By A Stateless Person",
      cost: "£1,500 - £2,000",
    },
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
        Registration As A British Citizen If You Had Previously Given Up British
        Citizenship
      </GridItem>
      <GridItem justifySelf="start" textAlign="left">
        £1,500 - £2,500
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
          Naturalisation and British Citizenship:
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

export default NatBrit;
