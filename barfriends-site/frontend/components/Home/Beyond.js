import styled from 'styled-components';

const messages = '../../static/images/home/messages.svg'

const Beyond = () => (
  <OuterBox>
    <div className="title">
    {/* <p>Message people you meet at the bar.    </p> */}
    <p>Send <span>ASKS</span> to people you want to meet in the bar.</p>
    </div>
    <MessageImg src={messages} alt=""/>
  </OuterBox>
);
const OuterBox = styled.div`
  /* background: yellow; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 55vh;
  margin-bottom: 100px;
  .title {
    grid-row: 3;
    grid-column: 1 / -1;
    padding: 20px;
  p {
    color: white;
    text-align: center;
    font-size: 30px;
    font-weight: 800;
    font-style: italic;
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
  }
  span {
    color: white;
    text-align: center;
    font-size: 115px;
    font-weight: 800;
    font-style: italic;
    line-height: 50px;
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
`;

const MessageImg = styled.img`
  height: 250px;
  grid-row: 5; 
  grid-column: 3 / 6;
  margin-left: 50%;
  padding: 20px;
  transform: translateX(-50%);
`;
export default Beyond;