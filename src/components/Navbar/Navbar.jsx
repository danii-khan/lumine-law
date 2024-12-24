import { HStack, Image, Text, Grid, GridItem, Box } from "@chakra-ui/react";
import { Button } from "../../lib/chakra-components/ui/button";
import LumineLogo from "../../assets/navbar/logo.webp";
import "../../styles/fonts.css";
import styles from "../../styles/navbar.module.css";
import { Link } from "react-router-dom";
import PricesMenu from "./PricesMenu";
import ServicesMegaMenu from "./ServicesMegaMenu";
import MobileNav from "./MobileNav";

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
          as={Link}
          to={"/lumine-law/about"}
          backgroundColor="inherit"
          color="white"
          size="sm"
          fontSize={{
            //base: {"18px"}
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
            //base: "20px"
            xs: "4px",
            md: "8px",
            lg: "12px",
            xl: "14px",
            "2xl": "16px",
          }}
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

        {/* Services */}
        <ServicesMegaMenu />

        {/* Prices */}
        <PricesMenu />

        {/* News */}
        <Button
          as={Link}
          to={"/lumine-law/news"}
          backgroundColor="inherit"
          color="white"
          size="sm"
          fontSize={{
            //base: {"18px"}
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
            //base: "20px"
            xs: "4px",
            md: "8px",
            lg: "12px",
            xl: "14px",
            "2xl": "16px",
          }}
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
          as={Link}
          to={"/lumine-law/insights"}
          backgroundColor="inherit"
          color="white"
          size="sm"
          fontSize={{
            //base: {"18px"}
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
            //base: "20px"
            xs: "4px",
            md: "8px",
            lg: "12px",
            xl: "14px",
            "2xl": "16px",
          }}
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
      <Box
        position={"relative"}
        zIndex={1000}
        display={{ xs: "none", lg: "block" }}
      >
        <Grid
          templateColumns={"repeat(3, 1fr)"}
          height={"50px"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          pr={{
            // base: 20px
            xs: "5px",
            md: "7.5px",
            lg: "10px",
            xl: "20px",
            "2xl": "30px",
          }}
          style={{
            fontFamily: "CeraRoundPro",
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
            <Link to={"/lumine-law/"} textDecoration={"none"}>
              <HStack
                justifyContent={"flex-start"}
                alignItems={"center"}
                _hover={{ backgroundColor: "black", color: "white" }}
                width={{
                  // base: {"md"}
                  xs: "2xs",
                  md: "2xs",
                  lg: "250px",
                  xl: "325px",
                  "2xl": "325px",
                }}
                transition={"all 0.3s ease"}
                pl={{
                  // base: 20px
                  xs: "5px",
                  md: "7.5px",
                  lg: "10px",
                  xl: "20px",
                  "2xl": "30px",
                }}
                cursor={"pointer"}
                className={styles.chakraStack}
                gap={"10px"}
                py={"5px"}
              >
                <Image
                  src={LumineLogo}
                  alt="Lumine Solicitors Logo"
                  height={{
                    // base: 50px
                    xs: "20px",
                    md: "25px",
                    lg: "30px",
                    xl: "30px",
                    "2xl": "40px",
                  }}
                  width={{
                    // base: 50px
                    xs: "20px",
                    md: "25px",
                    lg: "30px",
                    xl: "30px",
                    "2xl": "40px",
                  }}
                  fit={"cover"}
                />
                <Text
                  fontSize={{
                    //base: {"24px"}
                    xs: "14px",
                    md: "16px",
                    lg: "18px",
                    xl: "18px",
                    "2xl": "24px",
                  }}
                  color={"white"}
                  fontWeight={600}
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
          <GridItem height={"100%"} justifySelf={"center"}>
            <Menu />
          </GridItem>

          {/* Contact Button */}
          <GridItem justifySelf={"end"} display={{ xs: "none", md: "grid" }}>
            <Link to={"/lumine-law/contact"} style={{ textDecoration: "none" }}>
              <Button
                fontWeight={400}
                fontSize={{
                  //base: {"18px"}
                  xs: "12px",
                  md: "14px",
                  lg: "14px",
                  xl: "16px",
                  "2xl": "18px",
                }}
                py={{
                  //base: {"15px"}
                  xs: "6px",
                  md: "8px",
                  lg: "10px",
                  xl: "12px",
                  "2xl": "15px",
                }}
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

      <MobileNav />
    </>
  );
};

export default Navbar;
