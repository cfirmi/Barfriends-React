import styled from 'styled-components';


const theboys = '../../static/images/business/theboys.jpg';
const TheEvent = '../../static/images/business/BetterEvents.svg';


const BusinessSignin = () => (
  <OuterBox>
    <BackgroundImg draggable="false"src={TheEvent} alt=""/>
    <h1>Sign up and connect with your customers</h1>
    <SignupButton>Sign up</SignupButton>
  </OuterBox>
);
const OuterBox = styled.div`
/* background: yellow; */
  /* margin-top: 106px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 80vh;
  h1 {
    font-size: 62px;
    text-align: center;
    color: white;
    grid-column: 2 / 7;
    text-shadow: 2px 2px 8px #00000080;
    grid-row: 5;
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
  height: 50px;
  max-width: 233px;
  font-size: 17px;
  margin-left: 50%;
  border-radius: 25px;
  cursor: pointer;
  color: white;
  transform: translateX(-50%);
    box-shadow: ${props => props.theme.bs};
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-row: 5;
  };
`;
const BackgroundImg = styled.img`
  grid-row: 1 / -1;
  width: 100%;
  object-fit: cover;
  grid-column: 1 / -1;
  @media (max-width:${props => props.theme.mobileWidth}) {
    display: none;
  };
`;

export default BusinessSignin;