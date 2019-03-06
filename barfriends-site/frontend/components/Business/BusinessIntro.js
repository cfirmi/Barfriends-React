import styled from 'styled-components';
import Carousel from './Carousel';

const bar = '../../static/images/business/bar.jpg'
const barfriends = '../../static/images/business/barfriendsbusiness.svg'

const BusinessIntro = () => (
  <OuterBox>
    <Title src={{barfriends}} alt="" />
  </OuterBox>
);
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

const Title = styled.img`
  /* background: red; */
  grid-row: -1;
  grid-column: 2 / 4;
  margin-left: 50px;
  height: 100%;

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

export default BusinessIntro;