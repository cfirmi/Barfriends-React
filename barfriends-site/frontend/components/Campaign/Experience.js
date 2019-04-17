import React, { Component } from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

const Girlsimage = '../../static/images/campaign/girlssunset.jpg'

const OuterBox = styled.div`
  /* background: red; */
  display: grid;
  position: absolute;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
  z-index: 1;
  .img-class {
    grid-column: 1 / -1;
    grid-row: 1;
    height: 100%; width: 250%;
    z-index: 5;
  }
  .title-class {
    grid-column: 1 / -1;
    z-index: 5;
  }
`;
const ImageSun = styled.img`
  height: 500px; width: 100%;
  object-fit: cover;
  margin-left: 50%;
  transform: translateX(-50%);
`;
const Title1 = styled.h1`
  /* background: red; */
  grid-column: 1 / -1;
  grid-row: 2;
  width: 50%;
  margin-top: -20vh;
  font-size: 90px;
  font-weight: 800;
  text-align: left;
  color: white;
  @media (max-width: 800px) {
    padding: 20px;
    font-size: 60px;
  };
`;


export default class Experience1 extends Component {
  render() {
    return (
      <OuterBox>
        <Parallax className="img-class" y={[-10, 5]} x={[-70, 0]}>
          <ImageSun src={Girlsimage} alt=""/>
        </Parallax>
        <Parallax className="title-class" y={[-40, 95]}>
          <Title1>FUN NIGHTS WITH YOUR FRIENDS</Title1>
        </Parallax>w
      </OuterBox>
    )
  }
}
