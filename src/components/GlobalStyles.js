import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

h1, h2, h3, p {
    color: white;
    font-family: poppins, sans-serif
}

body {
    background: linear-gradient(to right, black, #1a1a1a);
    margin-left: 10%;
    margin-right: 10%;
    overflow-x: hidden;

        @media (max-width: 900px) {
        margin-left: 5%;
        margin-right: 5%;
    }
}
`

export default GlobalStyles
