import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta';

const theme = {
  orange: '#FF7000',
  black: '#000',
  white: '#fff',
  ogBlack: '#1D1D1D',
  offWhite: '#EDEDED',
  maxWidth: '85vw',
  mobileWidth: '1025px',
  trueMobileWidth: '600px',
  NavigationMarginTop: '80px',
  bs: '0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  bs2: '0 -5px 25px 1px rgba(105, 105, 105, .90), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  head1: '70px',
  head2: '52px',
  head3: '40px',
  head4: '30px',
};
const StylePage = styled.div`
  color: ${props => props.theme.offWhite};
  overflow-x: hidden;
`;
const Inner = styled.div`
  position: absolute;
  max-width:100vw;
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
      color: ${theme.black};
    }
    body {
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2;
      font-family: 'Open Sans';
      /* Control background to the page */
      background: ${theme.black};
      color: ${theme.black};
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
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