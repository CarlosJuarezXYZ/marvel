import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { css, Global } from "@emotion/react";
import { colors } from './ui';

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&family=Raleway:wght@600;800&family=Roboto:wght@300;400;500;700&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter;
  }
  body{
    background-image: url("https://p4.wallpaperbetter.com/wallpaper/602/61/148/dark-awesome-marvel-america-wallpaper-preview.jpg");
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
