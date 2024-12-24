import { useState } from "react";
import { HStack, Image, Text, Box, VStack } from "@chakra-ui/react";
import { Button } from "../../lib/chakra-components/ui/button";
import MenuIcon from "../../assets/navbar/menu-dropdown-icon.png";
import BlackMenuIcon from "../../assets/navbar/menu-dropdown-icon-black.png";
import "../../styles/fonts.css";
import styles from "../../styles/navbar.module.css";
import { Link } from "react-router-dom";

const PricesMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box
        position="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        height="100%"
      >
        <Button
          backgroundColor="inherit"
          color="white"
          size="sm"
          fontSize={{
            xs: "12px",
            md: "14px",
            lg: "14px",
            xl: "16px",
            "2xl": "18px",
          }}
          fontWeight={500}
          height="100%"
          borderRadius="0px"
          position="relative"
          px={{
            xs: "4px",
            md: "8px",
            lg: "12px",
            xl: "14px",
            "2xl": "16px",
          }}
          className={styles.servicesMegaMenuButton}
          data-state={isOpen ? "open" : ""}
          _hover={{
            color: "white",
            backgroundColor: "black",
            borderBottom: "5px solid #BEAB7C",
          }}
          css={{
            transition: "all 0.3s ease",
            borderBottom: isOpen ? "5px solid #BEAB7C" : "none",
          }}
        >
          Pricing
          <Image
            src={MenuIcon} // remove this if theres issues
            width={"auto"}
            alt="Menu Icon"
          />
          <Image
            src={BlackMenuIcon} // remove this if theres issues
            width={"auto"}
            alt="Black Menu Icon"
          />
        </Button>
        <Box
          position="fixed"
          top="50px"
          left="50"
          width="100vw"
          backgroundColor="#111111"
          py={"10px"}
          px={"10px"}
          zIndex={9999}
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          className={`${styles.megaMenuContainer} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(false)}
        >
          <HStack
            justifyContent={"center"}
            alignItems={"center"}
            py={"10px"}
            gap={{ xs: "10px", sm: "15px", md: "25px", xl: "50px" }}
          >
            {/* Menu Items */}
            <VStack alignItems={"center"} justifyContent={"center"}>
              {/* Property Prices */}
              <Text
                as={Link}
                to={"/lumine-law/prices/property-prices"}
                fontSize={{
                  // base: {"15px"}
                  lg: "10px",
                  xl: "14px",
                  "2xl": "18px",
                }}
                fontWeight={600}
                color={"#beab7c"}
                className={styles.menuText}
                textAlign={"left"}
              >
                Property Prices
              </Text>

              {/* Debt Recovery Prices */}
              <Text
                as={Link}
                to="/lumine-law/prices/debt-recovery"
                fontSize={{
                  // base: {"15px"}
                  lg: "10px",
                  xl: "14px",
                  "2xl": "18px",
                }}
                fontWeight={600}
                color={"#beab7c"}
                className={styles.menuText}
                textAlign={"left"}
              >
                Debt Recovery Prices
              </Text>

              {/* Immigration Prices */}
              <Text
                as={Link}
                to="/lumine-law/prices/immigration-prices"
                fontSize={{
                  // base: {"15px"}
                  lg: "10px",
                  xl: "14px",
                  "2xl": "18px",
                }}
                color={"#beab7c"}
                fontWeight={600}
                textAlign={"left"}
                className={styles.menuText}
              >
                Immigration Prices
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default PricesMenu;
