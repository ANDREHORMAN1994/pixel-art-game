import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './redux/store';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Provider store={ store }>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
);
