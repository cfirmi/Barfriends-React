import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = '../../static/images/Logo.svg';

const NavStyles = styled.div`
  background: ${props => props.theme.black};
  position:fixed;
  height: 66px;
  width: 100vw;
  font-weight: 200;
  line-height: 70px;
  `;

const NavItems = styled.div`
  /* background: blue; */
  width: 170px;
  height: 66px;
  color: white;
  text-align: center;
  a {
    width: 150px;
    text-align: center;
    padding: 10px 15px;
    :hover {
      color: white;
    }
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
  margin-top: 20px;
  /* transform: translateY(-50%); */
`;
const Nav = () => (
  <NavStyles>
    <NavBox>
      <NavItems>
        <Link href='#'>
          <a>
            <StyleLogo src={Logo} alt=""/>
          </a>
        </Link>
      </NavItems>
      <NavItems>
        <Link href='#'>
          <a>
              download
          </a>
        </Link>
      </NavItems>
      <NavItems>
        <Link href='#'>
          <a>
              more information
          </a>
        </Link>
      </NavItems>
    </NavBox>
  </NavStyles>
);

export default Nav;