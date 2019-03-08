import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Banner = '../../static/images/joinimg/ASKBanner.svg'

const OuterBox = styled.div`
  /* background: purple; */
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  @media (max-width: ${props => props.theme.mobileWidth}) {
  display: grid;
  width: 100%;
  height: 100%;
 };
 
`;
const BannerImg = styled.img`
  /* background: red; */
  grid-column: 2 / 8;
  grid-row: 3;
  width: 100%;
  max-height: 300px;
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
`;
const ASKing = styled.div`
 grid-column: 1 / -1;
  h1, h2 {
   text-align: center;
 ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
 }
`;


export default class ASKS extends Component {
  render() {
    return (
      <OuterBox>
        <ASKing>
          <h1>Meet People Going Out</h1>
          <h2 style={{fontStyle: 'italic'}}>❝It matters how the conversation goes, less about how it started❞</h2>
        </ASKing>
        <BannerImg draggable="false" src={Banner} alt=""/>
      </OuterBox>
    )
  }
}
