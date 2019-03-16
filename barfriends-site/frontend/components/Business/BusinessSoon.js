import styled from 'styled-components';

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
  margin-top: 150px;
  width: 100vw; height: 100%;  max-height: 700px;
  h1 {
    /* margin-top: 150px; */
    grid-column: 4 / -1;
    grid-row: 2;
    font-weight: 600;
    font-size: 40px;
    text-align: center;
    color: black;
  }
  img {
    margin-top: 100px; margin-left: -200px;
    grid-column: 1;
    grid-row: 2 / 5;
    height: 550px;
  }
  p {
    /* background: red; */
    text-align: center;
    grid-column: 4 / -1;
    grid-row: 3;
    font-size: 20px;
    color: grey;
  }
  @media (max-width: 1350px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px 50px 1fr 1fr 1fr 1fr;
    width: 100vw; height: 100%;
  h1 {
    grid-column: 1 / -1;
    grid-row: 1;
    font-weight: 600;
    text-align: center;
  }
  p {
    /* background: red; */
    margin:  0px 30px;
    grid-column: 1 / -1;
    grid-row: 2;
    text-align: center;
  }
  img {
    height: 550px;
    margin-top: 100px; margin-left: 50%;
    transform: translateX(-50%);
    grid-column: 1 / -1;
    grid-row: 2 / 5;
  }
  @media (max-width: 800px) {
    img {
      width: 90%;
      grid-row: 2;
    }
  };
};
`;
export default BusinessSoon;