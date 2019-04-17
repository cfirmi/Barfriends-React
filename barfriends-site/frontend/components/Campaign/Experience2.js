import React, { Component } from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

// const Girlsimage = '../../static/images/campaign/girlssunset.jpg'

const OuterBox = styled.div`
  background: blue;
  position: relative;
  display: inline-block;
  width: 100vw; height: 100vh;
  margin-top: 150vh;
  z-index: 2;
`;

export default class Experience2 extends Component {
  render() {
    return (
      <OuterBox>
        <h1>This is the second and third divs</h1>
      </OuterBox>
    )
  }
}
