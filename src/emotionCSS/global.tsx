import React from "react";
import { Global, css } from "@emotion/react";

const globalCSS = css`
  @import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap");

  @font-face {
    font-family: "comfort";
    src: url("./assets/fonts/Comfortaa-Medium.woff2") format("woff2"),
      url("./assets/fonts/Comfortaa-Medium.woff") format("woff"),
      url("./assets/fonts/Comfortaa-Medium.ttf") format("truetype");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
  }

  body {
    font-family: "Whitney Medium";
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

function GlobalStyle() {
  return <Global styles={globalCSS} />;
}

export default GlobalStyle;
