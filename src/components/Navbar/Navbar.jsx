import { useState } from "react";
import {
  HStack,
  Image,
  Text,
  Grid,
  GridItem,
  Box,
  VStack,
} from "@chakra-ui/react";
import { Button } from "../../lib/chakra-components/ui/button";
import LumineLogo from "../../assets/navbar/logo.png";
import MenuIcon from "../../assets/navbar/menu-dropdown-icon.png";
import BlackMenuIcon from "../../assets/navbar/menu-dropdown-icon-black.png";
import "../../styles/fonts.css";
import styles from "../../styles/navbar.module.css";
import { Link } from "react-router-dom";

const ServicesMegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        backgroundColor="inherit"
        color="white"
        size="sm"
        fontSize="18px"
        fontWeight={500}
        height="100%"
        borderRadius="0px"
        position="relative"
        px="20px"
        className={styles.servicesMegaMenuButton}
        onClick={() => setIsOpen(!isOpen)}
        data-state={isOpen ? "open" : ""}
        _hover={{
          color: "white",
          backgroundColor: "black",
          borderBottom: "5px solid #BEAB7C",
        }}
        css={{
          transition: "all 0.3s ease",
        }}
      >
        Services
        <Image src={MenuIcon} />
        <Image src={BlackMenuIcon} />
      </Button>
      <Box
        position="absolute"
        top="100%"
        left="50%"
        transform="translateX(-50%)"
        width="100%"
        maxWidth="100vw"
        backgroundColor="#111111"
        py={"10px"}
        zIndex={9999}
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        className={`${styles.megaMenuContainer} ${isOpen ? styles.open : ""}`}
      >
        <HStack
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
          py={"10px"}
        >
          {/* Immigration Services */}
          <VStack
            width={"200px"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            gap={"20px"}
          >
            {/* Header */}
            <Link
              to={"/all-services/immigration"}
              style={{ textDecoration: "none" }}
            >
              <Text
                fontSize={"18px"}
                fontWeight={700}
                className={styles.menuHeader}
                _hover={{ borderBottom: "2px solid #beab7c" }}
              >
                Immigration Services
              </Text>
            </Link>
            {/* List */}
            <Text
              as={Link}
              to={"/all-services/immigration/spouse-visa"}
              fontSize={"16px"}
              fontWeight={400}
              className={styles.menuText}
            >
              Spouse Visa
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              textAlign={"left"}
              className={styles.menuText}
            >
              British Citizenship Application
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              className={styles.menuText}
            >
              UK Visitor Visa
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              textAlign={"left"}
              className={styles.menuText}
            >
              Entry Clearance Applications from Outside of UK
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              className={styles.menuText}
            >
              Skilled Worker Visa
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              className={styles.menuText}
            >
              Certificate of Sponsorship
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              className={styles.menuText}
            >
              Student Visa
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              className={styles.menuText}
            >
              Visa Extensions
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              className={styles.menuText}
            >
              Indefinite Leave to Remain
            </Text>
          </VStack>

          {/* Residential & Commercial Property*/}
          <VStack width={"200px"} alignItems={"flex-start"} gap={"20px"}>
            {/* Header */}

            <Text
              fontSize={"18px"}
              fontWeight={700}
              className={styles.menuHeader}
            >
              Residential and Commercial Property
            </Text>
            {/* List */}
          </VStack>

          {/* Dispute Resolution and Civil Litigation */}
          <VStack width={"200px"} alignItems={"flex-start"} gap={"20px"}>
            {/* Header */}
            <Text
              fontSize={"18px"}
              fontWeight={700}
              className={styles.menuHeader}
            >
              Dispute Resolution and Civil Litigation
            </Text>
            {/* List */}
          </VStack>

          {/* Landlord and Tenant Disputes */}
          <VStack width={"200px"} alignItems={"flex-start"} gap={"20px"}>
            {/* Header */}
            <Text
              fontSize={"18px"}
              fontWeight={700}
              className={styles.menuHeader}
            >
              Landlord and Tenant Disputes
            </Text>
            {/* List */}
          </VStack>

          {/* Family and Children */}
          <VStack width={"200px"} alignItems={"flex-start"} gap={"20px"}>
            {/* Header */}
            <Text
              fontSize={"18px"}
              fontWeight={700}
              className={styles.menuHeader}
            >
              Family and Children
            </Text>
            {/* List */}
            <Text
              fontSize={"16px"}
              fontWeight={400}
              className={styles.menuText}
            >
              Divorce{" "}
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              className={styles.menuText}
            >
              Pre Nuptial Agreements{" "}
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              className={styles.menuText}
            >
              Child Arrangements{" "}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

const Menu = () => {
  return (
    <>
      <HStack
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"0px"}
      >
        {/* About */}
        <Button
          backgroundColor="inherit"
          color="white"
          size="sm"
          fontSize="18px"
          fontWeight={500}
          height="100%"
          borderRadius="0px"
          position="relative"
          px="20px"
          _hover={{
            color: "white",
            backgroundColor: "black",
            borderBottom: "5px solid #BEAB7C",
          }}
          className={styles.menuButton}
          css={{
            transition: "all 0.3s ease",
          }}
        >
          About
        </Button>

        {/* People */}
        <Button
          backgroundColor="inherit"
          color="white"
          size="sm"
          fontSize="18px"
          fontWeight={500}
          height="100%"
          borderRadius="0px"
          position="relative"
          px="20px"
          _hover={{
            color: "white",
            backgroundColor: "black",
            borderBottom: "5px solid #BEAB7C",
          }}
          className={styles.menuButton}
          css={{
            transition: "all 0.3s ease",
          }}
        >
          People
        </Button>

        {/* Services */}
        <ServicesMegaMenu />

        {/* News */}
        <Button
          backgroundColor="inherit"
          color="white"
          size="sm"
          fontSize="18px"
          fontWeight={500}
          height="100%"
          borderRadius="0px"
          position="relative"
          px="20px"
          _hover={{
            color: "white",
            backgroundColor: "black",
            borderBottom: "5px solid #BEAB7C",
          }}
          className={styles.menuButton}
          css={{
            transition: "all 0.3s ease",
          }}
        >
          News
        </Button>

        {/* Insights */}
        <Button
          backgroundColor="inherit"
          color="white"
          size="sm"
          fontSize="18px"
          fontWeight={500}
          height="100%"
          borderRadius="0px"
          position="relative"
          px="20px"
          _hover={{
            color: "white",
            backgroundColor: "black",
            borderBottom: "5px solid #BEAB7C",
          }}
          className={styles.menuButton}
          css={{
            transition: "all 0.3s ease",
          }}
        >
          Insights
        </Button>
      </HStack>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <Box position={"relative"} zIndex={1000}>
        <Grid
          templateColumns={"repeat(3, 1fr)"}
          height={"50px"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          pr={"20px"}
          style={{
            fontFamily: "CeraRoundPro",
            // "--navbar-height": "60px",
          }}
          _hover={{
            backgroundColor: "white",
            '[data-state="hover"]': true,
          }}
          data-state="default"
          onMouseEnter={(e) => (e.currentTarget.dataset.state = "hover")}
          onMouseLeave={(e) => {
            // Only remove hover state if menu is not open
            if (!document.querySelector('[data-state="open"]')) {
              e.currentTarget.dataset.state = "default";
            } else {
              e.currentTarget.dataset.state = "hover";
            }
          }}
          className={styles.navbarGrid}
          css={{
            transition: "background-color 0.6s ease",
          }}
        >
          {/* Logo + Title */}
          <GridItem>
            <Link to={"/"} textDecoration={"none"}>
              <HStack
                justifyContent={"flex-start"}
                alignItems={"center"}
                _hover={{ backgroundColor: "black", color: "white" }}
                width={"325px"}
                transition={"all 0.3s ease"}
                // py={"25px"}
                pl={"20px"}
                cursor={"pointer"}
                className={styles.chakraStack}
              >
                <Image src={LumineLogo} alt="" height={"50px"} width={"50px"} />
                <Text
                  fontSize={"24px"}
                  fontWeight={500}
                  className={styles.logoText}
                  css={{
                    transition: "color 0.3s ease",
                  }}
                >
                  LUMINE SOLICITORS
                </Text>
              </HStack>
            </Link>
          </GridItem>

          {/* Menu Options */}
          <GridItem height={"100%"}>
            <Menu />
          </GridItem>

          {/* Contact Button */}
          <GridItem justifySelf={"end"}>
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              <Button
                fontWeight={400}
                fontSize={"18px"}
                py={"15px"}
                color={"white"}
                background={"none"}
                borderColor={"white"}
                borderRadius={"10px"}
                cursor={"pointer"}
                overflow="hidden" // Add this
                _hover={{
                  backgroundColor: "black",
                  color: "#BEAB7C",
                }}
                className={styles.contactButton}
                css={{
                  transition: "all 0.3s ease",
                }}
              >
                Contact Us
              </Button>
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Navbar;
