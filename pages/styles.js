import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #2b2b2b;
    --color-yellow: #f3e18a;
    --color-red: #f97565;
    --color-green: #7ac7c0;
    --color-purple: #c48ce8;
    --color-text: #fff;
    --color-box: rgba(0, 0, 0, 0.2);
    --color-box-label: rgba(255, 255, 255, 0.2);
    --shadow-text: 0 3px 3px rgba(0, 0, 0, 0.3);
    --shadow-box: 0 3px 10px rgba(0, 0, 0, 0.1);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-background);
    margin: 0;
    color: var(--color-text);
    font-family: sans-serif;
  }

  @keyframes color-borders {
    0% { border-color: var(--color-yellow); }
    25% { border-color: var(--color-red); }
    50% { border-color: var(--color-green); }
    75% { border-color: var(--color-purple); }
    100% { border-color: var(--color-yellow); }
  }
`

const Grid = styled.div`
  min-height: 100vh;
  padding: 1rem;
  aspect-ratio: 16 / 9;
  display: grid;
  grid-template: 1fr 2fr / 1fr 3fr;
  gap: 1rem;
`

export {
  GlobalStyle,
  Grid
}
