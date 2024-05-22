import { Global, css } from "@emotion/react";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url("https://fonts.cdnfonts.com/css/circular-std-book");
        @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");

        .dotted {
          background-image: radial-gradient(#a5dbbd 1px, transparent 0);
          background-size: 20px 20px;
          background-position: -19px -19px;
        }
      `}
    />
  );
}
