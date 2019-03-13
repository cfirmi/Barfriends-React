import React, { Component } from 'react';
import styled from 'styled-components';

const profile = '../../static/images/joinimg/howto/createProfile.svg';
const mapFinder = '../../static/images/joinimg/howto/mapFindBar.svg';
const Uber = '../../static/images/joinimg/howto/Uber.svg';
const atBar = '../../static/images/joinimg/howto/AtBar.svg';
const sendASKS = '../../static/images/joinimg/howto/sendASK.svg';
const cheers = '../../static/images/joinimg/howto/cheers.svg';
const line = '../../static/images/joinimg/howto/line.svg';

export default class JoinHowto extends Component {
  render() {
    return (
      <OuterBox>
          <HowToItem>
            <ImgBox draggable="false" src={profile} alt=""/>
            <TextBox>
              <Title>Create A Profile</Title>
              <Text>All you need is a email and set a password. You can find the best places to go out tonight. To download the app, go to <span style={{borderBottom: '1px solid black', cursor: 'pointer', fontWeight: '400' }}> <a target="_blank" href="https://itunes.apple.com/us/app/barfriends/id1445453937?mt=8"> App Store </a></span></Text>
            </TextBox>
          </HowToItem>
          <HowToItem>
            <ImgBox draggable="false" src={mapFinder} alt=""/>
            <TextBox>
              <Title>Use the Map to find a bar</Title>
              <Text>Open the app, Select any bar, club or pub you see, find out where your friends are going out or how many people are going out to each place.</Text>
            </TextBox>
          </HowToItem>
          <HowToItem>
            <ImgBox draggable="false" src={Uber} alt=""/>
            <TextBox>
              <Title>Find a ride</Title>
              <Text>Found a bar! now you need a ride. Use our deeplink into the Uber app where you'll get real time information on a ride to the bar you selected.</Text>
            </TextBox>
          </HowToItem>
          <HowToItem>
            <ImgBox draggable="false" src={atBar} alt=""/>
            <TextBox>
              <Title>When you arrive</Title>
              <Text>Near the bar! You will be able to Join and see other people that are also at the bar and Joined.</Text>
            </TextBox>
          </HowToItem>
          <HowToItem>
            <ImgBox draggable="false" src={sendASKS} alt=""/>
            <TextBox>
              <Title>Making new friends</Title>
              <Text>Message your friends or other joined people. Invite to drink dance or play game in the bar in real time.</Text>
            </TextBox>
          </HowToItem>
          <HowToItem>
            <ImgBox draggable="false" src={cheers} alt=""/>
            <TextBox>
              <Title>Cheers to better nights out</Title>
              <Text>Always use Barfriends to have a fun and safe night out. For everyone at any time.</Text>
            </TextBox>
          </HowToItem>
      </OuterBox>
    )
  }
}


const HowToItem = styled.div`
  /* background: blue; */
  display: grid;
  grid-template-columns: 10px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column: 2 / 9;
  /* max-width: 1200px; */
  /* width: 1000px;  */
  width: 100%;
  height: 160px;
  margin-top: 10px; margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: ${props => props.theme.mobileWidth}) {
    grid-template-columns: 195px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin-top: 10px;
  }
  @media (max-width: 700px) {
    height: 500px;
    width: 100%; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 350px 100px;
  };
`;
const ImgBox = styled.img`
  /* background: green; */
  height: 145px;
  grid-row: 1 / -1;
  grid-column: 1 / 2;
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
  @media (max-width: 700px) {

    margin-left: 50%;
    transform: translateX(-50%);
    width: 100vw; height: 390px;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
`;
const TextBox = styled.div`
  /* background: yellow; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  margin-left: 30px;
  grid-column: 4 / -1;
  grid-row: 1 / -1;

  @media (max-width: ${props => props.theme.mobileWidth} ) {
    margin-left: -10px;
    grid-template-rows: 35px 1fr;
  };
  @media (max-width: 700px) {
    /* background: yellow; */
    margin-left: 0px;
    margin-top: 33px;
    grid-column: 1 / -1;
    grid-row: 2;
    width: 100%;
  }
`;
const Title = styled.h2`
  /* background: pink; */
  font-size: 20px;
  font-weight: 600;
  line-height: 1px;
  margin-top: 20px;
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
    @media (max-width: 700px) {
      margin-top: 20px;
    };
`;
const Text = styled.div`
  /* background: orange; */
  line-height: 35px;
  font-size: 18px;
  font-weight: 300;
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
  a {
    color: black;
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
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    line-height: 25px;
    font-size: 15px;
  };
  @media (max-width:700px ) {
    line-height: 25px;
    font-size: 18px;
  };
`;

const OuterBox = styled.div`
  /* background: red; */
  display: grid;
  margin-top: 205px;
  /* height: 50vh; width: 100vw; */
  width: 100vw;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 180px 180px 180px 180px 180px 180px 180px ;
  grid-column-gap: 25px;
  @media (max-width: ${props => props.theme.mobileWidth}) {
  display: grid;
  width: 100vw;
  height: 100%;
 };
 @media (max-width: 700px) {
   
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
 };
`;
