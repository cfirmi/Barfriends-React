import styled from 'styled-components';


const AndroidIcon = '../../static/images/deviceimages/android.svg';
const AppleIcon = '../../static/images/deviceimages/apple.svg';
const IphoneImage = '../../static/images/deviceimages/iphonedisplay.png';

const MainDownload = () => (
 <OuterBox>
  <Title>Simple. Fun. <br/>For going out.</Title>
   <Desc>With Barfriends, you'll get real time, simple, information for all bars, clubs & pubs near you, available on IPhones all over the world.</Desc>
     <PhoneItem><img src={IphoneImage} alt=""/></PhoneItem>
   <AvailFor>
   <a href="#">
    <Item>
        <DeviceIcon><img src={AppleIcon} alt=""/></DeviceIcon>
        <DeviceType>Apple</DeviceType>
    </Item>
    </a>
    <a href="#">
    <Item>
        <DeviceIcon><img src={AndroidIcon} alt=""/></DeviceIcon>
        <DeviceType>Android</DeviceType>
    </Item>
    </a>
   
   </AvailFor>
 </OuterBox>
);

export default MainDownload;

const OuterBox = styled.div`
  background: ${props => props.theme.orange};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  height: 120vh; width:100vw;
  padding-top: 100px;
  @media (max-width: 764px) { 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  height: 180vh;
  padding-top: 0px;
  overflow: hidden;
  };
`;
const Title = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;
  font-weight: 400;
  line-height: 35px;
  text-align: left;
  font-size: 32px;
  width: 380px; height: 75px;
  color: #080808;
  color: white;
  @media (max-width: 764px) {
    margin-top: 15px; 
    /* background: blue; */
    width: 100vw;
    grid-row: 1;
    grid-column: 1 / -1;
    text-align: center;
  };
`;
const Desc = styled.div`
  /* background: green; */
  grid-column: 2 / 3;
  grid-row: 3;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  font-size: 16px;
  width: 380px; height: 80px;
  color: white;
  @media (max-width: 764px) { 
    grid-row: 2;
    grid-column: 1 / -1;
    width: 100%;
    text-align: center;
    padding: 0px 20px;

  };
`;

const AvailFor = styled.div`
  /* background: pink; */
  display: grid;
  height: 100px;
  width: 200px;
  margin-top: 120px;
  align-content: start;
  grid-row: 3;
  grid-column: 2 / 3;
  row-gap: 10px;
  @media (max-width: 764px) { 
    display: none;
  };
`;

const Item = styled.div`
  /* background: blue; */
  display: grid;
  grid-template-columns: 40px 200px;
  grid-template-rows: 40px;
  width: 200px;
  height: 40px;
  color: #080808;
`;

const DeviceIcon = styled.div`
  /* background: green; */
  height: 40px;
  width: 40px;
  img {
    height: 20px;
    margin-top: 9px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;
const DeviceType = styled.div`
  height: 40px; width: 200px;
  line-height: 40px;
  font-weight: 400;
  font-size: 17px;
  /* color: #ff7000; */
  
`;
//Detailing the phone that displays

const PhoneItem = styled.div`
  /* background: blue;  */
  grid-row: 1 / -1;
  grid-column: 3;
  img {
  width: 300px;
  grid-column: 3;
  /* margin-left: 30px ; */
  grid-row: 1 / -1;
  }
  @media (max-width: 764px) { 
      /* background: red; */
      grid-column: 1 / -1;
      grid-row: 3;
    img {
      /* margin-top: 100px; */
      width: 300px;
      transform: translateX(-50%);
      margin-left: 50%;
      overflow-x: hidden;
    }
  };
`;

