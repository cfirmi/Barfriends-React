import styled from 'styled-components';

const bar = '../../static/images/business/bar.jpg'
const barfriends = '../../static/images/business/barfriendsbusiness.svg'


const BusinessIntro = () => (
  <OuterBox>
    <Title src={barfriends} alt="" />
    <SeoTitle>Engage the mobile-first generation.</SeoTitle>
  </OuterBox>
);
const OuterBox = styled.div`
  /* background: red; */
  margin-top: 106px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 100vh;
  h1 {
    
  }
  @media (max-width: ${props => props.theme.mobileWidth}) {
    margin-top: -40px;
  }
`;
const SeoTitle = styled.h1`
  /* font-size: 21px; */

  font-weight: 200;
  color: white;
  grid-column: 1 / 5;
  margin-top: 60px;
  margin-left: 50px;
  grid-row: 4;
  @media (max-width: 500px ) {
    margin:  39px 5px;
    grid-row: 2;
    grid-column: 1 / -1;
  }
  @media (min-width: 1500px) {
    margin-top: 60px;
  };
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
`;

const Title = styled.img`
  /* background: red; */
  grid-row: 4;
  grid-column: 1 / 5;
  margin-left: 50px;
  width: 100%;
  min-width: 500px;
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
    @media (max-width: 500px ) {
      width: 80%;
      min-width: 100%;
      grid-row: 2;
      grid-column: 1 / -1;
      margin-left: 50%;
      transform: translateX(-50%);
    };
`;

export default BusinessIntro;