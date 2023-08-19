import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
  font-family: PixelTitle;
  src: url('/fonts/pixel1.ttf') format('truetype');
}

@font-face {
  font-family: PixelFont;
  src: url('/fonts/pixel2.ttf') format('truetype');
}

/* @font-face {
  font-family: PixelText;
  src: url('/fonts/pixel3.ttf') format('truetype');
} */

@font-face {
  font-family: PixelText;
  src: url('/fonts/pixel4.otf') format('opentype');
}

* {
  box-sizing: border-box;
  color: ${({ theme }) => theme.textPure};
  cursor: url('https://fav.farm/👆') 15 0 , auto;
  margin: 0;
  padding: 0;

  ::-webkit-scrollbar {
    height: 5px;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.gradientVertical};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.border};
  }
}

body {
  background-image: url('/images/fundo-pixel.gif');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: PixelFont , sans-serif;
  min-height: 100vh;
  max-width: 100vw;
  padding-bottom: 5rem;
}

h1, h2, h3, h4, h5, h6 {
  font-family: PixelTitle , sans-serif;
}

img {
  max-width: 100%;
  width: 100%;
}

ul {
  list-style: none;
}

button:hover {
  cursor: url('https://fav.farm/👆') 15 0 , auto;
}

p {
  font-family: PixelText, sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
}

a {
  text-decoration: none;
}

.app-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  max-width: 85rem;
  padding: 0 1rem;
  width: 100%;

  @media ( width <= 1450px ) {
    max-width: 70rem;
  }

  @media ( width <= 1000px ) {
    max-width: 50rem;
  }

  @media ( width <= 700px ) {
    padding: 0 2rem;
  }
}

`;
