import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

h1, h2, h3, p {
    color: white;
    font-family: poppins, sans-serif
}

body {
    /* background: black; */
    /* background: linear-gradient(90deg, rgba(42,42,45,1) 0%, rgba(28,28,31,1) 57%, rgba(42,42,47,1) 100%); */
    background: linear-gradient(to right, black, #1a1a1a);
    margin-left: 10%;
    margin-right: 10%;
}
`

export default GlobalStyles
