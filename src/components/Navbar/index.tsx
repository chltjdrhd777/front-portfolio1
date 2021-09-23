import React from "react";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";
import Logo from "components/Logo";
import NavItems from "./NavItems";

//#CSS PART START
const NavbarContainer = styled.nav`
  ${tw`
    w-full
    max-w-2xl
    flex
    justify-between
    items-center

    lg:pl-12
    lg:pr-12
  `}
`;
//#CSS PART END

function NavBar() {
  return (
    <NavbarContainer>
      <Logo />
      <NavItems />
    </NavbarContainer>
  );
}

export default NavBar;