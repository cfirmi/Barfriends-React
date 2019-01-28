import React from 'react';
import styled from 'styled-components';

const OuterBox = styled.div`
    background: red;
    height: 50vh;
    overflow-y: scroll;
    width: 100vw;
    margin-top: 100px;
`;
const Title = styled.div`
  /* background: red; */
  margin-top: 40vh;
  color: white;
  font-weight: 600;
  text-align: center;
  font-size: 45px;
`;
const BigBox = styled.div`
  background: blue;
  height: 800px;
  font-weight: 600;
  text-align: center;
  font-size: 45px;
`;


const MainMap = () => (
    <OuterBox>
        <Title>Think Experiences!</Title>
        <BigBox>THis is is a big box for cool scrolll fsdfkgbas;dkl</BigBox>
    </OuterBox>
);

export default MainMap;