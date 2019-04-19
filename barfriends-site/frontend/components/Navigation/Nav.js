import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = '../../static/images/Logo.svg';

const NavStyles = styled.div`
  background: ${props => props.theme.black};
  position:fixed;
  height: 85px;
  width: 100vw;
  line-height: 70px;
  `;

const NavItems = styled.div`
  width: 170px;
  height: 70px;
  color: grey;
  text-align: center;
  font-weight: 300;
  font-size: 17px;
  font-weight: 300;
    a {
      color: white;
      width: 140px;
      text-align: center;
      padding: 10px 15px;
      ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
      :hover {
        color: grey;
        transition: 0.25s ease-in-out;
      }
    }
`;

const NavBox = styled.div`
  //Delete Me
    /* background: ${props => props.theme.black}; */
  display: grid;
  grid-template-columns: 120px 120px 120px 120px;
  width: 100vw;
  @media (max-width: ${props => props.theme.mobileWidth}) {
    display: none;
    }
`;
const StyleLogo = styled.img`
  height: 65px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: -0px -0px 5px rgba(106, 106, 106, .20);
  z-index: 10;
`;
const Nav = () => (
  <NavStyles>
    <NavBox>
      <NavItems>
        <Link href='/index'>
          <a>
            <StyleLogo src={Logo} alt=""/>
          </a>
        </Link>
      </NavItems>
      <NavItems style={{marginTop: '15px'}}>
        <Link href='/join'>
          <a>
              Join
          </a>
        </Link>
      </NavItems>
      <NavItems style={{marginTop: '15px'}}>
        <Link href='/business'>
          <a>
              Business
          </a>
        </Link>
      </NavItems>
      <NavItems style={{marginTop: '15px'}}>
        <Link href='/terms'>
          <a>
              Terms
          </a>
        </Link>
      </NavItems>
    </NavBox>
  </NavStyles>
);

export default Nav;