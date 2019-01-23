import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.div`
  /* background: ${props => props.theme.red}; */
  background: ${props => props.theme.black};
  position: fixed;
  margin-top: 23px;
  height: 100vh; width: 100vw;
  z-index: 10;
  animation: NavAnimation 0.75s;
  -moz-animation: NavAnimation 0.75s; /* Firefox */
  -webkit-animation: NavAnimation 0.75s; /* Safari and Chrome */ 
  -webkit-animation-direction: alternate; 
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  @keyframes NavAnimation {
    0% {height: 0vh}
    80% { height: 95vh}
    100% { height: 100vh}
  }
  @-webkit-keyframes NavAnimation {
    0% {height: 0vh}
    80% { height: 95vh}
    100% { height: 100vh}
  }
`;
const NavItems = styled.div`
  margin-left: 50%; transform: translateX(-50%);
  text-align: left;
  border-bottom: 0.5px solid rgba(255,255,255,0.49);
  width: 90%;
  line-height: 43px;
  color: white;
  font-weight: 300;
  letter-spacing: 0.55px;
  :hover {
    color: green;
  }
`;

const NavBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 100%;
  margin-left: 50%;
  transform: translateX(-50%);  
  @media (min-width: 764px) {
    display: none;
  };
`;

const DropNav = props => (
  <NavStyles>
    <NavBox>
      <Link href='#'>
        <a>
          <NavItems>
                App
          </NavItems>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <NavItems>
                Products
          </NavItems>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <NavItems>
              Owners
          </NavItems>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <NavItems>
                About
          </NavItems>
        </a>
      </Link>
    </NavBox>
  </NavStyles>

);

export default DropNav;