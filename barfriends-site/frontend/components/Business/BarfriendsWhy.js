import styled from 'styled-components'


const BarfriendsWhy = () => (
  <OuterBox>
    <WhyBox style={{background: 'white'}}>
      <h1>Why Barfriends</h1>
      <p>People use Barfriends to discover excitement, and that includes content from owners from bars, clubs, pubs.</p>
    </WhyBox>
  </OuterBox>
);

export default BarfriendsWhy;


const OuterBox = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 50vh;
`;

const WhyBox = styled.div`
  width: 500px; 
  grid-row: 4;
  grid-column: -1;
  h1 {
    font-weight: 600;
  }
  p {
    color: grey;
  }
`;
