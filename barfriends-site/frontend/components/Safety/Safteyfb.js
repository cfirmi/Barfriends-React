import React, { Component } from 'react'
import styled from 'styled-components'

const fbthumb = '../../static/images/safety/fbthumb.svg'

const OuterBox = styled.div`
  display: grid;
  height: 50%;
  max-width: 100vw;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  box-shadow: ${props => props.theme.bs3};
  border-radius: 35px;
  padding: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: 650px) {
    padding: 0px;
    border-radius: 0px;
    width: 100vw;
  };
`;
const Title = styled.h1`
  /* background: red; */
  grid-column: 2 / -1;
  grid-row: 1 / 2;
  color: white;
  text-align: center;
  font-size: 50px;
  font-weight: 800;
  place-self: center;
  @media (max-width: 650px) {
  grid-column: 1 / -1;

  };
`;
const Text = styled.p`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  text-align: center;
  font-size: 25px;
  color: white;
  padding: 0px 50px;
  @media (max-width: 650px) {
    grid-column: 1 / -1;
    grid-row: 3;
    padding: 0px 0px;
  };
`;

const Thumb = styled.img`
/* background: red; */
  height: 100px;
  grid-row: 1;
  grid-column: 1 / 2;
  margin-top: 15px; margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: 650px) {
    grid-column: 1 / -1;
    grid-row: 2;
  };
 `;
export default class SafteyFacebook  extends Component {
  render() {
    return (
      <OuterBox>
        <Title>Sign in with Facebook</Title>
        <Text>Signing in with Facebook gives you quick access to everything with Barfriends.</Text>
        <Thumb src={fbthumb} alt=""/>
      </OuterBox>
    )
  }
}
