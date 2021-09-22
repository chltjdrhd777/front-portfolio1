import React from "react";
import styled from "styled-components";
import { css } from "@emotion/css/macro";
import tw from "twin.macro";

interface State {
  [key: string]: any;
  test: string;
}

class Css {
  static readonly PageContainer = (props?: State) => css`
    ${tw`
      flex
      flex-col
      w-full
      h-full
      items-center
      overflow-hidden
    `}

    background-color: ${props?.test === "yes" ? "black" : "pink"};
  `;
}

function HomePage() {
  return <main className={Css.PageContainer({ test: "no" })}>hello test</main>;
}

export default HomePage;
