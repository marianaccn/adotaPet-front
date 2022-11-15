import { createGlobalStyle } from 'styled-components';
import { Colors } from './theme';
export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

    html, body{
        height: 100vh;
    }

    body{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body, input, button, textarea{
        font-weight: 500;
        font-family: Poppins;
        font-size: 1.6rem;
        color: ${Colors.textBase};
    }

    @media(min-width: 700px) {
        :root{
            font-size: 62.5%;
        }
    }
`;
