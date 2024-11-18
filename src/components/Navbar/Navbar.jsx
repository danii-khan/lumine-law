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
            _hover={{
              color: "black",
              backgroundColor: "white",
            }}
            css={{
              "&[data-state=open]": {
                color: "black",
                backgroundColor: "white",
              },
              "& img:last-child": {
                display: "none",
              },
              "&:hover img:first-of-type, &[data-state=open] img:first-of-type":
                {
                  display: "none",
                },
              "&:hover img:last-child, &[data-state=open] img:last-child": {
                display: "block",
              },
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
        gap={"20px"}
        height={"100%"}
      >
        {/* People */}
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
              _hover={{
                color: "black",
                backgroundColor: "white",
              }}
              css={{
                "&[data-state=open]": {
                  color: "black",
                  backgroundColor: "white",
                },
                "& img:last-child": {
                  display: "none",
                },
                "&:hover img:first-of-type, &[data-state=open] img:first-of-type":
                  {
                    display: "none",
                  },
                "&:hover img:last-child, &[data-state=open] img:last-child": {
                  display: "block",
                },
              }}
            >
              People
              <Image src={MenuIcon} />
              <Image src={BlackMenuIcon} />
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="new-txt-a">New Text File</MenuItem>
            <MenuItem value="new-file-a">New File...</MenuItem>
            <MenuItem value="new-win-a">New Window</MenuItem>
            <MenuItem value="open-file-a">Open File...</MenuItem>
            <MenuItem value="export-a">Export</MenuItem>
          </MenuContent>
        </MenuRoot>

        {/* Services */}
        <ServicesMegaMenu />

        {/* Menu */}
        <MenuRoot>
          <MenuTrigger asChild>
            <Button
              backgroundColor={"inherit"}
              color={"white"}
              size="sm"
              fontSize={"18px"}
              fontWeight={500}
              height={"100%"}
              borderRadius="0px"
              position="relative"
              _hover={{
                color: "black",
                backgroundColor: "white",
              }}
              css={{
                "&[data-state=open]": {
                  color: "black",
                  backgroundColor: "white",
                },
                "& img:last-child": {
                  display: "none",
                },
                "&:hover img:first-of-type, &[data-state=open] img:first-of-type":
                  {
                    display: "none",
                  },
                "&:hover img:last-child, &[data-state=open] img:last-child": {
                  display: "block",
                },
              }}
            >
              Menu
              <Image src={MenuIcon} />
              <Image src={BlackMenuIcon} />
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="new-txt-a">New Text File</MenuItem>
            <MenuItem value="new-file-a">New File...</MenuItem>
            <MenuItem value="new-win-a">New Window</MenuItem>
            <MenuItem value="open-file-a">Open File...</MenuItem>
            <MenuItem value="export-a">Export</MenuItem>
          </MenuContent>
        </MenuRoot>
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
        px={"20px"}
        style={{ fontFamily: "CeraRoundPro" }}
      >
        {/* Logo + Title */}
        <GridItem py={"5px"}>
          <HStack justifyContent={"flex-start"} alignItems={"center"}>
            <Image src={LumineLogo} alt="" height={"50px"} width={"50px"} />
            <Text fontSize={"24px"} fontWeight={500}>
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
            fontSize={"15px"}
            color={"white"}
            background={"none"}
            borderColor={"white"}
            borderRadius={"10px"}
            cursor={"pointer"}
            _hover={{
              // backgroundColor: "#30302e",
              borderColor: "#BEAB7C",
              color: "#BEAB7C",
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
