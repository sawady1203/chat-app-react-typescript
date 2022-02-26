import { css } from "@emotion/react";

const globals = css`
  html,
  body {
    font-size: 15px;
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    /* バウンドしないようにする */
    overscroll-behavior: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  *:focus {
    outline: none;
  }
`;

export default globals;
