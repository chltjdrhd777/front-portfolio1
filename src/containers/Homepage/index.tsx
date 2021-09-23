import React from "react";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";
import NavBar from "components/Navbar";

//#CSS PART START
const PageContainer = styled.section`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden    
  `}
`;
//#CSS PART END

function HomePage() {
  return (
    <PageContainer>
      <NavBar />
    </PageContainer>
  );
}

export default HomePage;
