import { HStack, Image, Text, Grid, GridItem } from "@chakra-ui/react";
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
import { useState } from "react";

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
                "&:hover img:first-child, &[data-state=open] img:first-child": {
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
                "&:hover img:first-child, &[data-state=open] img:first-child": {
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
          <MenuContent
            // border={"0.5px solid #FFFFFF"}
            borderRadius={"8px"}
            width={"200px"}
          >
            <MenuItem
              value="immigration-services"
              cursor={"pointer"}
              fontSize={"12px"}
              fontWeight={500}
              _hover={{
                color: "#BEAB7C",
              }}
            >
              Immigration Services
            </MenuItem>
            <MenuItem
              value="property"
              cursor={"pointer"}
              fontSize={"12px"}
              fontWeight={500}
              _hover={{
                color: "#BEAB7C",
              }}
            >
              Residential & Commercial Property{" "}
            </MenuItem>
            <MenuItem
              value="res-litigation"
              cursor={"pointer"}
              fontSize={"12px"}
              fontWeight={500}
              _hover={{
                color: "#BEAB7C",
              }}
            >
              Dispute Resolution & Civil Litigation{" "}
            </MenuItem>
            <MenuItem
              value="disputes"
              cursor={"pointer"}
              fontSize={"12px"}
              fontWeight={500}
              _hover={{
                color: "#BEAB7C",
              }}
            >
              Landlord & Tenant Disputes{" "}
            </MenuItem>
            <MenuItem
              value="fam-children"
              cursor={"pointer"}
              fontSize={"12px"}
              fontWeight={500}
              _hover={{
                color: "#BEAB7C",
              }}
            >
              Family & Children
            </MenuItem>
            <MenuItem
              value="injury"
              cursor={"pointer"}
              fontSize={"12px"}
              fontWeight={500}
              _hover={{
                color: "#BEAB7C",
              }}
            >
              Personal Injury
            </MenuItem>
          </MenuContent>
        </MenuRoot>
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
                "&:hover img:first-child, &[data-state=open] img:first-child": {
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
