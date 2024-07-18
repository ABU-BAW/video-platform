import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    *{
        
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body{
        font-size: 1.2rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color:#FFFFFF;
    }

    a{
        text-decoration: none;
        color: #fff;
    }

    button, input, textarea{
        font-family: inherit;
        font-size: inherit;
        outline: none;
    }

`;