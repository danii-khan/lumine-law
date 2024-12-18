import { Text, Box, Grid, GridItem } from "@chakra-ui/react";
import "../../styles/fonts.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ImmigrationImg from "../../assets/pricing/immigration.png";
import PropertyImg from "../../assets/pricing/property-prices.png";
import DebtImg from "../../assets/pricing/debt-recovery.png";

// Price card data
const priceCards = [
  {
    title: "Property Prices",
    path: "/lumine-law/prices/property-prices",
    image: PropertyImg,
  },
  {
    title: "Debt Recovery Prices",
    path: "/lumine-law/prices/debt-recovery",
    image: DebtImg,
  },
  {
    title: "Immigration Prices",
    path: "/lumine-law/prices/immigration-prices",
    image: ImmigrationImg,
  },
];

// Reusable price card component
const PriceCard = ({ item }) => (
  <GridItem
    width="100%"
    height={{
      xs: "175px",
      sm: "175px",
      md: "175px",
      lg: "200px",
      xl: "225px",
      "2xl": "250px",
    }}
    padding={{ xs: "10px 10px", lg: "10px 20px" }}
    border="1px solid black"
    borderRadius="8px"
    cursor="pointer"
    _hover={{
      opacity: "0.8",
      transition: "all 0.5s ease",
    }}
    bgImage={`url(${item.image})`}
    bgPos="center"
    bgSize="cover"
    bgRepeat="no-repeat"
  >
    <Link to={item.path} style={{ textDecoration: "none" }}>
      <Box
        height="100%"
        display="flex"
        flexFlow="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        gap="10px"
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
          fontFamily="CeraRoundPro"
          fontWeight={500}
          textAlign="left"
          color="#ffffff"
        >
          {item.title}
        </Text>
        <HiOutlineArrowLongRight color="#ffffff" size="2em" />
      </Box>
    </Link>
  </GridItem>
);

const AllPrices = () => {
  return (
    <Box mb="50px" _loading="lazy">
      {/* Header */}
      <Box width="100%" display="flex" flexFlow="column" color="black">
        <Box width="90%" alignSelf="center">
          <Text
            color="black"
            fontSize={{
              xs: "20px",
              sm: "20px",
              md: "24px",
              lg: "26px",
              xl: "28px",
              "2xl": "30px",
            }}
            fontWeight={500}
            fontStyle="italic"
            mb={{
              xs: "25px",
              sm: "30px",
              md: "35px",
              lg: "40px",
              xl: "45px",
              "2xl": "50px",
            }}
            textAlign="left"
          >
            Pricing
          </Text>
        </Box>
      </Box>

      {/* List */}
      <Box
        width="100%"
        display="flex"
        flexFlow="column"
        alignItems="center"
        color="black"
      >
        <Grid
          width="90%"
          templateColumns={{ xs: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={{
            xs: "25px",
            sm: "30px",
            md: "35px",
            lg: "40px",
            xl: "45px",
            "2xl": "50px",
          }}
          justifyItems="center"
          alignItems="center"
        >
          {priceCards.map((card, index) => (
            <PriceCard key={index} item={card} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AllPrices;
