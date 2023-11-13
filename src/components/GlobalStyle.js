import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    font-family: 'HakgyoansimWoojuR';
    line-height: 18px;
    ul{list-style: none;}
    a{text-decoration: none; color: #333333;}
}
body{
    overflow-x: hidden;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
}
`

export default GlobalStyle;