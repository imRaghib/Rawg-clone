import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack justify={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
