import styled from 'styled-components';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';


const theboys = '../../static/images/business/theboys.jpg';
const TheEvent = '../../static/images/business/BetterEvents.svg';


const BusinessSignin = () => (
  <OuterBox>
    <BackgroundImg src={TheEvent} alt=""/>
    <h1>Sign up and connect with your customers</h1>
    <SignupButton>Sign up</SignupButton>
  </OuterBox>
);
const OuterBox = styled.div`
  margin-top: 106px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 50vh;
  h1 {
    font-size: 32px;
    text-align: center;
    color: white;
    grid-column: 1 / -1;
    grid-row: 7;
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
`;
const SignupButton = styled.button`
  background: white;
  border: none;
  grid-row: -1;
  grid-column: 1 / -1;
  height: 50px;
  max-width: 233px;
  font-size: 17px;
  margin-left: 50%;
  border-radius: 25px;
  cursor: pointer;
  transform: translateX(-50%);
    box-shadow: ${props => props.theme.bs};
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-row: 5;
  };
  :hover {
    color: #111;
  }
`;
const BackgroundImg = styled.img`
  grid-row: 1 / -1;
  width: 100%;
  grid-column: 1 / -1;
  @media (max-width:${props => props.theme.mobileWidth}) {
    display: none;
  };
`;

export default BusinessSignin;