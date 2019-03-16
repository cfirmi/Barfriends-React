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
    text-align: center;
    font-weight: 800;
    font-size: 30px;
  }
  p {
    color: grey;
    text-align: center;
    font-size: 17px;
  }
  @media (max-width: 950px) {
    display: grid;
    width: 100%; height: 100%;
  };
`;

const CarouselBox = styled.div`
  /* background: red; */
  grid-column: 4;
  grid-row: 1 / 8;
  @media (max-width: 950px) {
    grid-row: 1 \ 6;
    height: 700px;
    /* margin-bottom: 100px; */
  };
`;
const Box1 = styled.div`
  /* background: pink; */
  grid-row: 3 / 5;
  grid-column: 1 / 4;
  text-align: center;
  min-width: 300px;
  max-width: 330px;
  margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: 950px) {
    grid-row: 6;
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
  min-width: 300px;
  max-width: 330px;
  max-height: 300px;
  text-align: center;
  margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: 950px) {
    grid-row: 7;
    grid-column: 4 / 5;
    text-align: left;
    width: 100%;
    min-width: 100%
  };
`;
const Box3 = styled.div`
  /* background: yellow; */
  grid-row: 4 / 8;
  grid-column: 1 / 4;
  min-width: 300px;
  max-width: 330px;
  max-height: 300px;
  text-align: center;
  margin-top: 50px; margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: 950px) {
    grid-row: 8;
    grid-column: 4 / 5;
    text-align: left;
    justify-self: start;
    margin-top: 0px;
    width: 100%;
    min-width: 100%
  };
`;
const Box4 = styled.div`
  /* background: orange; */
  grid-row: 4 / 8;
  grid-column: 5 / 8;
  justify-self: start;
  min-width: 300px;
  max-width: 330px;
  max-height: 300px;
  text-align: center;
  margin-top: 50px; margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: 950px) {
    grid-row: 9;
    grid-column: 4 / 5;
    text-align: left;
    justify-self: start;
    margin-top: 0px;
    width: 100%;
    min-width: 100%
  };
`;

export default class Everywhere extends Component {
  render() {
    return (
      <OuterBox>
        <Box1>
          <h1>Avaiable all over North America</h1>
          <p>Use the map to find all the bars & clubs. And the ones that are popular.</p>
        </Box1>
        <Box2>
          <h1>In Real-Time</h1>
          <p>See how busy places really are, before commiting to them.  </p>
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
