import React, { Component } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Navigation/Nav';
import MobileNav from './Navigation/MobileNav';
import DropDown from './Navigation/MobileDropNav';


Router.onRouteChangeStart = () => {
    NProgress.start();
}
Router.onRouteChangeComplete = () => {
    NProgress.done()
}
Router.onRouteChangeError = () => {
    NProgress.done()
}

const HeaderStyles = styled.div` 
  display: inline-block;
  @media (max-width: 764px) {
    display: none;
  };
`;
const MobileHeaderStyles = styled.div`  
    display: none;
    z-index: 100;
  @media (max-width: 764px) {
    display: inline-block;
  };
`;

class Header extends Component {
  render() {
    return (
      <div>
        <HeaderStyles> 
          <Nav />
        </HeaderStyles>
        <MobileHeaderStyles>
          <MobileNav />
          <DropDown />
        </MobileHeaderStyles >
      </div>
    )
  }
}



export default Header;
export { LOCAL_STATE_QUERY, TOGGLE_NAV_MUTATION };