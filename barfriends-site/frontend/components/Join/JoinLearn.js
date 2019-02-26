import React, { Component } from 'react';
import styled from 'styled-components';
// import hhh from '../../static/images/joinimg/join-barfriends.jpg'

// import girls from '../images/joinimg/girls'
const joinBfs = '../../static/images/joinimg/join-barfriends.jpg';
const Logo = '../../static/images/LogoNaked.png';

const OuterBox = styled.div`
  /* background: pink; */
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
const Title = styled.p`
  /* background: red; */
  font-size: 35px;
  height: 100%;
  line-height: 55px;
  font-weight: 400;
  max-width: 430px;
  grid-column: 2 / 5 ;
  grid-row: 3 / 4;
  /* user-select: none;   */
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
    @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-column: 1 / -1 ;
    grid-row: 5 / 6; 
    margin-top: -0px; 
    margin-left: 50%;
    transform: translateX(-50%);
    text-align: left;
    min-width: 380px;
    }
    @media (max-width: ${props => props.theme.trueMobileWidth}) {
    text-align: center;
    };
`;
const ImgBox = styled.img`
  /* background: blue; */
  grid-column: 5 / -1;
  height: 100%;
  grid-row: 1 / -1;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-column: 2 / 8;
    grid-row: 1 / 5;
    }
  @media (max-width: ${props => props.theme.trueMobileWidth}) {
    grid-column: 1 / -1;
  };
`;
const Signup = styled.div`
  /* color: grey; */
  background: ${props => props.theme.orange};
  grid-row: 4 / 5;
  grid-column: 2 / 5 ;
  height: 40px; width: 140px;
  line-height: 40px;
  text-align: center;
  margin-top: 60px;
  cursor: pointer;
  div {
    /* background: red; */
    display: inline-block;
    width: 10px;
  }
  @media (max-width: ${props => props.theme.mobileWidth}) {
    margin-top: 130px;
    grid-row: 5;
    grid-column: 1 / -1;
    margin-left: 50%;
    transform: translateX(-50%);
    div {
    display: inline-block;
    width: 10px;
  }
  };
`;

export default class JoinLearn extends Component {
  render() {
    return (
      <OuterBox>
        <Title>A guide for how to use Barfriends</Title>
        <Signup>Join <div>→</div></Signup>
        <ImgBox src={joinBfs} alt=""/>

      </OuterBox>
    )
  }
}
