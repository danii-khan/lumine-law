import { useState } from "react";
import { HStack, Image, Text, Box, VStack } from "@chakra-ui/react";
import { Button } from "../../lib/chakra-components/ui/button";
import MenuIcon from "../../assets/navbar/menu-dropdown-icon.png";
import BlackMenuIcon from "../../assets/navbar/menu-dropdown-icon-black.png";
import "../../styles/fonts.css";
import styles from "../../styles/navbar.module.css";
import { Link } from "react-router-dom";

const ServicesMegaMenu = () => {
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
          as={Link}
          to={"/lumine-law/all-services"}
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
          Services
          <Image src={MenuIcon} />
          <Image src={BlackMenuIcon} />
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
        >
          <HStack
            justifyContent={"space-evenly"}
            alignItems={"flex-start"}
            py={"10px"}
            gap={{ xs: "10px", sm: "15px", md: "25px", xl: "50px" }}
          >
            {/* Immigration Services */}
            <VStack
              // width="30%"
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

              {/* Explore More */}
              <Link
                to={"/lumine-law/all-services/immigration"}
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
                  ...
                </Text>
              </Link>
            </VStack>

            {/* Family and Children */}
            <VStack
              // width="30%"
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

              {/* Explore More */}
              <Link
                to={"/lumine-law/all-services/family-and-children"}
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
                  ...
                </Text>
              </Link>
            </VStack>

            {/* Explore More */}
            <VStack
              // width="30%"
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
                to={"/lumine-law/all-services/residential-commercial"}
                fontSize={{
                  // base: {"15px"}
                  lg: "12px",
                  xl: "14px",
                  "2xl": "16px",
                }}
                fontWeight={600}
                className={styles.menuText}
                textAlign={"left"}
                _hover={{ borderBottom: "2px solid #beab7c" }}
              >
                Residential and Commercial Property
              </Text>

              {/* Dispute Resolution & Civil Litigation */}
              <Text
                as={Link}
                to={"/lumine-law/all-services/dispute-resolution"}
                fontSize={{
                  // base: {"15px"}
                  lg: "12px",
                  xl: "14px",
                  "2xl": "16px",
                }}
                fontWeight={600}
                className={styles.menuText}
                textAlign={"left"}
                _hover={{ borderBottom: "2px solid #beab7c" }}
              >
                Dispute Resolution and Civil Litigation
              </Text>

              {/* Landlord & Tenant Disputes */}
              <Text
                as={Link}
                to={"/lumine-law/all-services/landlord-tenant"}
                fontSize={{
                  // base: {"15px"}
                  lg: "12px",
                  xl: "14px",
                  "2xl": "16px",
                }}
                fontWeight={600}
                className={styles.menuText}
                textAlign={"left"}
                _hover={{ borderBottom: "2px solid #beab7c" }}
              >
                Landlord and Tenant Disputes
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default ServicesMegaMenu;
