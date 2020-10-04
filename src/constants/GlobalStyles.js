import { css } from "@emotion/core";
import reset from "emotion-reset";

const globalStyles = css`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 12px;
    background-color: #f2f3f6;
    color: black;
  }
`;

export default globalStyles;
