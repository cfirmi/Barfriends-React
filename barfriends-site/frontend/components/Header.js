import React, { Component } from 'react'
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Navigation/Nav';
import MobileNav from './Navigation/MobileNav';
import MobileDropNav from './Navigation/MobileDropNav';

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
  
  state = {
    DropNavOpen: false,
    HamburgerClose: false
  };
  NavToggleClickHandler = () => {
    this.setState((prevState) => {
      return {DropNavOpen: !prevState.DropNavOpen};
    });
  };
  render() {
    let dropDown;
    if (this.state.DropNavOpen) {
      dropDown = <MobileDropNav />
    }
    return (
      <div>
      <HeaderStyles> 
        <Nav />
      </HeaderStyles>

      <MobileHeaderStyles>
        <MobileNav NavClickHandler={this.NavToggleClickHandler} />
        {dropDown}
      </MobileHeaderStyles>
      </div>
    )
  }
}



export default Header;