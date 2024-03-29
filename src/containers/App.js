import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { withRouter } from 'react-router';

import Routes from './Routes';
import Loader from '../components/load';
const Navigation = lazy(() => import('../components/navigation'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Navigation />
        <Main>
          <Routes />
        </Main>
      </Router>
      <GlobalStyle />
    </Suspense>
  );
}

export default withRouter(App);

const GlobalStyle = createGlobalStyle`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
/*# sourceMappingURL=normalize.min.css.map */
:root {
  -ms-overflow-style: -ms-autohiding-scrollbar;
  overflow-y: scroll;
  text-size-adjust: 100%;
  box-sizing: border-box;
  cursor: default;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  min-width: 300px;
  overflow-x: hidden;
  overflow-y: scroll;
}
html, body {
  font: 16px/1.5 BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-style: normal;
  padding: 0;
  margin: 0;
  color: #f9f9f9;
  background-color: #252525;
}

ul, ol {
  padding-left: 0;
}
ul ul, ul ol, ol ol, ol ul {
  padding-left: 1.5em;
}
ul li, ol li {
  margin-bottom: 0.75em;
  line-height: 1.6;
}
@media all and (max-width: 1000px) {
  html, body {
    font-size: 16px;
  }
  li {
    list-style-position: outside;
    margin-left: 1em;
  }
}

#root {
  width: 100%;
  overflow: hidden;
}
`;

const Main = styled.main`
  position: relative;
  width: 100%;
`;
