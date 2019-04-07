import styled from 'styled-components'
import Link from 'next/link'

const Safe = '../../static/images/home/lineup.jpg';


const OuterBox = styled.div`
  /* background: red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px 100px 200px 150px;
  color: #fff;
  p,
  span {
    color: #fff;
    line-height: 30px;
    text-align: left;
    
  }
  
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-template-rows: 200px 100px 300px 100px 100px;
  };
`;

 const SafeImg = styled.img`
  grid-column: 2;
  grid-row: 1;
  max-width: 600px;
  max-height: 600px;
  object-fit: cover;
  @media (max-width: ${props => props.theme.mobileWidth}) {
    grid-row: 2;
    margin-left: 50%;
    min-width: 100vw;
    max-height: 400px;
    object-position: 0% 70%;
    transform: translateX(-50%);
    grid-column: 1 / -1;
  };
`;

const Title = styled.h1`
  grid-column: 3 / -1;
  font-weight: 600;
  font-size: ${props => props.theme.head3};
  grid-row:  2;
  text-align: center;
  margin-top: 50px;
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
  @media (max-width: 1325px) {
    margin-top: 0px;
  };
  @media (max-width: ${props => props.theme.mobileWidth}) { 
    grid-row: 4;
    grid-column: 1 / -1;
    text-align: center;
    margin-top: 20px;
  }
  @media (max-width: 505px) { 
    margin-top: 0px;
  }
 `;
const Text = styled.p`
  grid-column: 3 / -1;
  grid-row: 3;
  padding: 0 30px ;
  /* margin-top: 20px; */
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  justify-self: bottom;
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
    grid-row: 5;
    grid-column: 1 / -1;
    padding: 0 100px;
  }
`;

const Safety = () => (
  <OuterBox>
    <Title>Your safety is our concern</Title>
    <Text>
      We connect you and your friends together to have a great time.
      Choose to Join the bar you are at allowing people to connect with you through our <span style={{textDecoration: 'underline', textDecorationColor: 'blue'}}>ASKS</span> Messages.
    </Text>
    <SafeImg draggable="false" selectable="false" src={Safe} alt=""/>
  </OuterBox>
 );
 
 export default Safety;