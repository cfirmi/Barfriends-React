import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import JoinCarousel from './JoinCarousel'


const OuterBox = styled.div`
  /* background: green; */
  display: grid;
  margin-top: 100px;
  width: 100%; height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  h1 {
    text-align: left;
    font-weight: 800;
  }
  p {
    color: grey;
    text-align: left;
  }
  @media (max-width: 850px) {
    display: grid;
    width: 100%; height: 100%;
  };
`;

const CarouselBox = styled.div`
  /* background: red; */
  grid-column: 4;
  grid-row: 1 / 8;
  @media (max-width: 850px) {
    grid-row: 1 \ 8;
  };
`;
const Box1 = styled.div`
  /* background: pink; */
  grid-row: 3 / 5;
  grid-column: 1 / 4;
  text-align: center;
  justify-self: end;
  min-width: 200px;
  max-width: 250px;
  
  @media (max-width: 850px) {
    grid-row: 8;
    grid-column: 4 / 5;
    text-align: left;
    justify-self: start;
    width: 100%;
    min-width: 100%
  };
`;
const Box2 = styled.div`
  /* background: red; */
  grid-row: 3 / 5;
  grid-column: 5 / 8;
  justify-self: start;
  min-width: 200px;
  text-align: center;
  @media (max-width: 850px) {
    grid-row: 9;
    grid-column: 4 / 5;
    text-align: left;
    justify-self: start;
    width: 100%;
    min-width: 100%
  };
`;
const Box3 = styled.div`
  /* background: yellow; */
  grid-row: 6 / 8;
  grid-column: 1 / 4;
  justify-self: end;
  min-width: 200px;
  max-height: 300px;
  text-align: center;
  @media (max-width: 850px) {
    grid-row: 10;
    grid-column: 4 / 5;
    text-align: left;
    justify-self: start;
    width: 100%;
    min-width: 100%
  };
`;
const Box4 = styled.div`
  /* background: orange; */
  grid-row: 6 / 8;
  grid-column: 5 / 8;
  justify-self: start;
  min-width: 200px;
  max-height: 300px;
  text-align: center;
  @media (max-width: 850px) {
    grid-row: 11;
    grid-column: 4 / 5;
    text-align: left;
    justify-self: start;
    width: 100%;
    min-width: 100%
  };
`;

export default class Everywhere extends Component {
  render() {
    return (
      <OuterBox>
        <Box1>
          <h1>Every city</h1>
          <p>Use the map to find all the bars & clubs. And the ones that are popular.</p>
        </Box1>
        <Box2>
          <h1>In Real-Time</h1>
          <p>Wonder no more, see how the place is that you want to go out to, before commiting to them.  </p>
        </Box2>
        <Box3> 
          <h1>Meet new people</h1>
          <p>Join the bar you are at and start messaging and meeting people</p>
        </Box3>
        <Box4>
          <h1>Get a ride</h1>  
          <p>Use Uber to get a direct</p>
        </Box4>
        <CarouselBox>
          <JoinCarousel />
        </CarouselBox>
      </OuterBox>
    )
  }
}
