import { HStack, Image, Text, Box, Icon } from "@chakra-ui/react";
import { Button } from "../../lib/chakra-components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuTrigger,
} from "../../lib/chakra-components/ui/menu";
import LumineLogo from "../../assets/logo.png";
import MenuIcon from "../../assets/menu-dropdown-icon.png";

const Navbar = () => {
  return (
    <>
      <Box width={"100vw"}>
        {/* Navbar Top */}
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          px={"20px"}
          py={"5px"}
        >
          <HStack>
            <Image src={LumineLogo} alt="" height={"50px"} width={"50px"} />
            <Text fontSize={"24px"} fontWeight={500} color="#BEAB7C">
              LUMINE SOLICITORS
            </Text>
          </HStack>
          <Button
            fontWeight={400}
            fontSize={"15px"}
            color={"white"}
            background={"none"}
            borderColor={"white"}
            borderRadius={"10px"}
            cursor={"pointer"}
            _hover={{
              backgroundColor: "#30302e",
            }}
            _active={{
              color: "#BEAB7C",
            }}
          >
            Contact Us
          </Button>
        </HStack>
        {/* Navbar Bottom */}
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"0.5px solid white"}
          borderRight={"none"}
          borderLeft={"none"}
          px={"20px"}
          py={"5px"}
        >
          <HStack gap={"45px"}>
            {/* People */}
            <MenuRoot>
              <MenuTrigger asChild>
                <Button
                  backgroundColor={"inherit"}
                  color={"white"}
                  size="sm"
                  fontSize={"14px"}
                  fontWeight={500}
                  _hover={{
                    backgroundColor: "#30302e",
                  }}
                  display={"flex"}
                >
                  People
                  <Image src={MenuIcon} />
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
            <MenuRoot
              _active={{
                color: "#BEAB7C",
              }}
            >
              <MenuTrigger asChild>
                <Button
                  backgroundColor={"inherit"}
                  color={"white"}
                  size="sm"
                  fontSize={"14px"}
                  fontWeight={500}
                  _hover={{
                    backgroundColor: "#30302e",
                  }}
                >
                  Services
                  <Image src={MenuIcon} />
                </Button>
              </MenuTrigger>
              <MenuContent
                border={"0.5px solid #FFFFFF"}
                borderRadius={"8px"}
                width={"200px"}
              >
                <MenuItem
                  value="immigration-services"
                  cursor={"pointer"}
                  fontSize={"12px"}
                  fontWeight={500}
                >
                  Immigration Services
                </MenuItem>
                <MenuItem
                  value="property"
                  cursor={"pointer"}
                  fontSize={"12px"}
                  fontWeight={500}
                >
                  Residential & Commercial Property{" "}
                </MenuItem>
                <MenuItem
                  value="res-litigation"
                  cursor={"pointer"}
                  fontSize={"12px"}
                  fontWeight={500}
                >
                  Dispute Resolution & Civil Litigation{" "}
                </MenuItem>
                <MenuItem
                  value="disputes"
                  cursor={"pointer"}
                  fontSize={"12px"}
                  fontWeight={500}
                >
                  Landlord & Tenant Disputes{" "}
                </MenuItem>
                <MenuItem
                  value="fam-children"
                  cursor={"pointer"}
                  fontSize={"12px"}
                  fontWeight={500}
                >
                  Family & Children
                </MenuItem>
                <MenuItem
                  value="injury"
                  cursor={"pointer"}
                  fontSize={"12px"}
                  fontWeight={500}
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
                  fontSize={"14px"}
                  fontWeight={500}
                  _hover={{
                    backgroundColor: "#30302e",
                  }}
                  display={"flex"}
                >
                  Menu
                  <Image src={MenuIcon} />
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
          <HStack gap={"45px"}>
            <Text
              fontSize={"14px"}
              fontWeight={500}
              textDecoration={"underline"}
            >
              info@luminelaw.com
            </Text>
            <Text fontSize={"14px"} fontWeight={500}>
              020300062508
            </Text>
            <Text fontSize={"14px"} fontWeight={500}>
              02039550246
            </Text>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default Navbar;
