import { createGlobalStyle } from 'styled-components';

import 'react-circular-progressbar/dist/styles.css'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1rem;
        background: #7159c1;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root {
        width: 100vw;
        height: 100vh;
    }

    button, a {
        cursor: pointer;
    }
`;