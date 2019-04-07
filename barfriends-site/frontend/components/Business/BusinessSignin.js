import styled from 'styled-components';


// const theboys = '../../static/images/business/theboys.jpg';
const TheEvent = '../../static/images/business/BetterEvents.svg';


const BusinessSignin = () => (
  <OuterBox>
    <BackgroundImg draggable="false" src={TheEvent} alt=""/>
    <h1>Grow with us today. It's the best thing that you can do for your bar.</h1>
  </OuterBox>
);
const OuterBox = styled.div`
  background: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 90vh;
  h1 {
    grid-column: 2 / 7;
    grid-row: 5;
    font-size: ${props => props.theme.head2};
    font-weight: 600;
    line-height: 88px;
    letter-spacing: -2px;
    text-align: center;
    text-shadow: 2px 2px 8px #00000080;
    color: white;
    z-index: 2;
  }
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
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 75vw; height: 75vh;
  object-fit: cover;
  margin-top: 105px; margin-left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  @media (max-width: 850px) {
    width: 100vw;
  };
`;

export default BusinessSignin;