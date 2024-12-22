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
import LumineLogo from "../../assets/navbar/logo.webp";
import HamburgerMenu from "../../assets/navbar/hamburger-menu.png";
import "../../styles/fonts.css";
import styles from "../../styles/navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackArrow from "../../assets/navbar/back-arrow.png";
import ForwardArrow from "../../assets/navbar/forward-arrow.png";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

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
          alt="Lumine Solicitors Mobile Menu"
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            style={{
              position: "fixed",
              top: "50px",
              right: "0px",
              height: "100vh",
              width: "70vw",
              backgroundColor: "black",
            }}
          >
            <VStack
              py="10px"
              justifyContent="flex-start"
              alignItems="flex-start"
              gap="10px"
              height="100%"
            >
              {/* Main Menu */}
              {activeSection === null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ width: "100%" }}
                >
                  {/* About */}
                  <Box
                    as={Link}
                    to={"/lumine-law/about"}
                    backgroundColor="black"
                    width={"100%"}
                    borderBottom={"1px solid white"}
                    display={"flex"}
                    justifyContent={"flex-start"}
                    py={"10px"}
                  >
                    <Button
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
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      About
                    </Button>
                  </Box>

                  {/* Services */}
                  <Box
                    backgroundColor="black"
                    width={"100%"}
                    borderBottom={"1px solid white"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    py={"10px"}
                    onClick={() => handleSectionClick("services")}
                  >
                    <Button
                      backgroundColor="inherit"
                      color={"white"}
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
                      Services
                    </Button>
                    <Image
                      src={ForwardArrow}
                      height={"30px"}
                      // remove this if theres issues
                      width={"auto"}
                      alt="Forward Arrow"
                    />
                  </Box>

                  {/* Prices */}
                  <Box
                    backgroundColor="black"
                    width={"100%"}
                    borderBottom={"1px solid white"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    py={"10px"}
                    onClick={() => handleSectionClick("prices")}
                  >
                    <Button
                      backgroundColor="inherit"
                      color={"white"}
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
                      Pricing
                    </Button>
                    <Image
                      src={ForwardArrow}
                      height={"30px"}
                      // remove this if theres issues
                      width={"auto"}
                      alt="Forward Arrow"
                    />
                  </Box>

                  {/* News */}
                  <Box
                    as={Link}
                    to={"/lumine-law/news"}
                    backgroundColor="black"
                    width={"100%"}
                    borderBottom={"1px solid white"}
                    display={"flex"}
                    justifyContent={"flex-start"}
                    py={"10px"}
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
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      News
                    </Button>
                  </Box>

                  {/* Insights */}
                  <Box
                    as={Link}
                    to={"/lumine-law/insights"}
                    backgroundColor="black"
                    width={"100%"}
                    borderBottom={"1px solid white"}
                    display={"flex"}
                    justifyContent={"flex-start"}
                    py={"10px"}
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
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Insights
                    </Button>
                  </Box>

                  {/* Contact Us */}
                  <Box
                    backgroundColor="black"
                    width={"100%"}
                    borderBottom={"1px solid white"}
                    display={"flex"}
                    justifyContent={"flex-start"}
                    py={"10px"}
                    as={Link}
                    to={"/lumine-law/contact"}
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
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Contact Us
                    </Button>
                  </Box>
                </motion.div>
              )}

              {/* Services Section */}
              <AnimatePresence>
                {activeSection === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    style={{ width: "100%" }}
                  >
                    {/* Back */}
                    <Box
                      width="100%"
                      display={"flex"}
                      flexDir={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      gap={"0"}
                      onClick={() => setActiveSection(null)}
                      py={"10px"}
                    >
                      <Image
                        src={BackArrow}
                        height={"30px"} // remove this if theres issues
                        width={"auto"}
                        alt="Back Arrow"
                      />
                      <Button
                        variant="ghost"
                        color="white"
                        fontSize={{
                          xs: "20px",
                          md: "22px",
                          lg: "24px",
                        }}
                      >
                        Back
                      </Button>
                    </Box>

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
                        py={"5px"}
                        as={Link}
                        to={"/lumine-law/all-services"}
                      >
                        <Button
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
                          onClick={() => setIsOpen(false)}
                        >
                          All Services
                        </Button>
                      </Box>

                      {/* Immigration */}
                      <Box
                        width={"100%"}
                        borderBottom={"1px solid #beab7c"}
                        display={"flex"}
                        py={"5px"}
                        as={Link}
                        to={"/lumine-law/all-services/immigration"}
                      >
                        <Button
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
                          onClick={() => setIsOpen(false)}
                        >
                          Immigration Services
                        </Button>
                      </Box>

                      {/* Residential Property */}
                      <Box
                        width={"100%"}
                        borderBottom={"1px solid #beab7c"}
                        display={"flex"}
                        py={"5px"}
                        as={Link}
                        to={"/lumine-law/all-services/residential"}
                      >
                        <Button
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
                          onClick={() => setIsOpen(false)}
                        >
                          Residential Property
                        </Button>
                      </Box>

                      {/* Commercial Property */}
                      <Box
                        width={"100%"}
                        borderBottom={"1px solid #beab7c"}
                        display={"flex"}
                        py={"5px"}
                        as={Link}
                        to={"/lumine-law/all-services/commercial"}
                      >
                        <Button
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
                          onClick={() => setIsOpen(false)}
                        >
                          Commercial Property
                        </Button>
                      </Box>

                      {/* Intellectual Property */}
                      <Box
                        width={"100%"}
                        borderBottom={"1px solid #beab7c"}
                        display={"flex"}
                        py={"5px"}
                        as={Link}
                        to={"/lumine-law/all-services/intellectual-property"}
                      >
                        <Button
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
                          onClick={() => setIsOpen(false)}
                        >
                          Intellectual Property
                        </Button>
                      </Box>

                      {/* Dispute Resolution & Civil Litigation */}
                      <Box
                        width={"100%"}
                        borderBottom={"1px solid #beab7c"}
                        display={"flex"}
                        py={"5px"}
                        as={Link}
                        to={"/lumine-law/all-services/dispute-resolution"}
                      >
                        <Button
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
                          onClick={() => setIsOpen(false)}
                        >
                          Dispute Resolution & Civil Litigation
                        </Button>
                      </Box>

                      {/* Landlord & Tenant Disputes */}
                      <Box
                        width={"100%"}
                        borderBottom={"1px solid #beab7c"}
                        display={"flex"}
                        py={"5px"}
                        as={Link}
                        to={"/lumine-law/all-services/landlord-tenant"}
                      >
                        <Button
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
                          onClick={() => setIsOpen(false)}
                        >
                          Landlord & Tenant Disputes
                        </Button>
                      </Box>

                      {/* Family and Children */}
                      <Box
                        width={"100%"}
                        display={"flex"}
                        borderBottom={"1px solid #beab7c"}
                        py={"5px"}
                        as={Link}
                        to={"/lumine-law/all-services/family-and-children"}
                      >
                        <Button
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
                          onClick={() => setIsOpen(false)}
                        >
                          Family and Children
                        </Button>
                      </Box>

                      {/* Wills and Probate */}
                      <Box
                        width={"100%"}
                        display={"flex"}
                        borderBottom={"1px solid #beab7c"}
                        py={"5px"}
                        as={Link}
                        to={"/lumine-law/all-services/wills-probate"}
                      >
                        <Button
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
                          onClick={() => setIsOpen(false)}
                        >
                          Wills and Probate
                        </Button>
                      </Box>
                    </VStack>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Prices Section */}
              <AnimatePresence>
                {activeSection === "prices" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    style={{ width: "100%" }}
                  >
                    {/* Back */}
                    <Box
                      width="100%"
                      display={"flex"}
                      flexDir={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      gap={"0"}
                      onClick={() => setActiveSection(null)}
                      py={"10px"}
                    >
                      <Image
                        src={BackArrow}
                        height={"30px"} // remove this if theres issues
                        width={"auto"}
                        alt="Back Arrow"
                      />
                      <Button
                        variant="ghost"
                        color="white"
                        fontSize={{
                          xs: "20px",
                          md: "22px",
                          lg: "24px",
                        }}
                      >
                        Back
                      </Button>
                    </Box>

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
                        py={"5px"}
                        as={Link}
                        to={"/lumine-law/prices/property-prices"}
                      >
                        <Button
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
                          onClick={() => setIsOpen(false)}
                        >
                          Property Prices
                        </Button>
                      </Box>

                      {/* Debt Recovery Prices */}
                      <Box
                        width={"100%"}
                        borderBottom={"1px solid #beab7c"}
                        display={"flex"}
                        py={"5px"}
                        as={Link}
                        to="/lumine-law/prices/debt-recovery"
                      >
                        <Button
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
                          onClick={() => setIsOpen(false)}
                        >
                          Debt Recovery Prices
                        </Button>
                      </Box>

                      {/* Immigration Prices */}
                      <Box
                        width={"100%"}
                        borderBottom={"1px solid #beab7c"}
                        display={"flex"}
                        py={"5px"}
                        as={Link}
                        to="/lumine-law/prices/immigration-prices"
                      >
                        <Button
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
                          onClick={() => setIsOpen(false)}
                        >
                          Immigration Prices
                        </Button>
                      </Box>
                    </VStack>
                  </motion.div>
                )}
              </AnimatePresence>
            </VStack>
          </motion.div>
        )}
      </AnimatePresence>
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
                gap={"5px"}
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
