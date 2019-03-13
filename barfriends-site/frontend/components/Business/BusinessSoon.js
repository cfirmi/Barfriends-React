import styled from 'styled-components';
// import gg from '../../static/images/business/'

const computerscreen = "../../static/images/business/computerscreen.svg"

const BusinessSoon = () => (
  <OuterBox>
  {/* <img src={computerscreen} alt=""/> */}
  <h1>Comming Soon.</h1>
  <img src={computerscreen} alt=""/>
  <p>One day in the near far future you will be able to create events and awesome stuff.</p>
  </OuterBox>
);
const OuterBox = styled.div`
  /* background: yellow; */
  display: grid;
  grid-template-columns: 250px 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 100vw; height: 100vh;
  h1 {
    font-weight: 600;
    margin-top: 150px;
    grid-column: 4 / -1;
    grid-row: 2;
    color: white;
    text-align: center;
    font-size: 45px;
  }
  img {
    grid-column: 1;
    grid-row: 2 / 5;
    height: 550px;
    margin-top: 100px; margin-left: -200px;
  }
  p {
    text-align: center;
    /* background: red; */
    /* margin: 30px; */
    grid-column: 4 / -1;
    grid-row: 3;
    font-size: 20px;
    color: white;
  }
  @media (max-width: 1350px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 100vw; height: 100vh;
  h1 {
    font-weight: 600;
    margin-top: 150px;
    grid-column: 1 / -1;
    grid-row: 1;
    color: white;
    text-align: center;
    font-size: 45px;
  }
  p {
    text-align: center;
    /* background: red; */
    margin: 30px;
    grid-column: 1 / -1;
    grid-row: 2;
    color: white;
  }
  img {
    grid-column: 1 / -1;
    grid-row: 2 / 5;
    height: 550px;
    margin-top: 100px; margin-left: 0px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 800px) {
    img {
      width: 90%;
    }
  };
};
`;
export default BusinessSoon;