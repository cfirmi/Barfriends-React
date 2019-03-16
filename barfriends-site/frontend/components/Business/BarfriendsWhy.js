import styled from 'styled-components'
const Map = 'static/images/joinimg/joinCarousel/map.png'

const BarfriendsWhy = () => (
  <OuterBox>
    <ImageWhy src={Map} alt=""/>
    <WhyBox>
      <h1>Why Barfriends</h1>
      <p>People use Barfriends to discover bars or clubs in their area, sign up on Barfriends and reach your customers tonight.</p>
    </WhyBox>
  </OuterBox>
);

export default BarfriendsWhy;


const OuterBox = styled.div`
  background: white;
  display: grid;
  width: 100vw; height: 90vh;
  margin-top: 100px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const ImageWhy = styled.img`
  width: 300px;
  grid-row: 2 / -1;
  grid-column: 2;
  @media (max-width: 800px) {
    margin-left: 50%;
    grid-column: 1 / -1;
    transform: translateX(-50%);
  };
`;

const WhyBox = styled.div`
  /* background: black; */
  width: 500px; 
  grid-row: 4;
  grid-column: 5;
  h1 {
    font-weight: 600;
    font-size: 30px;
    color: #000;
  }
  p {
    margin-right: 10px;
    font-size: 20px;
    color: grey;
  }
  @media (max-width: 800px) {
    margin-left: 50%;
    transform: translateX(-50%);
    grid-row: 1;
    grid-column: 1 / -1;
    text-align: center;
    h1 {
    font-size: 30px;
    font-weight: 600;
    color: #000;
  }
    p {
      margin-right: 0px;
      font-size: 16px;
      color: grey;
    }
  };
`;
