import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

const NavItem = styled.li`
  ${tw`
    text-sm
    text-black
    font-medium
    mr-3
    transition: duration-300 ease-in-out 
    
    md:text-base
    md:mr-5
  `}

  &:hover >a {
    ${tw`
      transition: duration-300 ease-in-out
      text-red-400
      cursor-pointer
    `}
  }
`;

function NavLi() {
  return (
    <>
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
    </>
  );
}

export default NavLi;
