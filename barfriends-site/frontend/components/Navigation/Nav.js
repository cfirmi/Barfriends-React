import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = '../../static/images/Logo.svg';

const NavStyles = styled.div`
  height: 44px;
  width: 100vw;
  font-weight: 200;
`;
const NavItems = styled.div`
  width: 100px;
  text-align: center;
  line-height: 55px;
  color: white;
  :hover {
    color: green;
  }
`;

const NavBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 800px;
  /* margin-left: 50%;
  transform: translateX(-50%);   */
  @media (max-width: 1200px) {
    
  };
  @media (max-width: 764px) {
    display: none;
    }
`;
const StyleLogo = styled.img`
  height: 25px;
  margin-top: 25%;
  transform: translateY(-50%);
`;
const Nav = () => (
  <NavStyles>
    <NavBox>
    <Link href='#'>
        <a>
          <NavItems>
                <StyleLogo src={Logo} alt=""/>
          </NavItems>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <NavItems>
                download
          </NavItems>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <NavItems>
              owners
          </NavItems>
        </a>
      </Link>
    </NavBox>
  </NavStyles>
);

export default Nav;