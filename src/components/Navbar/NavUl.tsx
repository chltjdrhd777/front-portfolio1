import React from "react";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { deviceSizeUnits } from "emotionCSS/theme";
import Menu from "./Menu";
import NavLists from "./NavLists";

//#CSS PART START
const NavUlContainer = styled.ul`
  ${tw`
    flex
    items-center
    content-center
  `}
`;
//#CSS PART END

function NavItems() {
  //640px 미만(즉 핸드폰)은 해당 미디어쿼리를 적용하겠다
  //따로 css 파일을 만들지 않고, 해당 패키지를 이용해보는건 편한거같다. 깔끔하고
  const isMobile = useMediaQuery({ maxWidth: deviceSizeUnits.tabletS });

  //만약 현재 width가 모바일수준이면, 밑의 리스트를 햄버거메뉴로 만들어서 보여줄것이다

  return (
    <NavUlContainer>
      {isMobile ? (
        <Menu>
          <NavLists />
        </Menu>
      ) : (
        <NavLists />
      )}
    </NavUlContainer>
  );
}

export default NavItems;
