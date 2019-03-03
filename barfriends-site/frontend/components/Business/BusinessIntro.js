import styled from 'styled-components';

const OuterBox = styled.div`
  /* background: red; */
  margin-top: 106px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px 100px  ;
  width: 100vw;
  @media (max-width: ${props => props.theme.mobileWidth}) {
    margin-top: -40px;
  }
`;


const BusinessTitle = styled.div`
    background: transparent;
    grid-column: 1 / -1;
    grid-row: 3;
    font-size: 65px; font-weight: 400;
    letter-spacing: 0.74px; line-height: 160px;
    color: white;
    text-align: center;
    z-index: 2;
    ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
  @media (max-width:${props => props.theme.mobileWidth} ) {
    grid-row: 2;
    font-size: 45px;
  };
`;
const Title = styled.div`
  /* background: red; */
  grid-row: 1;
  grid-column: 1 / -1;
  color: white;
  height: 120px;
  line-height: 40px;
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
    };
`;
const BarInfoPannel = styled.div`
  /* background: ${props => props.theme.orange}; */
  display: flex;
  grid-row: 4;
  grid-column: 1 / -1;
  height: 100px;
  justify-content: space-around;
  width: 100vw;
`;
const InfoBox = styled.div`
  /* background: red; */
  width: 200px;
`;
const Number = styled.div`
  /* background: green; */
  text-align: center;
  font-size: 27px;
  color: white;
`;
const Property = styled.div`
  /* background: yellow; */
  text-align: center;
  font-size: 16px;
  color: white;
`;



const BusinessIntro = () => (
  <div>
    <OuterBox>
      <Title>
        Welcome your new customers <br/> <span style={{fontSize: '17px', color: 'white', fontWeight: '200'}}>Reach. Engage. Entertain</span>
      </Title>

      {/* <BusinessTitle>Barfriends Business</BusinessTitle> */}
      {/* <PartImg draggable="false" src="https://thetab.com/wp-content/themes/thetab-four/assets/_img/cat/nightlife.jpg" alt=""/> */}
    <BarInfoPannel>
      <InfoBox>
        {/* Need to get the information from the server */}
        <Number>111</Number>
        <Property>Registared Bars</Property>
      </InfoBox>
      <InfoBox>
        <Number>111</Number>
        <Property>Verrified Owners</Property>
      </InfoBox>
      <InfoBox>
        <Number>111</Number>
        <Property>cities</Property>
      </InfoBox>
    </BarInfoPannel>
    </OuterBox>
  </div>
);

export default BusinessIntro;