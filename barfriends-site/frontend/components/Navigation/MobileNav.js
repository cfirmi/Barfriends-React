import Link from 'next/link';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './MobileDropNav';
import {NavHamburger, InputCheckBox} from '../styles/ToggleDropButton';

// Logo
const Logo = '../../static/images/Logo.svg';

const MobileNav = props => (
      <NavStyles> 
        <NavHamburger id="menuToggle">
          <Mutation mutation={TOGGLE_CART_MUTATION}>
            {(toggleCart) => (
              <InputCheckBox type="checkbox" onClick={toggleCart} />
            )}
          </Mutation>
                {/* <span></span> */}
                <span></span>
                <span></span>
        </NavHamburger>
        <Link href='#'>
          <a>
            <StyleLogo src={Logo} alt=""/>
          </a>
        </Link>
      </NavStyles>
);

export default MobileNav;
const NavStyles = styled.div`
position: relative;
  width: 100vw;  height: 20vh;
  line-height: 66px;
  ${props => props.open && `transform: translateX(0);`};
`;

const StyleLogo = styled.img`
  position: absolute;
  height: 86px;
  top: 10vh;
  border-radius: 10px;
  margin-left: 50%;
  transform: translateX(-50%);
  box-shadow: -0px -0px 5px rgba(106, 106, 106, .20);

`;