import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta';

const theme = {
  orange: '#FF7000',
  black: '#000',
  ogBlack: '#1D1D1D',
  offWhite: '#EDEDED',
  maxWidth: '85vw',
  mobileWidth: '1025px',
  NavigationMarginTop: '50px',
  bs: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};
const StylePage = styled.div`
  color: ${props => props.theme.offWhite};
  overflow-x: hidden;
`;
const Inner = styled.div`
  position: absolute;
  max-width:100vw;
  @media (max-width: 850px ) {
  max-width:100vw;
  margin: 0;
  };
`;

injectGlobal`
@font-face {
  font-family: 'Open Sans', sans-serif;
  src: url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
  /* font-weight: normal; */
  font-style: normal;
}
  html {
    box-sizing: border-box;
    font-size: 10px;
    }
    * , *:before, *:after {
      box-sizing: inherit;
      color: ${theme.offWhite};
    }
    body {
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2;
      font-family: 'Open Sans';
      /* Control background to the page */
      background: ${theme.black};
      color: white;
      overflow-x: hidden;
    ::-webkit-scrollbar { 
      display: none; 
    }   
    }
    a {
      text-decoration: none;
      color: ${theme.offWhite};
    }
`;
export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StylePage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StylePage>
      </ThemeProvider>
    );
  }
};