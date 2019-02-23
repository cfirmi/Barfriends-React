import React, { Component } from 'react';
import styled from 'styled-components';
<<<<<<< HEAD

const OuterBox = styled.div`
`;
=======
>>>>>>> cf5f50fee0703243b59af908f6c647102366d7f5

export default class JoinHowto extends Component {
  render() {
    return (
      <OuterBox>
<<<<<<< HEAD
=======
        
>>>>>>> cf5f50fee0703243b59af908f6c647102366d7f5
      </OuterBox>
    )
  }
}


const OuterBox = styled.div`
  background: pink;
  display: grid;
  /* height: 50vh; width: 100vw; */
  width: 100vw;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  @media (max-width: ${props => props.theme.mobileWidth}) {
  display: grid;
  width: 100vw;
  height: 100%;
 };
`;
