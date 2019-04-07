import styled from 'styled-components';


// const theboys = '../../static/images/business/theboys.jpg';
const TheEvent = '../../static/images/business/BetterEvents.svg';


const BusinessSignin = () => (
  <OuterBox>
    <BackgroundImg draggable="false" src={TheEvent} alt=""/>
    <h1>Join today and connect with your customers tonight</h1>
    <SignupButton>Contact</SignupButton>
  </OuterBox>
);
const OuterBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 100vh;
  h1 {
    grid-column: 1 / -1;
    grid-row: 5;
    font-size: ${props => props.theme.head2};
    line-height: 88px;
    letter-spacing: -2px;
    text-align: center;
    text-shadow: 2px 2px 8px #00000080;
    color: white;
    z-index: 2;
  }
  @media (max-width: ${props => props.theme.mobileWidth}) {
    width: 100vw; height: 50vh;
    h1 {
      grid-row: 4;
      width: 80vw;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
  @media (max-width: 1150px) {
    h1 {
      grid-row: 5;
      width: 90vw;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  };
`;
const SignupButton = styled.button`
  background: ${props => props.theme.orange};;
  border: none; border-radius: 25px;
  grid-row: 6;
  grid-column: 1 / -1;
  height: 45px; max-width: 213px;
  font-size: 17px;
  font-weight: 700;
  margin-left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  color: white;
  box-shadow: ${props => props.theme.bs};
  transition: 0.5s ease;
  z-index: 2;
  :hover {
    background: white;
    color: ${props => props.theme.orange};
  }
`;
const BackgroundImg = styled.img`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  width: 100%;
  object-fit: cover;
  min-height: 100vh;
  object-fit: cover;
  margin-left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export default BusinessSignin;