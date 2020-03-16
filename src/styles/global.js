import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import '~antd/dist/antd.css';
  @import url('https://fonts.googleapis.com/css?family=Baloo+Chettan+2:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    font-family: 'Baloo Chettan', Helvetica, sans-serif !important;
    background: #f0f2f5;
    -webkit-font-smothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }

`;
