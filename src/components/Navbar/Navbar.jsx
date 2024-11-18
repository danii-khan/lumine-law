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
import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuTrigger,
} from "../../lib/chakra-components/ui/menu";
import LumineLogo from "../../assets/navbar/logo.png";
import MenuIcon from "../../assets/navbar/menu-dropdown-icon.png";
import BlackMenuIcon from "../../assets/navbar/menu-dropdown-icon-black.png";
import "../../styles/fonts.css";
import "../../styles/menu.css";
import styles from "../../styles/navbar.module.css";

const ServicesMegaMenu = () => {
  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button
            backgroundColor="inherit"
            color="white"
            size="sm"
            fontSize="18px"
            fontWeight={500}
            height="100%"
            borderRadius="0px"
            position="relative"
            px="10px"
            className={styles.servicesMegaMenuButton}
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
        </MenuTrigger>
        <MenuContent width="100vw">
          <Box>
            <HStack
              justifyContent={"space-evenly"}
              alignItems={"flex-start"}
              py={"10px"}
            >
              {/* Immigration Services */}
              <VStack width={"200px"} alignItems={"flex-start"} gap={"20px"}>
                {/* Header */}
                <Text color={"#BEAB7C"} fontSize={"18px"} fontWeight={700}>
                  Immigration Services
                </Text>
                {/* List */}
                <Text fontSize={"16px"} fontWeight={400}>
                  Spouse Visa
                </Text>
                <Text fontSize={"16px"} fontWeight={400}>
                  British Citizenship Application
                </Text>
                <Text fontSize={"16px"} fontWeight={400}>
                  UK Visitor Visa
                </Text>
                <Text fontSize={"16px"} fontWeight={400}>
                  Entry Clearance Applications from Outside of UK
                </Text>
                <Text fontSize={"16px"} fontWeight={400}>
                  Skilled Worker Visa
                </Text>
                <Text fontSize={"16px"} fontWeight={400}>
                  Certificate of Sponsorship
                </Text>
                <Text fontSize={"16px"} fontWeight={400}>
                  Student Visa
                </Text>
                <Text fontSize={"16px"} fontWeight={400}>
                  Visa Extensions
                </Text>
                <Text fontSize={"16px"} fontWeight={400}>
                  Indefinite Leave to Remain
                </Text>
              </VStack>

              {/* Residential & Commercial Property*/}
              <VStack width={"200px"} alignItems={"flex-start"} gap={"20px"}>
                {/* Header */}

                <Text color={"#BEAB7C"} fontSize={"18px"} fontWeight={700}>
                  Residential and Commercial Property
                </Text>
                {/* List */}
              </VStack>

              {/* Dispute Resolution and Civil Litigation */}
              <VStack width={"200px"} alignItems={"flex-start"} gap={"20px"}>
                {/* Header */}
                <Text color={"#BEAB7C"} fontSize={"18px"} fontWeight={700}>
                  Dispute Resolution and Civil Litigation
                </Text>
                {/* List */}
              </VStack>

              {/* Landlord and Tenant Disputes */}
              <VStack width={"200px"} alignItems={"flex-start"} gap={"20px"}>
                {/* Header */}
                <Text color={"#BEAB7C"} fontSize={"18px"} fontWeight={700}>
                  Landlord and Tenant Disputes
                </Text>
                {/* List */}
              </VStack>

              {/* Family and Children */}
              <VStack width={"200px"} alignItems={"flex-start"} gap={"20px"}>
                {/* Header */}
                <Text color={"#BEAB7C"} fontSize={"18px"} fontWeight={700}>
                  Family and Children
                </Text>
                {/* List */}
                <Text fontSize={"16px"} fontWeight={400}>
                  Divorce{" "}
                </Text>
                <Text fontSize={"16px"} fontWeight={400}>
                  Pre Nuptial Agreements{" "}
                </Text>
                <Text fontSize={"16px"} fontWeight={400}>
                  Child Arrangements{" "}
                </Text>
              </VStack>
            </HStack>
          </Box>
        </MenuContent>
      </MenuRoot>
    </>
  );
};

const Menu = () => {
  return (
    <>
      <HStack
        justifyContent={"center"}
        alignItems={"center"}
        gap={"0px"}
        height={"100%"}
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
          px="10px"
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
          px="10px"
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
          px="10px"
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
          px="10px"
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
      <Grid
        templateColumns={"repeat(3, 1fr)"}
        width={"100vw"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pr={"20px"}
        style={{ fontFamily: "CeraRoundPro" }}
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
          transition: "background-color 0.3s ease",
        }}
      >
        {/* Logo + Title */}
        <GridItem>
          <HStack
            justifyContent={"flex-start"}
            alignItems={"center"}
            _hover={{ backgroundColor: "black", color: "white" }}
            width={"325px"}
            transition={"all 0.3s ease"}
            py={"5px"}
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
        </GridItem>

        {/* Menu Options */}
        <GridItem height={"100%"}>
          <Menu />
        </GridItem>

        {/* Contact Button */}
        <GridItem justifySelf={"end"} py={"5px"}>
          <Button
            fontWeight={400}
            fontSize={"16px"}
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
        </GridItem>
      </Grid>
    </>
  );
};

export default Navbar;
