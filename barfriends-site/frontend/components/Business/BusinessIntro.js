import styled from 'styled-components';

const bar = '../../static/images/business/bar.jpg'
const barfriends = '../../static/images/business/barfriendsbusiness.svg'


const BusinessIntro = () => (
  <OuterBox>
    <Title draggable="false" src={barfriends} alt="" />
    <SeoTitle>Connect with people that are going out.</SeoTitle>
  </OuterBox>
);
const OuterBox = styled.div`
  background: black;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 100vh;
  /* background: red; */
  @media (max-width: ${props => props.theme.mobileWidth}) {
    margin-top: -40px;
  }
`;
const SeoTitle = styled.h1`
  font-weight: 400;
  color: white;
  grid-column: 1;
  width: 490px;
  margin-top: 50px;
  margin-left: 50px;
  grid-row: 4;
  /* background: black; */

  @media (min-width: 1500px) {
    margin-top: 80px;
  };
  @media (max-width: 1000px) {
    margin-top: 40px;
  };
  @media (max-width: 600px) {
    text-align: center;
    grid-row: 2;
  };
  @media (max-width: 500px ) {
    margin: 39px 5px;
    grid-row: 2;
    grid-column: 1 / -1;
    margin-left: 50%;
    width: 100%;
    transform: translateX(-50%);
  }
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
  margin-top: -20px;
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
    @media (max-width: 600px ) {
      width: 80vw;
      grid-row: 2;
      grid-column: 1 / -1;
      margin-left: 50%;
      transform: translateX(-50%);
    };
`;

export default BusinessIntro;