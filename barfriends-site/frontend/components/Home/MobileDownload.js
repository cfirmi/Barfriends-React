import styled from 'styled-components';


const AndroidIcon = '../../static/images/deviceimages/android.svg';
const AppleIcon = '../../static/images/deviceimages/apple.svg';

const MobileDownload = () => (
 <OuterBox>
    <AvailFor>
    <Dload>Download Now</Dload>
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
 </OuterBox>
);

export default MobileDownload;

const OuterBox = styled.div`
  @media (max-width: ${props => props.theme.mobileWidth}) {
    /* background: red; */
    z-index: 10;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 200px;
    overflow: hidden;
  };
`;

const AvailFor = styled.div`
  display: none;
  @media (max-width: ${props => props.theme.mobileWidth}) {
  display: grid;
  margin-top: -80px;
  align-content: start;
  z-index: 10;
  grid-row: 2;
  grid-column: 2 / 3;
    width: 100vw;
  };
`;

const Dload = styled.div`
  /* background: red; */
  color: white;
  text-align: center;
  font-size: 45px;
  grid-row: 1;
  grid-column: 1 / -1;
`;


const Item = styled.div`
  display: grid;
  grid-template-columns: 40px 200px;
  grid-template-rows: 40px;

  width: 400px;
  height: 40px;
  color: ${props => props.theme.orange};
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
    margin-top: 17px;
    height: 40px;
    width: 300px;
  };
`;

const DeviceIcon = styled.div`
  height: 40px;
  width: 40px;
  z-index: 10;
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
  z-index: 10;
  color: white;
`;
//Detailing the phone that displays


