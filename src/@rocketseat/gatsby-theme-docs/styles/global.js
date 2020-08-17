import React from "react";
import { Global, css } from "@emotion/core";
import ThemeGlobal from "@rocketseat/gatsby-theme-docs/src/styles/global";
import {
  Heading,
  SubItem,
} from "@rocketseat/gatsby-theme-docs/src/components/Sidebar/styles";

export default function GlobalStyle() {
  return (
    <React.Fragment>
      <ThemeGlobal />
      <Global
        styles={css`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: 00;
          }

          a {
            word-break: break-all;
          }

          ${Heading} {
            font-size: 16px !important;
            font-weight: 900 !important;
          }
          ${SubItem} {
            margin-left: 25px;
          }
        `}
      />
    </React.Fragment>
  );
}
