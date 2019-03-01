import React, { Component } from 'react';
import styled from 'styled-components';

const profile = '../../static/images/joinimg/howto/createProfile.svg';
const mapFinder = '../../static/images/joinimg/howto/mapFindBar.svg';
const Uber = '../../static/images/joinimg/howto/Uber.svg';
const atBar = '../../static/images/joinimg/howto/AtBar.svg';
const sendASKS = '../../static/images/joinimg/howto/sendASK.svg';
const cheers = '../../static/images/joinimg/howto/cheers.svg';

export default class JoinHowto extends Component {
  render() {
    return (
      <OuterBox>
          <HowToItem>
            <ImgBox src={profile} alt=""/>
            <TextBox>
              <Title>Create A Profile</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem excepturi, in porro a doloribus repellendus laboriosam quis neque cum? Quo atque vitae consectetur minus quia et enim consequuntur hic ipsa.</Text>
            </TextBox>
          </HowToItem>
          <HowToItem>
            <ImgBox src={mapFinder} alt=""/>
            <TextBox>
              <Title>Create A Profile</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem excepturi, in porro a doloribus repellendus laboriosam quis neque cum? Quo atque vitae consectetur minus quia et enim consequuntur hic ipsa.</Text>
            </TextBox>
          </HowToItem>
          <HowToItem>
            <ImgBox src={Uber} alt=""/>
            <TextBox>
              <Title>Create A Profile</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem excepturi, in porro a doloribus repellendus laboriosam quis neque cum? Quo atque vitae consectetur minus quia et enim consequuntur hic ipsa.</Text>
            </TextBox>
          </HowToItem>
          <HowToItem>
            <ImgBox src={atBar} alt=""/>
            <TextBox>
              <Title>Create A Profile</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem excepturi, in porro a doloribus repellendus laboriosam quis neque cum? Quo atque vitae consectetur minus quia et enim consequuntur hic ipsa.</Text>
            </TextBox>
          </HowToItem>
          <HowToItem>
            <ImgBox src={sendASKS} alt=""/>
            <TextBox>
              <Title>Create A Profile</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem excepturi, in porro a doloribus repellendus laboriosam quis neque cum? Quo atque vitae consectetur minus quia et enim consequuntur hic ipsa.</Text>
            </TextBox>
          </HowToItem>
          <HowToItem>
            <ImgBox src={cheers} alt=""/>
            <TextBox>
              <Title>Create A Profile</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem excepturi, in porro a doloribus repellendus laboriosam quis neque cum? Quo atque vitae consectetur minus quia et enim consequuntur hic ipsa.</Text>
            </TextBox>
          </HowToItem>
      </OuterBox>
    )
  }
}


const HowToItem = styled.div`
  /* background: blue; */
  display: grid;
  grid-template-columns: 215px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 140px;
  grid-column: 2 / 9;
  max-width: 1200px;
  width: 1000px;
  margin-top: 10px; margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: ${props => props.theme.mobileWidth}) {
  max-width: 1200px;
  width: 100%;
  
  }
`;
const ImgBox = styled.img`
  /* background: green; */
  height: 100%;
  grid-row: 1 / -1;
  grid-column: 1 /2;
`;
const TextBox = styled.div`
  /* background: yellow; */
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  grid-column: 4 / -1;
  margin-left: -20px;
  grid-row: 1 / -1;
`;
const Title = styled.p`
  /* background: pink; */
  font-size: 20px;
  font-weight: 200;
  line-height: 1px;

`;
const Text = styled.div`
  /* background: orange; */
  line-height: 25px;
  font-weight: 300;
`;

const OuterBox = styled.div`
  /* background: red; */
  display: grid;
  margin-top: 15px;
  /* height: 50vh; width: 100vw; */
  width: 100vw;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 150px 150px 150px 150px 150px 150px 150px;
  grid-column-gap: 20px;
  @media (max-width: ${props => props.theme.mobileWidth}) {
  display: grid;
  width: 100vw;
  height: 100%;
 };
`;
