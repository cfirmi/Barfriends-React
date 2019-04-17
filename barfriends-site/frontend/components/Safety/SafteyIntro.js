import React, { Component } from 'react'
import styled from 'styled-components'

const OuterBox = styled.div`
  /* background: purple; */
  display: grid;
  width: 100vw; height: 90vh;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  margin-top: 20vh;
  @media (max-width: ${props => props.theme.mobileWidth}) {
    grid-template-rows: 100px 100px 100px ;
    display: grid;
    width: 100%;
  };
`;
const Title = styled.h1`
  grid-column: 1 / -1;
  grid-row: 1;
  width: 700px;
  color: white;
  text-align: center;
  font-size: 60px;
  font-weight: 800;
  margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: 700px) {
    width: 100%;
    padding: 0px 20px;
  };
`;
const Text = styled.p`
  grid-column: 1 / -1;
  grid-row: 3;
  text-align: center;
  font-size: 17px;
  color: white;
  @media (max-width: 650px) {
  grid-row: 4;
  padding: 0px 20px;
  };
`;
export default class SafteyIntro  extends Component {
  render() {
    return (
      <OuterBox>
        <Title>A private and safe user experience.</Title>
        <Text>
          We protect your private information every step of the way when you create an account with Barfriends. 
          <br/>
        </Text>

        {/* <Text>Going out is how we become closer to our friends and it's a chance for us to meet new people, it's an honor to be apart of your experience.</Text> */}
      </OuterBox>
    )
  }
}
