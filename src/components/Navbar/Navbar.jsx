import { HStack, Image, Text } from "@chakra-ui/react";
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

const Navbar = () => {
  return (
    <>
      <HStack
        width={"100vw"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={"20px"}
        py={"5px"}
      >
        {/* logo + menu */}
        <HStack gap={"150px"}>
          {/* Logo + Title */}
          <HStack>
            <Image src={LumineLogo} alt="" height={"50px"} width={"50px"} />
            <Text fontSize={"24px"} fontWeight={500} color="#BEAB7C">
              Lumine Solicitors
            </Text>
          </HStack>
          {/* Menu Options */}
          <HStack>
            {/* People */}
            <MenuRoot>
              <MenuTrigger asChild>
                <Button
                  backgroundColor="inherit"
                  color="white"
                  size="sm"
                  fontSize="14px"
                  fontWeight={500}
                  _hover={{
                    color: "#BEAB7C",
                  }}
                  css={{ "&[data-state=open]": { color: "#BEAB7C" } }}
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
            <MenuRoot>
              <MenuTrigger asChild>
                <Button
                  backgroundColor={"inherit"}
                  color={"white"}
                  size="sm"
                  fontSize={"14px"}
                  fontWeight={500}
                  _hover={{
                    color: "#BEAB7C",
                  }}
                  css={{ "&[data-state=open]": { color: "#BEAB7C" } }}
                >
                  Services
                  <Image src={MenuIcon} />
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
                  fontSize={"14px"}
                  fontWeight={500}
                  _hover={{
                    color: "#BEAB7C",
                  }}
                  css={{
                    "&[data-state=open]": { color: "#BEAB7C" },
                  }}
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
        </HStack>

        {/* Contact Button */}
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
      </HStack>
    </>
  );
};

export default Navbar;
