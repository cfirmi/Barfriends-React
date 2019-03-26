import styled from 'styled-components';

const Beyond = () => (
  <OuterBox>
    <div>
      <h1>
        Business Invite
      </h1>
    </div>
  </OuterBox>
);
const OuterBox = styled.div`
  background: yellow;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 50vh;
  h1 {
    text-align: center;
  }
`;
export default Beyond;