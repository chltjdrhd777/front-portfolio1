import React from "react";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";
import { Link } from "react-router-dom";

//#CSS PART START
const ListContainer = styled.ul`
  ${tw`
    flex
  `}
`;

const NavItem = styled.li`
  ${tw`
    text-xs
    text-black
    font-medium
    mr-1
    cursor-pointer
    transition: duration-300 ease-in-out hover:text-gray-700
    
    md:text-base
    md:mr-5
  `}
`;
//#CSS PART END

function NavItems() {
  return (
    <ListContainer>
      <NavItem>
        <Link to="/home">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/cars">Cars</Link>
      </NavItem>
      <NavItem>
        <Link to="/services">Services</Link>
      </NavItem>
      <NavItem>
        <Link to="/contact">Contact Us</Link>
      </NavItem>
    </ListContainer>
  );
}

export default NavItems;
