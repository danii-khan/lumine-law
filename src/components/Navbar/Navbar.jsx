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
        px={"10px"}
        zIndex={9999}
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        className={`${styles.megaMenuContainer} ${isOpen ? styles.open : ""}`}
      >
        <HStack
          justifyContent={"center"}
          alignItems={"flex-start"}
          py={"10px"}
          gap={{ xs: "2.5px", sm: "5px", md: "7.5px", xl: "12.5px" }}
        >
          {/* Immigration Services */}
          <VStack
            width="15%"
            alignItems={"flex-start"}
            justifyContent={"center"}
            gap={{
              // base: {"20px"}
              xs: "10px",
              sm: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
          >
            {/* Header */}
            <Link
              to={"/lumine-law/all-services/immigration"}
              style={{ textDecoration: "none" }}
            >
              <Text
                fontSize={{
                  // base: {"18px"}
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "9px",
                  xl: "11px",
                  "2xl": "16px",
                }}
                fontWeight={700}
                className={styles.menuHeader}
                _hover={{ borderBottom: "2px solid #beab7c" }}
              >
                Immigration
              </Text>
            </Link>
            {/* List */}
            {/* Spouse Visa */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/immigration/spouse-visa"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Spouse Visa
            </Text>

            {/* Visitor Visa */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/immigration/uk-visitor-visa"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              UK Visitor Visa
            </Text>

            {/* Citizenship App */}
            <Text
              as={Link}
              to={
                "/lumine-law/all-services/immigration/british-citizenship-application"
              }
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              textAlign={"left"}
              className={styles.menuText}
            >
              British Citizenship Application
            </Text>

            {/* Clearance from Outside UK */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/immigration/entry-clearance"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              textAlign={"left"}
              className={styles.menuText}
            >
              Entry Clearance Applications from Outside of the UK
            </Text>

            {/* Skilled Work Visa */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/immigration/skilled-worker-visa"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Skilled Worker Visa
            </Text>

            {/* Cert of Sponsorship */}
            <Text
              as={Link}
              to={
                "/lumine-law/all-services/immigration/certificate-of-sponsorship"
              }
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Certificate of Sponsorship
            </Text>

            {/* Student Visa */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/immigration/student-visa"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Student Visa
            </Text>

            {/* Visa Categories */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/immigration/visa-categories"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Visa Categories
            </Text>

            {/* Indefinite Leave */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/immigration/indefinite-leave"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Indefinite Leave to Remain
            </Text>

            {/* Explore More */}
            <Link
              to={"/lumine-law/all-services"}
              style={{ textDecoration: "none" }}
            >
              <Text
                fontSize={{
                  // base: {"15px"}
                  lg: "8px",
                  xl: "10px",
                  "2xl": "15px",
                }}
                fontWeight={700}
                className={styles.menuText}
                textAlign={"left"}
              >
                Explore More
              </Text>
            </Link>
          </VStack>

          {/* Residential & Commercial Property*/}
          <VStack
            width="22%"
            alignItems={"flex-start"}
            gap={{
              // base: {"20px"}
              xs: "10px",
              sm: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
          >
            {/* Header */}

            <Text
              fontSize={{
                // base: {"18px"}
                xs: "8px",
                sm: "10px",
                md: "12px",
                lg: "9px",
                xl: "11px",
                "2xl": "16px",
              }}
              fontWeight={700}
              className={styles.menuHeader}
            >
              Residential and Commercial Property
            </Text>
            {/* List */}
          </VStack>

          {/* Dispute Resolution and Civil Litigation */}
          <VStack
            width="22%"
            alignItems={"flex-start"}
            gap={{
              // base: {"20px"}
              xs: "10px",
              sm: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
          >
            {/* Header */}
            <Text
              fontSize={{
                // base: {"18px"}
                xs: "8px",
                sm: "10px",
                md: "12px",
                lg: "9px",
                xl: "11px",
                "2xl": "16px",
              }}
              fontWeight={700}
              className={styles.menuHeader}
            >
              Dispute Resolution and Civil Litigation
            </Text>
            {/* List */}
          </VStack>

          {/* Landlord and Tenant Disputes */}
          <VStack
            width="20%"
            alignItems={"flex-start"}
            gap={{
              // base: {"20px"}
              xs: "10px",
              sm: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
          >
            {/* Header */}
            <Text
              fontSize={{
                // base: {"18px"}
                xs: "8px",
                sm: "10px",
                md: "12px",
                lg: "9px",
                xl: "11px",
                "2xl": "16px",
              }}
              fontWeight={700}
              className={styles.menuHeader}
            >
              Landlord and Tenant Disputes
            </Text>
            {/* List */}
          </VStack>

          {/* Family and Children */}
          <VStack
            width="16%"
            alignItems={"flex-start"}
            gap={{
              // base: {"20px"}
              xs: "10px",
              sm: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
          >
            {/* Header */}
            <Link
              to={"/lumine-law/all-services/family-and-children"}
              style={{ textDecoration: "none" }}
            >
              <Text
                fontSize={{
                  // base: {"18px"}
                  xs: "8px",
                  sm: "10px",
                  md: "10px",
                  lg: "9px",
                  xl: "11px",
                  "2xl": "16px",
                }}
                fontWeight={700}
                className={styles.menuHeader}
                _hover={{ borderBottom: "2px solid #beab7c" }}
              >
                Family and Children
              </Text>
            </Link>
            {/* List */}
            {/* Divorce */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/family/divorce"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Divorce{" "}
            </Text>

            {/* Pre Nuptial Agreement */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/family/nuptial-agreement"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Pre Nuptial Agreements{" "}
            </Text>

            {/* Child Arrangements */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/family/child-arrangements"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Child Arrangements{" "}
            </Text>

            {/* Parental Responsibility */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/family/parental-responsbility"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Parental Responsibility
            </Text>

            {/* Consent Orders */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/family/consent-orders"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Consent Orders
            </Text>

            {/* Financial Settlements */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/family/financial-settlements"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Financial Settlements
            </Text>

            {/* Domestic Violence */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/family/domestic-violence"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Domestic Violence
            </Text>

            {/* Adoption and Surrogacy */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/family/adoption-surrogacy"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
            >
              Adoption and Surrogacy
            </Text>
          </VStack>

          {/* Explore More */}
          <VStack
            width="16%"
            alignItems={"flex-start"}
            gap={{
              // base: {"20px"}
              xs: "10px",
              sm: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
          >
            {/* Header */}
            <Link
              to={"/lumine-law/all-services"}
              style={{ textDecoration: "none" }}
            >
              <Text
                fontSize={{
                  // base: {"18px"}
                  xs: "8px",
                  sm: "10px",
                  md: "10px",
                  lg: "9px",
                  xl: "11px",
                  "2xl": "16px",
                }}
                fontWeight={700}
                className={styles.menuHeader}
                _hover={{ borderBottom: "2px solid #beab7c" }}
              >
                Explore More
              </Text>
            </Link>
            {/* List */}
            {/* Residential & Commercial  */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/family/divorce"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
              _hover={{ borderBottom: "2px solid #beab7c" }}
            >
              Residential and Commercial Property
            </Text>

            {/* Dispute Resolution & Civil Litigation */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/family/nuptial-agreement"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
              _hover={{ borderBottom: "2px solid #beab7c" }}
            >
              Dispute Resolution and Civil Litigation
            </Text>

            {/* Landlord & Tenant Disputes */}
            <Text
              as={Link}
              to={"/lumine-law/all-services/family/child-arrangements"}
              fontSize={{
                // base: {"15px"}
                lg: "8px",
                xl: "10px",
                "2xl": "15px",
              }}
              fontWeight={400}
              className={styles.menuText}
              textAlign={"left"}
              _hover={{ borderBottom: "2px solid #beab7c" }}
            >
              Landlord and Tenant Disputes
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

        {/* People */}
        {/* <Button
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
          People
        </Button> */}

        {/* Services */}
        <ServicesMegaMenu />

        {/* News + Insights */}
        <Button
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
          News and Insights
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
            justifySelf={"center"}
            display={{ xs: "none", md: "grid" }}
          >
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
    </>
  );
};

export default Navbar;
