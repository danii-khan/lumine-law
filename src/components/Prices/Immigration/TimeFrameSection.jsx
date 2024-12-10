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

const TimeFrameSection = ({ isOpen, onToggle }) => {
  // Data for visa timeframes and costs
  const timeframeData = [
    { type: "Fiance(e) Visa UK", cost: "£1,000" },
    { type: "Proposed Civil Partner Visa UK", cost: "£1,000" },
    { type: "Entry clearance as a spouse", cost: "£1,000" },
    { type: "Switching into a spouse Visa UK", cost: "£1,000" },
    { type: "Extension of stay as a spouse", cost: "£700" },
    { type: "ILR Spouse Visa", cost: "£1,000 - £1,500" },
    { type: "Entry Clearance as a Civil Partner", cost: "£1,500 - £2,000" },
    { type: "Switching into a Civil Partner Visa.", cost: "£1000 - £2,500" },
    { type: "Extension of stay as a Civil Partner", cost: "£1,000 - £2,500" },
    {
      type: "Independent expert reports e.g. medical experts",
      cost: "(£1,500.00 – £5,000.00)",
    },
    { type: "ILR Civil Partner", cost: "£1,000 - £2,500" },
    {
      type: "Entry Clearance as an unmarried partner",
      cost: "£1,000 - £2,500",
    },
    {
      type: "Switching into an unmarried partner Visa",
      cost: "£1,000 - £2,500",
    },
    { type: "Extension of stay as an unmarried partner", cost: "£1,000" },
    { type: "ILR Unmarried Partner", cost: "£1,500 - £2,500" },
    { type: "Entry clearance as a same sex partner", cost: "£1,000 - £2,500" },
    { type: "Switching into same sex partner Visa", cost: "£1,000 - £2,500" },
    { type: "Extension of a same sex partner", cost: "£1,000 - £2,500" },
    { type: "ILR same sex partner", cost: "£1,000 - £2,500" },
    { type: "ILR – Victim Of Domestic Violence", cost: "£1,500 - £2,500" },
    { type: "ILR – Bereaved Partner", cost: "£1,000 - £2,500" },
  ];

  const TableRow = ({ type, cost, isAlternate }) => (
    <Grid
      width="100%"
      templateColumns="3fr 1fr"
      py="20px"
      px="10px"
      borderY="1px solid #bfbfbf"
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
          Time Frame for Immigration Applications:
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
            textAlign="left"
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
            The length of time that it will take to complete the work will
            depend on the circumstances in your case. Such as:
          </Text>

          <List.Root
            textAlign="left"
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
              The amount of supporting evidence that we need to consider
            </List.Item>
            <List.Item>
              Whether anything is missing and how long it will take to obtain
              the missing documents
            </List.Item>
            <List.Item>Which language(s) you speak</List.Item>
            <List.Item>
              Whether you are applying with other dependants
            </List.Item>
          </List.Root>

          <Text
            textAlign="left"
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
            We cannot guarantee how long the Home Office will take to process
            your application. The current processing times can be viewed at the
            Home Office Website. All applications are likely to vary and of
            course, we can give you a more accurate estimate once we have more
            information about your specific case.
          </Text>

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
                Type of Application
              </GridItem>
              <GridItem justifySelf="start" textAlign="left">
                Our Cost
              </GridItem>
            </Grid>

            {/* Table rows */}
            {timeframeData.map((item, index) => (
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

export default TimeFrameSection;
