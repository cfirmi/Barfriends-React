import styled from 'styled-components';

const messages = '../../static/images/home/messaging.svg'

const Beyond = () => (
  <OuterBox>
    <div className="title">
      <h1>
        ASKS
      </h1>
    </div>
    <MessageImg src={messages} alt=""/>
  </OuterBox>
);
const OuterBox = styled.div`
  background: yellow;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 50vh;
  margin-bottom: 100px;
  .title {
    grid-row: 3;
    grid-column: 1 / -1;

  }
  h1 {
    text-align: center;
    font-size: 105px;
    font-weight: 800;
    font-style: italic;
  }
`;

const MessageImg = styled.img`
  grid-row: 4; 
  grid-column: 3 / 6;
`;
export default Beyond;