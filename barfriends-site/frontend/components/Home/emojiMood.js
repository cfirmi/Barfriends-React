import styled from 'styled-components'
import Link from 'next/link'

const emojiMood = '../../static/images/home/emojiBackground.png'

const OuterBox = styled.div`
  /* background: red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px 200px;
  h1 {
    grid-row: 3;
    grid-column: 1 / -1;
    font-size: 70px;
    font-weight: 800;
    text-align: center;
    margin-top: -60px;
    color: white;
    z-index: 2;
    @media (max-width: 1200px) {
     margin-top: -100px;
    };
    @media (max-width: 650px) {
     margin-top: -60px;
     font-size: 50px;
    };
    @media (max-width: 450px) {
     margin-top: -40px;
     font-size: 40px;
    };
  }
  p {
    color: white;
    grid-row: 3;
    text-align: center;
    grid-column: 1 / -1;
    margin-top: 10px;
    font-size: 20px;
    /* margin-top: 50px; */
    line-height: 25px;
    @media (max-width: 1200px) {
      grid-row: 4;
      margin-top: -130px;

    };
    span {
      color: white;
      font-style: italic;
      font-size: 30px;
      font-weight: 800;
    }
  }
`;

 const ImageBox = styled.img`
  margin-top: -100px;
  grid-row: 2 / 5;
  grid-column: 1 / -1;
  height: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  /* width: 300px; */
 `;
 
const emojiMoods = () => (
  <OuterBox>
    <ImageBox src={emojiMood} alt=""/>
    <h1>Wear your heart on your sleeve</h1>
    <p>with <br/> <span>emojiMoods</span></p>
    {/* <p>minima? Deleniti iusto perferendis alias doloribus ex mollitia quos voluptatibus provident. Minima facere unde nulla pariatur quam consectetur?</p> */}
  </OuterBox>
 );
 
 export default emojiMoods;