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

const AppealAdmin = ({ isOpen, onToggle }) => {
  // Data for residence table
  const visaData = [
    {
      type: "Admin Review Against Refusal Of An In-Country Refusal By The Home Office",
      cost: "£800 - £1,500",
    },
    {
      type: "Entry Clearance Appeal Stage 1 (Pre-Hearing Notice)",
      cost: "£1,000",
    },
    {
      type: "Entry Clearance Appeal Stage 2 (Post-Hearing Notice)",
      cost: "£1,500 - £2,000",
    },
    {
      type: "In-Country Immigration Appeal",
      cost: "£1,500 - £2,000",
    },
    {
      type: "Asylum Appeal",
      cost: "£1,500 - £2,000",
    },
    { type: "Deportation Appeal", cost: "£2,500 - £3,500" },
    {
      type: "Application To 1st Tier Tribunal For Permission To Appeal To Upper Tribunal",
      cost: "£1,000",
    },
    {
      type: "Application To Upper Tribunal For Permission To Appeal To Upper Tribunal",
      cost: "£1,000",
    },
    {
      type: "Appeal To The Upper Tribunal Following Grant Of Permission To Appeal",
      cost: "£1,500 - £2,000",
    },
    {
      type: "Application To The Upper Tribunal For Permission To Appeal To The Court Of Appeal",
      cost: "£1,500 - £2,000",
    },
    {
      type: "Application To The Court Of Appeal For Permission To Appeal To Court Of Appeal",
      cost: "£1,500 - £2,000",
    },
    {
      type: "Appeal To The Court Of Appeal",
      cost: "£3,000 - £3,500",
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
        Administrative Review Against Refusal Of Entry Clearance As PBS Migrant
      </GridItem>
      <GridItem justifySelf="start" textAlign="left">
        £800 - £1,500
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
          Immigration Appeal and Admin Review:
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

export default AppealAdmin;
