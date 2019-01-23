import Link from 'next/link';
import styled from 'styled-components';
import MobileToggleButton from './MobileToggleButton';

const Logo = '../../static/images/Logo.svg';

const NavStyles = styled.div`
  position: absolute;
  top: 0px;
  height: 44px;
  width: 100vw;
`;
const NavItems = styled.div`
  /* background: red; */
  width: 33vw;
  line-height: 43px;
  color: white;
  /* Change this if text is not on the right hand side of the mobile nav */
  text-align: right;
  :hover {
    color: green;
  }
`;

const NavBox = styled.div`
  background: ${props => props.theme.black};;
  display: none;
  @media (max-width: 764px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    margin-left: 50%;
    transform: translateX(-50%);  
  };
`;
const StyleLogo = styled.img`
  position: absolute;
  height: 25px;
  top: 10px;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const MobileNav = props => (
  <NavStyles>
    <NavBox>
      <NavItems>
        <MobileToggleButton click={props.NavClickHandler}/>
      </NavItems>
      <Link href='#'>
        <a>
          <NavItems>
                <StyleLogo src={Logo} alt=""/>
          </NavItems>
        </a>
      </Link>
      <NavItems>
        <Link href='#'>
          <a>
            DDB
          </a>
        </Link>
      </NavItems>
    </NavBox>
  </NavStyles>
);

export default MobileNav;