import styled from 'styled-components';
import MapContainer from '../Map/MapContainer';
import MobileDownload from './MobileDownload';

const Iphone = '../../static/images/home/iphoneBlue.png'
const ScreenIntro = '../../static/images/home/intro.mov'
const QR = '../../static/images/home/qrcode.svg'
const label = '../../static/images/label.svg'

const AndroidIcon = '../../static/images/deviceimages/android.svg';
const AppleIcon = '../../static/images/deviceimages/apple.svg';

const VideoBox = styled.video`
  margin-top: 50px; 
  width: 255px;
  justify-self: center;
  grid-row: 4;
  grid-column: 2 / 4;
  border-radius: 25px;
  z-index: 1;
@media (max-width: ${props => props.theme.mobileWidth} ) {
  margin-top: 50px;
  grid-column: 1 / -1;
  grid-row: 5;
  };
`;
const PhoneBox = styled.img`
  grid-row: 4;
  grid-column: 2 / 4;
  justify-self: center;
  margin-top: 30px;
  width: 305px;
  z-index: 2;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    /* display: none; */
    grid-column: 1 / -1;
    margin-top: 20px;
    grid-row: 5;
    margin-top: 31px;
  };
`;


const MainDownload = () => (
 <OuterBox>
    <Label src={label} alt=""/>
    <Desc>Find Bars. Go Out. Meet Friends. Chat.</Desc>
    <Dload>Download Now</Dload>
    <PhoneBox draggable='false' src={Iphone} alt=""/>
    <VideoBox 
      autoPlay={true}
      // controls
      muted
      loop
      src={ScreenIntro}>
    </VideoBox>
    <QRLink src={QR} alt=""/>
    <AvailFor>
      <a target="_blank" href="https://itunes.apple.com/us/app/barfriends/id1445453937?mt=8">
        <Item>
            <DeviceIcon><img className="apple" src={AppleIcon} alt=""/></DeviceIcon>
            <DeviceType>Apple</DeviceType>
        </Item>
      </a>
      <a target="_blank" href="https://play.google.com/store/apps/details?id=ca.acesoft.barfriends">
        <Item>
            <DeviceIcon><img className="android" src={AndroidIcon} alt=""/></DeviceIcon>
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
  grid-template-rows: 100px 100px 100px 1fr 1fr 1fr;
  height: 125vh; width:100vw;
  margin-top: 150px;
  min-height: 1050px;
  padding-top: 10px;
  z-index: 10;
  @media (max-width: ${props => props.theme.mobileWidth}) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  margin-top: 0px;
  margin-bottom: 100px;
  padding-top: 0px;
  height: 130vh;
  min-height: 1050px;
  overflow: hidden;
  };
`;
const Label = styled.img`
  grid-row: 1;
  grid-column: 1 / -1;
  font-weight: 600;
  padding: 10px 15px;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 90%;
   height: 100%;
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
    margin-top: 15px; 
    /* width: 100vw; */
    grid-row: 1;
    grid-column: 1 / -1;
  };

`;
const Desc = styled.div`
  grid-column: 2 / 4;
  grid-row: 2;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
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
    grid-row: 2;
    grid-column: 1 / -1;
    width: 100%;
    margin-left: 0px;
    color: black;
    /* margin-top: 25px; */
    text-align: center;
    padding: 0px 10px;

  };
`;
const Dload = styled.div`
  display: none;
  @media (max-width: ${props => props.theme.mobileWidth}) {
    display: inline-block;
    grid-row: 2;
    grid-column: 1 / -1;
    color: black;
    font-weight: 200;
    font-size: 40px;
    text-align: center;
    z-index: 4;
  };
`;
 const QRLink = styled.img`
  /* background: red; */
  grid-row: 2;
  grid-column: 2 / 3;
  height: 100px; width: 100px;
  margin-top: 50px; margin-left: 200px;
  z-index: 3;
  @media (max-width: ${props => props.theme.mobileWidth}) {
    grid-column: 1 / -1;
    margin-top: 0px;
    height: 100px; width: 100%;
    margin-left: 50%;
    transform: translateX(-50%);
    grid-row: 4;
  };
`;

const AvailFor = styled.div`
  display: grid;
  height: 100px; width: 100%;
  margin-top: 50px; margin-left: -20px;
  padding-left: 40px;
  border-left: 2px solid black;
  align-content: start;
  grid-row: 2;
  grid-column: 3 / 4;
  row-gap: 10px;
  z-index: 10;
  @media (max-width: ${props => props.theme.mobileWidth}) {
    /* background: red; */
    height: 100px; width: 300px;
    grid-row: 3;
    grid-column: 1 / -1;
    margin-top: -30px;
    border-left: none;
    padding-left: 0px;
    margin-left: 50%;
    transform: translateX(-50%);

  };
`;


const Item = styled.div`
  display: grid;
  grid-template-columns: 150px;
  grid-template-rows: 40px;
  width: 150px;
  height: 40px;
  text-align: center;
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
  grid-row: 1;
  grid-column: 1;
  height: 40px;
  width: 40px;
  z-index: 10;
  line-height: 35px;
    .apple {
      margin-left: 30px;
    }
    .android {
      margin-left: 20px;
    }
  img {
    height: 20px;
  }
`;
const DeviceType = styled.div`
  /* background: red; */
  grid-row: 1;
  grid-column: 1;
  height: 40px; width: 150px;
  line-height: 40px;
  font-weight: 400;
  font-size: 17px;
  z-index: 10;
  color: black;
`;

