import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Moon = '../../static/images/Experience/Moon2.png';

const OuterBox = styled.div`
  background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, #020B31 90%);
  margin-top: 150px;
  min-height: 600px;
  @media (max-width: 950px) {
  margin-top: 10px;
  };
`;
const Title = styled.h1`
  margin-top: 300px;
  margin-bottom: 10vh;
  color: white;
  font-weight: 800;
  text-align: center;
  line-height: 60px;;
  font-size: 65px;
  p {
  margin-top: 40px;
  color: white;
  font-weight: 100;
  font-size: ${props => props.theme.head4};
  text-decoration: underline;
  }
  h1 {
    color: white;
    font-weight: 400;
    margin-left: -290px;
    text-align: center;
  }
  @media (max-width: 850px) {
    font-size: ${props => props.theme.head2};
  };
  @media (max-width: 500px) {
    font-size: ${props => props.theme.head2};
  };
  /* padding: 30vw; */
`;
const BigBox = styled.div`
  /* background: blue; */
  height: 370px;
  font-weight: 600;
  text-align: center;
  font-size: 45px;
  overflow-y: hidden;
  /* background-position: center top; */
    overflow-x: hidden;
  img {
    width: 700px;
    margin-left: 50%;
    transform: translateX(-50%);
    -webkit-clip-path: polygon(0% 0%, 0 55%, 100% 55%, 100% 0%);
    clip-path: polygon(0% 0%, 0 55%, 100% 55%, 100% 0%);
  }
`;

const MainMap = () => (
    <OuterBox>
        <Title>
            Cheers To A Better <br/>Going Out Experience.
          <Link href="/experiencecampaign">
            <a>
              <p>campaign</p>
            </a>
          </Link>
        </Title>
        <BigBox>
        <img src={Moon} alt=""/>
        </BigBox>
    </OuterBox>
);

export default MainMap;