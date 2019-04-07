import styled from 'styled-components';

const bar = '../../static/images/business/bar.jpg'
const barfriends = '../../static/images/business/barfriendsbusiness.svg'


const BusinessIntro = () => (
  <OuterBox>
    <IntroImage src={bar} alt=""/>
    <Title draggable="false" src={barfriends} alt="" />
    <Welcome>Welcome to</Welcome>
    <SeoTitle>Connect with people that are going out.</SeoTitle>
  </OuterBox>
);
const OuterBox = styled.div`
  background: black;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 90vh;
  min-height: 600px;
  /* background: red; */
  @media (max-width: ${props => props.theme.mobileWidth}) {
    margin-top: -40px;
  }
`;
 const IntroImage = styled.img`
 grid-column: 1 / -1;
 grid-row: 2;
 object-fit: cover;
 object-position: center;
 margin-left: 50%;
 transform: translateX(-50%);
 height: 200px; width: 50vw;
 min-width: 600px;
 @media (max-width: 600px) {
   width: 100%;
   padding: 10px;
   height: 400px;
 };
`;
 const Welcome = styled.div`
  color: white;
  grid-column: 1 / -1;
  grid-row: 4;
  text-align: center;
  font-size: ${props => props.theme.head2};
  font-weight: 800;
  margin-top: -80px;
  @media (max-width: 600px ) {
    font-size: ${props => props.theme.head2};
    margin-top: -60px;
    grid-row: 4;
  };
`;
const SeoTitle = styled.h1`
  /* background: black; */
  grid-column: 1 / -1;
  grid-row: 4;
  width: 490px;
  color: white;
  font-weight: 400;
  text-align: center;
  margin-left: 50%;
  transform: translateX(-50%);

  @media (min-width: 600px) {
    margin-top: 50px;
  };
  @media (max-width: 600px) {
    text-align: center;
    margin: 39px 5px;
    grid-row: 4;
    grid-column: 1 / -1;
    margin-top: 65px; margin-left: 50%;
    width: 100%;
    transform: translateX(-50%);
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
  grid-column: 1 / -1;
  min-width: 550px;
  max-width: 550px;
  margin-top: 0px;
  margin-left: 50%;
  transform: translateX(-50%);
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
      min-width: 90vw;
      width: 90vw;
      grid-row: 4;
      grid-column: 1 / -1;
      margin-top: 30px; margin-left: 50%;
      transform: translateX(-50%);
    };
`;

export default BusinessIntro;