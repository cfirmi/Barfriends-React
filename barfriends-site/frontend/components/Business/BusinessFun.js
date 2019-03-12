import styled from 'styled-components';

const TheBoys = "../../static/images/business/theboys.jpg"

const BusinessFun = () => (
  <OuterBox>
    <h1>Meet your customers</h1>
    <h3>Reach an engaged audience that lives only on Barfriends</h3>
    <BackgroundImg draggable="false" src={TheBoys} alt=""/>
  </OuterBox>
);
const OuterBox = styled.div`
/* background: yellow; */
  /* margin-top: 106px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 100vh;
  h1 {
    font-size: 100px;
    text-align: left;
    font-weight: 600;
    color: white;
    grid-column: 2 / 5;
    grid-row: 3;
  }
  h3 {
    font-size: 22px;
    text-align: left;
    font-weight: 200;
    color: white;
    grid-column: 2 / 5;
    grid-row: 4;
  }
`;

const BackgroundImg = styled.img`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  height: 100%;
  object-fit: cover;
`;

export default BusinessFun;