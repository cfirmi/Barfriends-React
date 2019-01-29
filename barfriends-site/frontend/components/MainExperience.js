import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Moon = '../../static/images/Experience/Moon2.png';

const OuterBox = styled.div`
background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, #020B31 90%);
    width: 100vw;
    margin-top: 100px;

`;
const TitleThink = styled.div`
  margin-top: 35vh;
  margin-bottom: 10vh;
  color: white;
  font-weight: 600;
  text-align: center;
  line-height: 20px;;
  font-size: 35px;
  p {
  font-weight: 100;
  font-size: 14px;
  text-decoration: underline;
  }
  @media (max-width: 850px) {
    font-size: 30px;
  };
  @media (max-width: 500px) {
    font-size: 19px;
  };
  /* padding: 30vw; */
`;
const BigBox = styled.div`
  /* background: blue; */
  height: 431px;
  font-weight: 600;
  text-align: center;
  font-size: 45px;
  overflow-y: hidden;
  /* background-position: center top; */
    overflow-x: hidden;
  img {
    width: 800px;
    margin-left: 50%;
    transform: translateX(-50%);
    -webkit-clip-path: polygon(0% 0%, 0 55%, 100% 55%, 100% 0%);
    clip-path: polygon(0% 0%, 0 55%, 100% 55%, 100% 0%);
  }
`;


const MainMap = () => (
    <OuterBox>
        <TitleThink>
          <h1>
            Think Experience.
          </h1>
          <Link href="/experiencecampaignpage">
            <a>
              <p>campaign </p>
            </a>
          </Link>
        </TitleThink>
        <BigBox>
        <img src={Moon} alt=""/>
        </BigBox>
    </OuterBox>
);

export default MainMap;