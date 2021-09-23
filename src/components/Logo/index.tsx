import React from "react";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";
import CarLogoImg from "assets/images/car-logo.png";

//#CSS PART START
const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    font-bold
    text-black
    m-1

    md:text-2xl
  `}
`;

const Image = styled.div`
  ${tw`
    w-auto
    h-6

    md:h-9
  `}

  &>img {
    width: auto;
    height: 100%;
  }
`;
//#CSS PART END

function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} alt="Logo" />
      </Image>
      <LogoText>Youcar.</LogoText>
    </LogoContainer>
  );
}

export default Logo;
