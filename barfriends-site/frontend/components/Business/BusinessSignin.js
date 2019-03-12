import styled from 'styled-components';


const theboys = '../../static/images/business/theboys.jpg';
const TheEvent = '../../static/images/business/BetterEvents.svg';


const BusinessSignin = () => (
  <OuterBox>
    <BackgroundImg draggable="false"src={TheEvent} alt=""/>
    <h1>Sign up to connect with your customers</h1>
    <SignupButton>SIGN UP</SignupButton>
  </OuterBox>
);
const OuterBox = styled.div`
background: yellow;
  /* margin-top: 106px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 100vh;
  h1 {
    font-size: 62px;
    /* font-size: 5rem; */
    line-height: 88px;
    letter-spacing: -2px;
    text-align: center;
    text-shadow: 2px 2px 8px #00000080;
    color: white;
    grid-column: 1 / -1;
    grid-row: 5;
    z-index: 2;
  }
  @media (max-width: ${props => props.theme.mobileWidth}) {
  background: ${props => props.theme.orange};
  width: 100vw; height: 50vh;
    h1 {
      width: 80vw;
      margin-left: 50%;
      transform: translateX(-50%);
      grid-row: 3;
    }
  }
  @media (max-width: 1150px) {
    h1 {
      width: 90vw;
      margin-left: 50%;
      transform: translateX(-50%);
      grid-row: 3;
    }
  };
`;
const SignupButton = styled.button`
  background: ${props => props.theme.orange};;
  border: none;
  grid-row: 6;
  grid-column: 1 / -1;
  height: 45px;
  max-width: 213px;
  font-size: 17px;
  font-weight: 700;
  margin-left: 50%;
  border-radius: 25px;
  cursor: pointer;
  color: white;
  transform: translateX(-50%);
    box-shadow: ${props => props.theme.bs};
    z-index: 2;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-row: 5;
  };
`;
const BackgroundImg = styled.img`
  grid-row: 1 / -1;
  height: 100%;
  object-fit: cover;
  margin-left: 50%;
  transform: translateX(-50%);
  grid-column: 1 / -1;
  z-index: 1;
  @media (max-width:${props => props.theme.mobileWidth}) {
    display: none;
  };
`;

export default BusinessSignin;