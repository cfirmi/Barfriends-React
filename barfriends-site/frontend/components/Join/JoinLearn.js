import React, { Component } from 'react';
import styled from 'styled-components';

const joinBfs = '../../static/images/joinimg/join-barfriends.jpg';
const QR = '../../static/images/home/qrcode.svg'

const OuterBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  height: 80vh;
  min-height: 100vh;
  
  @media (max-width: ${props => props.theme.mobileWidth}) {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px;
 };
`;
const Title = styled.h1`
  font-size: ${props => props.theme.head1};
  height: 100%;
  line-height: 70px;
  font-weight: 400;
  text-align: center;
  padding: 0 15px;
  grid-column: 1 / 5;
  place-self: center;
  grid-row: 3 / 4;
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
    margin-top: 50px; 
    text-align: center;
    min-width: 95%;
    font-weight: 600;
  }
`;
const ImgBox = styled.img`
  /* background: blue; */
  grid-column: 5 / -1;
  grid-row: 2 / -1;
  height: 100%;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
  object-fit: cover;
    grid-column: 2 / 8;
    width: 100%;
    grid-row: 1 / 5;
    }
  @media (max-width: ${props => props.theme.trueMobileWidth}) {
    grid-column: 1 / -1;
  };
`;
const Signup = styled.div`
  background: ${props => props.theme.orange};
  grid-row: 5;
  grid-column: 1 / 5;
  place-self: center;
  height: 50px; width: 170px;
  margin-top: -60px;
  padding: 10px;
  line-height: 33px;
  font-weight: 600;
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
  color: white;
  div {
    display: inline-block;
    width: 10px;
    color: white;
  }
  @media (max-width: 1881px) {
    margin-top: 20px;
  };
  @media (max-width: 1356px) {
    grid-row: 6;
    grid-column: 3;
    margin-left: 50px;
    margin-top: 100px;
  };
  @media (max-width: ${props => props.theme.mobileWidth}) {
    grid-row: 6;
    grid-column: 1 / -1;
    margin-left: 0px; margin-top: 90px;
    div {
    display: inline-block;
    width: 10px;
  }
  }
  @media (max-width: 972px) {
    margin-top: 120px;
    grid-row: 7;
  };
  @media (max-width: 702px) {
    margin-top: 0px;
    grid-row: 8;
  };
  @media (max-width: 602px) {
    grid-row: 9;
  };
  @media (max-width: 525px) {
    display: none;
  };
`;
const DownloadImage = styled.img`
  /* background: red; */
  grid-row: 6;
  grid-column: 1 / 5;
  place-self: center;
  width: 150px;
  height: 150px;
  @media (max-width: 1881px) {
    margin-top: 100px;
  };
  @media (max-width: 1356px) {
  grid-column: 2;
  };
  @media (max-width: ${props => props.theme.mobileWidth}) {
    margin-top: 150px;
    grid-row: 7;
    grid-column: 1 / -1;
  };
  @media (max-width: 972px) {
    margin-top: 0px;
    grid-row: 9;
  };
  @media (max-width: 702px) {
    margin-top: -100px;
    grid-row: 10;
  };
  @media (max-width: 602px) {
    grid-row: 11;
  };
`;

export default class JoinLearn extends Component {
  render() {
    return (
      <OuterBox>
        <Title> Joining Tonight Makes You A Part Of Something Special<span style={{color: '#FF7000'}}>.</span></Title>
        <DownloadImage src={QR} alt=""/>
        <Signup>
          <a href="https://itunes.apple.com/us/app/barfriends/id1445453937?mt=8">
            DOWNLOAD
          </a>
        </Signup>
        <ImgBox src={joinBfs} alt=""/>
      </OuterBox>
    )
  }
}
