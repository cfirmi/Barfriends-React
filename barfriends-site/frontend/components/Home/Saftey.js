import styled from 'styled-components'
import Link from 'next/link'

const Safe = '../../static/images/home/lineup.jpg';


const OuterBox = styled.div`
  /* background: red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px 100px 200px 150px 100px;
  color: #fff;
  min-height: 600px; 
  /* margin-top: 50px; */
  span {
    color: #fff;
    line-height: 30px;
    text-align: left;
    ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
  }
  @media (max-width: 1400px ) {
    grid-template-rows: 200px 100px 300px 100px 100px 1fr ;
  };
  @media (max-width: 800px) {
    height: 100%;
    grid-template-rows: 200px 100px 300px 100px 100px;
  };
`;

 const SafeImg = styled.img`
  grid-column: 2;
  grid-row: 2;
  max-width: 600px;
  max-height: 600px;
  object-fit: cover;
  margin-top: -70px;
  @media (max-width: 1400px) {
    margin-top: 0px;
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
  font-weight: 800;
  font-size: ${props => props.theme.head2};
  grid-row:  2;
  text-align: center;
  min-width: 600px;
  margin-top: 0px;
  color: transparent;
  background: url('../../static/images/business/sunset6.jpg') center;
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip:text;
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
    font-size: ${props => props.theme.head2};
    margin-top: 0px;
  };
  @media (max-width: 1400px) { 
    grid-row: 5;
    grid-column: 1 / -1;
    text-align: center;
    margin-top: 20px;
  }
  @media (max-width: 730px) {
    grid-row: 5;
    margin-top: -60px;
    padding: 0 50px;
    min-width: 100vw;
    font-size: ${props => props.theme.head3};
  };

 `;
const Text = styled.p`
  color: transparent;
  background: url('../../static/images/business/sunset6.jpg') center;
  background-size: 110%;
  background-clip: text;
  -webkit-background-clip:text;
  grid-column: 3 / -1;
  grid-row: 3;
  min-width: 650px; height: 650px;
  text-align: center;
  font-weight: 600;
  font-size: ${props => props.theme.head4};
  line-height: 56px;
  justify-self: bottom;
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
  @media (max-width: 1400px) { 
    min-width: 850px; 
    grid-row: 6;
    grid-column: 1 / -1;
    padding: 0 100px;
  }
  @media (max-width: 730px) {
    height: 900px;
    grid-row: 7;
    padding: 0 50px;
    min-width: 100vw;
    font-size: ${props => props.theme.head4};
  };
`;

const Safety = () => (
  <OuterBox>
    <Title>Your <span>safety</span> is our concern</Title>
    <Text>
      We connect you and your friends together to have a great time going out. 
      To join a bar you have to be near it to be shown the join button. Only those who join the bar can see other joined members.
      <br/> 
      <Link href="/safety">
        <a>
          <span style={{ cursor: 'pointer', textDecoration: 'underline',fontSize: '20px', textDecorationColor: 'blue'}}>Learn More</span>
        </a>
      </Link>
      {/* Joining the bar you are at is only allowing other people that are also joined connect with eachother. User have the ability to block other user aswell Use our messaging platform by selecting an <span style={{textDecoration: 'underline', textDecorationColor: 'blue'}}>ASKS</span> and sending a message. Users can use a message to prove that someone is misbehaving and show bar security. */}
    </Text>
    <SafeImg draggable="false" selectable="false" src={Safe} alt=""/>
  </OuterBox>
 );
 
 export default Safety;