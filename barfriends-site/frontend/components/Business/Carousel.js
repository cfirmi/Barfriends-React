import React, { PropTypes, Component } from 'react';
import { Carousel } from 'react-customizable-carousel';
// import "react-customizable-carousel/styles/index.css";
import styled from 'styled-components';


const Item = styled.div`
  background: darkorange;
  text-align: center;
  padding: 50px;
  margin: 10px;
  color: white;
  width: 100vw;
  
`

const CarouselShape = () => (
  <div style={{background: 'white'}}>
    <Carousel>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
    </Carousel>
  </div>
);

export default CarouselShape;