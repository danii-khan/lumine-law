import styles from "../../styles/navbar.module.css";
import { useEffect, useState } from "react";
import { HStack, Image, Text, Box, VStack } from "@chakra-ui/react";
import { Button } from "../../lib/chakra-components/ui/button";
import MenuIcon from "../../assets/navbar/menu-dropdown-icon.png";
import BlackMenuIcon from "../../assets/navbar/menu-dropdown-icon-black.png";
import "../../styles/fonts.css";
import { Link } from "react-router-dom";

const ServicesMegaMenu = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const Placeholder = () => {
    if (!mounted) {
      return (
        <Box position="relative" height="100%">
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
            height="100%"
          >
            Services
          </Button>
        </Box>
      );
    } else
      return (
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
            <Image
              src={MenuIcon}
              // remove this if theres issues
              width={"auto"}
              alt="Menu Icon"
            />
            <Image
              src={BlackMenuIcon}
              // remove this if theres issues
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
            className={`${styles.megaMenuContainer} ${
              isOpen ? styles.open : ""
            }`}
          >
            <VStack
              justifyContent={"center"}
              alignItems={"center"}
              onClick={() => setIsOpen(false)}
            >
              {/* Row 1 */}
              <HStack
                justifyContent={"center"}
                alignItems={"flex-start"}
                py={"10px"}
                px={"10px"}
                gap={{ lg: "20px", xl: "30px" }}
              >
                {/* Immigration Services */}
                <VStack
                  alignItems={"flex-start"}
                  justifyContent={"center"}
                  gap={{
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
                        lg: "10px",
                        xl: "12px",
                        "2xl": "14px",
                      }}
                      fontWeight={700}
                      className={styles.menuHeader}
                      _hover={{ borderBottom: "2px solid #beab7c" }}
                    >
                      Immigration
                    </Text>
                  </Link>
                  {/* List */}
                  {/* Asylum */}
                  <Text
                    as={Link}
                    to={"/lumine-law/all-services/immigration/asylum"}
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    textAlign={"left"}
                    className={styles.menuText}
                  >
                    Asylum
                  </Text>
                  {/* Creative Worker Visa */}
                  {/* <Text
                    as={Link}
                    to={"/lumine-law/all-services/immigration/creative-worker"}
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    textAlign={"left"}
                    className={styles.menuText}
                  >
                    Creative Worker Visa
                  </Text> */}
                  {/* Skilled Worker Visa */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/immigration/skilled-worker-visa"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    textAlign={"left"}
                    className={styles.menuText}
                  >
                    Skilled Worker Visa
                  </Text>
                  {/* Spouse Visa */}
                  <Text
                    as={Link}
                    to={"/lumine-law/all-services/immigration/spouse-visa"}
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
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
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    UK Visitor Visa
                  </Text>

                  {/* Explore More */}
                  <Link
                    to={"/lumine-law/all-services/immigration"}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      fontSize={{
                        lg: "9px",
                        xl: "10px",
                        "2xl": "11px",
                      }}
                      fontWeight={700}
                      className={styles.menuText}
                      textAlign={"left"}
                    >
                      {/* ... */}
                      Explore More
                    </Text>
                  </Link>
                </VStack>

                {/* Residential Property */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                >
                  {/* Header */}
                  <Link
                    to={"/lumine-law/all-services/residential"}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      fontSize={{
                        lg: "10px",
                        xl: "12px",
                        "2xl": "14px",
                      }}
                      fontWeight={700}
                      className={styles.menuHeader}
                      _hover={{ borderBottom: "2px solid #beab7c" }}
                    >
                      Residential Property
                    </Text>
                  </Link>
                  {/* List */}
                  {/* Freehold and Leasehold Sales */}
                  <Text
                    as={Link}
                    to={"/lumine-law/all-services/residential/freehold-sales"}
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Freehold and Leasehold Sales
                  </Text>

                  {/* Freehold and Leasehold Purchases */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/residential/freehold-purchases"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Freehold and Leasehold Purchases
                  </Text>

                  {/* Lease Terms Advice */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/residential/lease-terms-advice"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Lease Terms Advice
                  </Text>

                  {/* Transfers of Equity */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/residential/transfer-of-equity"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Transfers of Equity
                  </Text>
                </VStack>

                {/* Commercial Property */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                >
                  {/* Header */}
                  <Link
                    to={"/lumine-law/all-services/commercial"}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      fontSize={{
                        lg: "10px",
                        xl: "12px",
                        "2xl": "14px",
                      }}
                      fontWeight={700}
                      className={styles.menuHeader}
                      _hover={{ borderBottom: "2px solid #beab7c" }}
                    >
                      Commercial Property
                    </Text>
                  </Link>
                  {/* List */}

                  {/* Lease Renewals */}
                  <Text
                    as={Link}
                    to={"/lumine-law/all-services/commercial/lease-renewals"}
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Lease Renewals
                  </Text>

                  {/* Purchase of Business and Licenses to Align */}
                  <Text
                    as={Link}
                    to={"/lumine-law/all-services/commercial/business-licenses"}
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Purchase of Business and Licenses to Align
                  </Text>

                  {/* Purchase of Commercial Property */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/commercial/purchase-commercial"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Purchase of Commercial Property
                  </Text>

                  {/* Sales of Commercial Property */}
                  <Text
                    as={Link}
                    to={"/lumine-law/all-services/commercial/sales-commercial"}
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Sales of Commercial Property
                  </Text>

                  {/* Explore More */}
                  <Link
                    to={"/lumine-law/all-services/commercial"}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      fontSize={{
                        lg: "9px",
                        xl: "10px",
                        "2xl": "11px",
                      }}
                      fontWeight={700}
                      className={styles.menuText}
                      textAlign={"left"}
                    >
                      {/* ... */}
                      Explore More
                    </Text>
                  </Link>
                </VStack>

                {/* Intellectual Property */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                >
                  {/* Header */}
                  <Link
                    to={"/lumine-law/all-services/intellectual-property"}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      fontSize={{
                        lg: "10px",
                        xl: "12px",
                        "2xl": "14px",
                      }}
                      fontWeight={700}
                      className={styles.menuHeader}
                      _hover={{ borderBottom: "2px solid #beab7c" }}
                    >
                      Intellectual Property
                    </Text>
                  </Link>
                  {/* List */}
                  {/* Copyright */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/intellectual-property/copyright"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Copyright
                  </Text>

                  {/* Patent */}
                  <Text
                    as={Link}
                    to={"/lumine-law/all-services/intellectual-property/patent"}
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Patent
                  </Text>

                  {/* Trademark */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/intellectual-property/trademark"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Trademark
                  </Text>
                </VStack>

                {/* Dispute Resolution and Civil Litigation Services*/}
                <VStack
                  alignItems={"flex-start"}
                  gap={{
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                >
                  {/* Header */}
                  <Link
                    to={"/lumine-law/all-services/dispute-resolution"}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      fontSize={{
                        lg: "10px",
                        xl: "12px",
                        "2xl": "14px",
                      }}
                      fontWeight={700}
                      className={styles.menuHeader}
                      _hover={{ borderBottom: "2px solid #beab7c" }}
                    >
                      Dispute Resolution and Civil Litigation Services
                    </Text>
                  </Link>
                  {/* List */}
                  {/* Building Contracts */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/dispute-resolution/building-contracts"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Building Contracts
                  </Text>

                  {/* Contract Disputes */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/dispute-resolution/contract-disputes"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Contract Disputes
                  </Text>

                  {/* Contracts for the Supply of Goods and Services */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/dispute-resolution/supply-goods-services"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Contracts for the Supply of Goods and Services
                  </Text>

                  {/* Corporate and Personal Bankruptcy Matters */}
                  {/* <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/dispute-resolution/bankruptcy-matters"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Corporate and Personal Bankruptcy Matters
                  </Text> */}

                  {/* Debt Matters */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/dispute-resolution/debt-matters"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Debt Matters
                  </Text>

                  {/* Explore More */}
                  <Link
                    to={"/lumine-law/all-services/dispute-resolution"}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      fontSize={{
                        lg: "9px",
                        xl: "10px",
                        "2xl": "11px",
                      }}
                      fontWeight={700}
                      className={styles.menuText}
                      textAlign={"left"}
                    >
                      {/* ... */}
                      Explore More
                    </Text>
                  </Link>
                </VStack>
              </HStack>

              {/* Row 2 */}
              <HStack
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                py={"10px"}
                gap={{ lg: "20px", xl: "30px" }}
              >
                {/* Landlord and Tenant Disputes */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                >
                  {/* Header */}
                  <Link
                    to={"/lumine-law/all-services/landlord-tenant"}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      fontSize={{
                        lg: "10px",
                        xl: "12px",
                        "2xl": "14px",
                      }}
                      fontWeight={700}
                      className={styles.menuHeader}
                      _hover={{ borderBottom: "2px solid #beab7c" }}
                    >
                      Landlord and Tenant Disputes
                    </Text>
                  </Link>
                  {/* List */}
                  {/* Claims for Disrepair */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/landlord-tenant/claims-disrepair"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Claims for Disrepair
                  </Text>

                  {/* Possession Claims */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/landlord-tenant/possession-claims"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Possession Claims
                  </Text>

                  {/* Recovery of Rent Arrears */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/landlord-tenant/recovery-rent"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Recovery of Rent Arrears
                  </Text>
                </VStack>
                {/* Family and Children */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{
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
                        lg: "10px",
                        xl: "12px",
                        "2xl": "14px",
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
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Divorce{" "}
                  </Text>

                  {/* Domestic Violence */}
                  <Text
                    as={Link}
                    to={"/lumine-law/all-services/family/domestic-violence"}
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Domestic Violence
                  </Text>

                  {/* Parental Responsibility */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/family/parental-responsbility"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Parental Responsibility
                  </Text>

                  {/* Pre Nuptial Agreement */}
                  <Text
                    as={Link}
                    to={"/lumine-law/all-services/family/nuptial-agreement"}
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Pre Nuptial Agreements{" "}
                  </Text>

                  {/* Explore more */}
                  <Link
                    to={"/lumine-law/all-services/family-and-children"}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      fontSize={{
                        lg: "9px",
                        xl: "10px",
                        "2xl": "11px",
                      }}
                      fontWeight={700}
                      className={styles.menuText}
                      textAlign={"left"}
                    >
                      {/* ... */}
                      Explore More
                    </Text>
                  </Link>
                </VStack>

                {/* Wills and Probate */}
                <VStack
                  alignItems={"flex-start"}
                  gap={{
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                >
                  {/* Header */}
                  <Link
                    to={"/lumine-law/all-services/wills-probate"}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      fontSize={{
                        lg: "10px",
                        xl: "12px",
                        "2xl": "14px",
                      }}
                      fontWeight={700}
                      className={styles.menuHeader}
                      _hover={{ borderBottom: "2px solid #beab7c" }}
                    >
                      Wills and Probate
                    </Text>
                  </Link>
                  {/* List */}
                  {/* Inheritance Tax Planning */}
                  {/* <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/wills-probate/inheritance-tax-planning"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Inheritance Tax Planning
                  </Text> */}

                  {/* Probate */}
                  <Text
                    as={Link}
                    to={"/lumine-law/all-services/wills-probate/probate"}
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Probate
                  </Text>

                  {/* Succession Planning */}
                  <Text
                    as={Link}
                    to={
                      "/lumine-law/all-services/wills-probate/succession-planning"
                    }
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Succession Planning
                  </Text>

                  {/* Wills */}
                  <Text
                    as={Link}
                    to={"/lumine-law/all-services/wills-probate/wills"}
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Wills
                  </Text>

                  {/* Trusts */}
                  <Text
                    as={Link}
                    to={"/lumine-law/all-services/wills-probate/trusts"}
                    fontSize={{
                      lg: "9px",
                      xl: "10px",
                      "2xl": "11px",
                    }}
                    fontWeight={400}
                    className={styles.menuText}
                    textAlign={"left"}
                  >
                    Trusts
                  </Text>

                  {/* Explore more */}
                  <Link
                    to={"/lumine-law/all-services/wills-probate"}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      fontSize={{
                        lg: "9px",
                        xl: "10px",
                        "2xl": "11px",
                      }}
                      fontWeight={700}
                      className={styles.menuText}
                      textAlign={"left"}
                    >
                      {/* ... */}
                      Explore More
                    </Text>
                  </Link>
                </VStack>
              </HStack>
            </VStack>
          </Box>
        </Box>
      );
  };

  return (
    <>
      <Placeholder />
    </>
  );
};

export default ServicesMegaMenu;
