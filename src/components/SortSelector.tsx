import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Items</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
