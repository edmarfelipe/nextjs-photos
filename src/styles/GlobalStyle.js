import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-display: swap;
    font-family: 'Petrona';
    font-style: 'normal';
    font-weight: 1 999;
    src: url('/fonts/petrona.ttf') format('truetype');
  }

  body {
    font-family: 'Petrona', serif;
    background: #222325;
  }
`
