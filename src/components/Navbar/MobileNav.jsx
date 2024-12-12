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
import HamburgerMenu from "../../assets/navbar/hamburger-menu.png";
import "../../styles/fonts.css";
import styles from "../../styles/navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceItems, setServiceItems] = useState(false);
  const [priceItems, setPriceItems] = useState(false);

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
        width={"50px"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={HamburgerMenu}
          height={{
            // base: 50px
            xs: "25px",
            md: "30px",
            lg: "35px",
            xl: "35px",
            "2xl": "50px",
          }}
          width={{
            // base: 50px
            xs: "25px",
            md: "30px",
            lg: "35px",
            xl: "35px",
            "2xl": "50px",
          }}
          fit={"contain"}
          cursor={"pointer"}
        />
      </Box>
      {isOpen && (
        <VStack
          py={"10px"}
          backgroundColor={"black"}
          position="fixed"
          top="50px"
          right="0px"
          height={"100vh"}
          width={"70vw"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap={"10px"}
        >
          {/* About */}
          <Box
            backgroundColor="black"
            width={"100%"}
            borderBottom={"1px solid white"}
            display={"flex"}
            justifyContent={"flex-start"}
          >
            <Button
              as={Link}
              to={"/lumine-law/about"}
              backgroundColor={"black"}
              color="white"
              size="sm"
              fontSize={{
                xs: "20px",
                md: "22px",
                lg: "24px",
              }}
              fontWeight={500}
              className={styles.menuButton}
              css={{
                transition: "all 0.3s ease",
              }}
            >
              About
            </Button>
          </Box>

          {/* Services */}
          <Box
            backgroundColor="black"
            width={"100%"}
            borderBottom={"1px solid"}
            borderColor={serviceItems ? "#beab7c" : "white"}
            display={"flex"}
            flexFlow={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Button
              backgroundColor="inherit"
              color={serviceItems ? "#beab7c" : "white"}
              size="sm"
              fontSize={{
                xs: "20px",
                md: "22px",
                lg: "24px",
              }}
              fontWeight={500}
              className={styles.menuButton}
              css={{
                transition: "all 0.3s ease",
              }}
              onClick={() => setServiceItems(!serviceItems)}
            >
              Services
            </Button>
            {/* Service Menu Items */}
            {serviceItems && (
              <VStack
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                width={"100%"}
              >
                {/* All */}
                <Box
                  width={"100%"}
                  borderY={"1px solid #beab7c"}
                  display={"flex"}
                >
                  <Button
                    as={Link}
                    to={"/lumine-law/all-services"}
                    ml={"5%"}
                    backgroundColor="inherit"
                    color="#beab7c"
                    size="sm"
                    fontSize={{
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                    }}
                    fontWeight={500}
                    className={styles.menuButton}
                    css={{
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => setServiceItems(!serviceItems)}
                  >
                    All Services
                  </Button>
                </Box>

                {/* Immigration */}
                <Box
                  width={"100%"}
                  borderBottom={"1px solid #beab7c"}
                  display={"flex"}
                >
                  <Button
                    as={Link}
                    to={"/lumine-law/all-services/immigration"}
                    ml={"5%"}
                    backgroundColor="inherit"
                    color="#beab7c"
                    size="sm"
                    fontSize={{
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                    }}
                    fontWeight={500}
                    className={styles.menuButton}
                    css={{
                      transition: "all 0.3s ease",
                    }}
                  >
                    Immigration Services
                  </Button>
                </Box>

                {/* Residential & Commercial Property */}
                <Box
                  width={"100%"}
                  borderBottom={"1px solid #beab7c"}
                  display={"flex"}
                >
                  <Button
                    as={Link}
                    to={"/lumine-law/all-services/residential-commercial"}
                    ml={"5%"}
                    backgroundColor="inherit"
                    color="#beab7c"
                    size="sm"
                    fontSize={{
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                    }}
                    fontWeight={500}
                    className={styles.menuButton}
                    css={{
                      transition: "all 0.3s ease",
                    }}
                  >
                    Residential & Commercial Property
                  </Button>
                </Box>

                {/* Dispute Resolution & Civil Litigation */}
                <Box
                  width={"100%"}
                  borderBottom={"1px solid #beab7c"}
                  display={"flex"}
                >
                  <Button
                    as={Link}
                    to={"/lumine-law/all-services/dispute-resolution"}
                    ml={"5%"}
                    backgroundColor="inherit"
                    color="#beab7c"
                    size="sm"
                    fontSize={{
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                    }}
                    fontWeight={500}
                    className={styles.menuButton}
                    css={{
                      transition: "all 0.3s ease",
                    }}
                  >
                    Dispute Resolution & Civil Litigation
                  </Button>
                </Box>

                {/* Landlord & Tenant Disputes */}
                <Box
                  width={"100%"}
                  borderBottom={"1px solid #beab7c"}
                  display={"flex"}
                >
                  <Button
                    as={Link}
                    to={"/lumine-law/all-services/landlord-tenant"}
                    ml={"5%"}
                    backgroundColor="inherit"
                    color="#beab7c"
                    size="sm"
                    fontSize={{
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                    }}
                    fontWeight={500}
                    className={styles.menuButton}
                    css={{
                      transition: "all 0.3s ease",
                    }}
                  >
                    Landlord & Tenant Disputes
                  </Button>
                </Box>

                {/* Family and Children */}
                <Box width={"100%"} display={"flex"}>
                  <Button
                    as={Link}
                    to={"/lumine-law/all-services/family-and-children"}
                    ml={"5%"}
                    backgroundColor="inherit"
                    color="#beab7c"
                    size="sm"
                    fontSize={{
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                    }}
                    fontWeight={500}
                    className={styles.menuButton}
                    css={{
                      transition: "all 0.3s ease",
                    }}
                  >
                    Family and Children
                  </Button>
                </Box>
              </VStack>
            )}
          </Box>

          {/* Prices */}
          <Box
            backgroundColor="black"
            width={"100%"}
            borderBottom={"1px solid"}
            borderColor={priceItems ? "#beab7c" : "white"}
            display={"flex"}
            flexFlow={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Button
              backgroundColor="inherit"
              color={priceItems ? "#beab7c" : "white"}
              size="sm"
              fontSize={{
                xs: "20px",
                md: "22px",
                lg: "24px",
              }}
              fontWeight={500}
              className={styles.menuButton}
              css={{
                transition: "all 0.3s ease",
              }}
              onClick={() => setPriceItems(!priceItems)}
            >
              Prices
            </Button>
            {/* Service Menu Items */}
            {priceItems && (
              <VStack
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                width={"100%"}
              >
                {/* Property Prices */}
                <Box
                  width={"100%"}
                  borderY={"1px solid #beab7c"}
                  display={"flex"}
                >
                  <Button
                    as={Link}
                    to={"/lumine-law/prices/property-prices"}
                    ml={"5%"}
                    backgroundColor="inherit"
                    color="#beab7c"
                    size="sm"
                    fontSize={{
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                    }}
                    fontWeight={500}
                    className={styles.menuButton}
                    css={{
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => setServiceItems(!serviceItems)}
                  >
                    Property Prices
                  </Button>
                </Box>

                {/* Debt Recovery Prices */}
                <Box
                  width={"100%"}
                  borderBottom={"1px solid #beab7c"}
                  display={"flex"}
                >
                  <Button
                    as={Link}
                    to="/lumine-law/prices/debt-recovery"
                    ml={"5%"}
                    backgroundColor="inherit"
                    color="#beab7c"
                    size="sm"
                    fontSize={{
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                    }}
                    fontWeight={500}
                    className={styles.menuButton}
                    css={{
                      transition: "all 0.3s ease",
                    }}
                  >
                    Debt Recovery Prices
                  </Button>
                </Box>

                {/* Immigration Prices */}
                <Box
                  width={"100%"}
                  borderBottom={"1px solid #beab7c"}
                  display={"flex"}
                >
                  <Button
                    as={Link}
                    to="/lumine-law/prices/immigration-prices"
                    ml={"5%"}
                    backgroundColor="inherit"
                    color="#beab7c"
                    size="sm"
                    fontSize={{
                      xs: "14px",
                      md: "16px",
                      lg: "18px",
                    }}
                    fontWeight={500}
                    className={styles.menuButton}
                    css={{
                      transition: "all 0.3s ease",
                    }}
                  >
                    Immigration Prices
                  </Button>
                </Box>
              </VStack>
            )}
          </Box>

          {/* News + Insights */}
          <Box
            backgroundColor="black"
            width={"100%"}
            borderBottom={"1px solid white"}
            display={"flex"}
            justifyContent={"flex-start"}
          >
            <Button
              backgroundColor="inherit"
              color="white"
              size="sm"
              fontSize={{
                xs: "20px",
                md: "22px",
                lg: "24px",
              }}
              fontWeight={500}
              className={styles.menuButton}
              css={{
                transition: "all 0.3s ease",
              }}
            >
              News and Insights
            </Button>
          </Box>

          {/* Contact Us */}
          <Box
            backgroundColor="black"
            width={"100%"}
            borderBottom={"1px solid white"}
            display={"flex"}
            justifyContent={"flex-start"}
          >
            <Button
              as={Link}
              to={"/lumine-law/contact"}
              backgroundColor="inherit"
              color="white"
              size="sm"
              fontSize={{
                xs: "20px",
                md: "22px",
                lg: "24px",
              }}
              fontWeight={500}
              className={styles.menuButton}
              css={{
                transition: "all 0.3s ease",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </VStack>
      )}
    </>
  );
};

const MobileNav = () => {
  return (
    <>
      <Box
        position={"relative"}
        zIndex={1000}
        display={{ xs: "block", lg: "none" }}
      >
        <Grid
          templateColumns={"repeat(2, 1fr)"}
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
          data-state="default"
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
              >
                <Image
                  src={LumineLogo}
                  alt=""
                  height={{
                    // base: 50px
                    xs: "25px",
                    md: "30px",
                    lg: "35px",
                    xl: "35px",
                    "2xl": "50px",
                  }}
                  width={{
                    // base: 50px
                    xs: "25px",
                    md: "30px",
                    lg: "35px",
                    xl: "35px",
                    "2xl": "50px",
                  }}
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
          <GridItem
            height={"100%"}
            justifySelf={"flex-end"}
            alignItems={"center"}
          >
            <Menu />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default MobileNav;
