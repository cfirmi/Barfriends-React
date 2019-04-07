import styled from 'styled-components';
import MapContainer from '../Map/MapContainer';
import MobileDownload from './MobileDownload';

const Iphone = '../../static/images/home/iphoneBlue.png'
const Screen = '../../static/images/home/screenrecord.MP4'

const AndroidIcon = '../../static/images/deviceimages/android.svg';
const AppleIcon = '../../static/images/deviceimages/apple.svg';
const IphoneImage = '../../static/images/deviceimages/iphonedisplay.png';

const VideoBox = styled.video`
  margin-top: 70px; 
  width: 255px;
  justify-self: center;
  grid-row: 1;
  grid-column: 3;
  border-radius: 25px;
  z-index: 1;
@media (max-width: ${props => props.theme.mobileWidth} ) {
  /* position: absolute;
  margin-left: 50%;
  transform: translateX(-50%); */
  grid-column: 2 / 4;
  };
`;
const PhoneBox = styled.img`
  grid-column: 3;
  grid-row: 1;
  justify-self: center;
  margin-top: 50px;
  width: 304px;
  z-index: 2;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    /* position: absolute; */
    grid-column: 2 / 4;
    margin-top: 51px;
    /* margin-left: 50%;
    transform: translateX(-50%); */
  };
`;

const MainDownload = () => (
 <OuterBox>
  {/* <Title>Expereince What You Want <br/>When Going Out</Title> */}
  {/* <Title>Expereince a different going out.</Title> */}
  {/* <Title>A different experience <br/> of going out.</Title> */}
    {/* <Title>Discover the best experience.</Title>
    <Desc>With Barfriends, you'll get real time, simple, information for all bars, clubs & pubs near you, available on phones all over the world.</Desc> */}
    <Title>Barfriends has the best experience.</Title>
    <Desc> You get real time, simple, information for all bars, clubs & pubs near you, available on phones all over the world.</Desc>
      {/* <PhoneItem><img src={IphoneImage} alt=""/></PhoneItem> */}
    <PhoneBox draggable='false' src={Iphone} alt=""/>
    <VideoBox 
      autoPlay={true}
      // controls
      muted
      loop
      src={Screen}>
    </VideoBox>
    <AvailFor>
      <a target="_blank" href="https://itunes.apple.com/us/app/barfriends/id1445453937?mt=8">
        <Item>
            <DeviceIcon><img src={AppleIcon} alt=""/></DeviceIcon>
            <DeviceType>Apple</DeviceType>
        </Item>
      </a>
      <a target="_blank" href="https://play.google.com/store/apps/details?id=ca.acesoft.barfriends">
        <Item>
            <DeviceIcon><img src={AndroidIcon} alt=""/></DeviceIcon>
            <DeviceType>Android</DeviceType>
        </Item>
      </a>
    </AvailFor>
   <Back>
    <MapContainer />
   </Back>
 </OuterBox>
);

export default MainDownload;

const Back = styled.div`
  z-index: 0;

`;


const OuterBox = styled.div`
  /* background: ${props => props.theme.orange}; */
  display: grid;
  grid-template-columns: 1fr 370px 350px 1fr;
  grid-template-rows: 100px 100px;
  height: 100vh; width:100vw;
  padding-top: 100px;
  z-index: 10;
  @media (max-width: ${props => props.theme.mobileWidth}) {
  /* background: red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  padding-top: 0px;
  margin-top: -10vh;
  height: 110vh;
  min-height: 850px;
  overflow: hidden;
  };
`;
const Title = styled.div`
  /* background: green; */
  /* background: ${props => props.theme.ogBlack}; */
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 30px;
  text-align: left;
  font-size: 35px;
  padding: 10px 15px;
  width: 100%; height: 100%;
  border-radius:  20px 20px 0px 0px;
  color: ${props => props.theme.black};
  z-index: 10;
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    /* background: blue; */
    display: none;
    margin-left: 0px;
    margin-top: 15px; 
    width: 100vw;
    grid-row: 1;
    grid-column: 1 / -1;
    text-align: center;
  };

`;
const Desc = styled.div`
  grid-column: 2 / 3;
  grid-row: 3;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  font-size: 17px;
  padding: 0px 15px;
  letter-spacing: 0.98px;
  width: 100%; height: 115px;
  color: ${props => props.theme.black};
  z-index: 10;
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
  @media (max-width: ${props => props.theme.mobileWidth}) {
    display: none;
    grid-row: 9;
    grid-column: 1 / -1;
    width: 100%;
    margin-left: 0px;
    color: white;
    margin-top: 25px;
    text-align: center;
    padding: 0px 20px;

  };
`;


const AvailFor = styled.div`
  /* background: ${props => props.theme.ogBlack}; */
  display: grid;
  height: 100px; width: 100%;
  margin-top: 110px;
  border-radius: 0px 0px 20px 20px;
  align-content: start;
  grid-row: 3;
  grid-column: 2 / 3;
  row-gap: 10px;
  z-index: 10;
  @media (max-width: ${props => props.theme.mobileWidth}) {
  margin-top: 10px;
    display: none;
    /* background: rebeccapurple; */
    height: 450px; width: 100vw;
    grid-row: 4;
  };
`;


const Item = styled.div`
  display: grid;
  grid-template-columns: 40px 200px;
  grid-template-rows: 40px;
  width: 300px;
  height: 40px;
  background: #ffffff20;
  box-shadow: ${props => props.theme.bs};
  border-radius: 20px;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  :hover {
    /* background: #1A1A1A; */
    background: ${props => props.theme.orange};
    transition: 0.2s ease-in;

  }
  @media (max-width: ${props => props.theme.mobileWidth}) {
    margin-left: 50%; 
    transform: translateX(-50%);
    height: 40px;
    width: 300px;
  };
`;

const DeviceIcon = styled.div`
  height: 40px;
  width: 40px;
  z-index: 10;
  line-height: 35px;
  img {
    height: 20px;
    margin-left: 51%;
    transform: translateX(-50%);
  }
`;
const DeviceType = styled.div`
  height: 40px; width: 200px;
  line-height: 40px;
  font-weight: 400;
  font-size: 17px;
  z-index: 10;
  color: black;
`;
//Detailing the phone that displays

const PhoneItem = styled.div`
  grid-row: 1 / -1;
  grid-column: 3;
  z-index: 10;
  img {
  width: 300px;
  grid-column: 1;
  margin-bottom: 130px ;
  grid-row: 1 / -1;
  }
  @media (max-width: ${props => props.theme.mobileWidth}) { 
    /* background: red; */
    grid-column: 1 / -1;
    grid-row: 1;
    margin-top: 55px;
    img {
      /* margin-top: 100px; */
      width: 300px;
      transform: translateX(-50%);
      margin-left: 50%;
      overflow-x: hidden;
    }
  };
`;

