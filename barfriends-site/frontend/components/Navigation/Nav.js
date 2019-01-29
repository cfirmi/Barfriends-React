import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = '../../static/images/Logo.svg';

const NavStyles = styled.div`
  background: ${props => props.theme.black};
  position:fixed;
  height: 66px;
  width: 100vw;
  line-height: 70px;
  `;

const NavItems = styled.div`
  /* background: blue; */
  width: 170px;
  height: 66px;
  color: grey;
  text-align: center;
  font-weight: 200;
  a {
    color: white;
    width: 140px;
    text-align: center;
    padding: 10px 15px;
    :hover {
      color: black;
    }
  }
`;

const NavBox = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
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
  height: 65px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: -0px -0px 5px rgba(106, 106, 106, .20);
  /* transform: translateY(-50%); */
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
      <NavItems>
        <Link href='/BFApp'>
          <a>
              App
          </a>
        </Link>
      </NavItems>
      <NavItems>
        <Link href=''>
          <a>
              Terms
          </a>
        </Link>
      </NavItems>
    </NavBox>
  </NavStyles>
);

export default Nav;