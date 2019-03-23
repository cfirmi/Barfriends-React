import styled from 'styled-components'
import Link from 'next/link'

const emojiMood = '../../static/images/home/emojiBackground.svg'

const OuterBox = styled.div`
  /* background: red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px 200px;
  h1 {
    grid-row: 3;
    grid-column: 1 / -1;
    font-size: 150px;
    font-weight: 800;
    text-align: center;
    margin-top: -100px;
    color: white;
  }
  p {
    color: white;
    grid-row: 3;
    grid-column: 2 / 5;
    margin-top: -20px;
    /* margin-top: 50px; */
  }
`;

 const ImageBox = styled.img`
  margin-top: -100px;
  grid-row: 2 / 5;
  grid-column: 1 / -1;
  height: 100%;
  /* width: 300px; */
 `;
 
const emojiMoods = () => (
  <OuterBox>
    <ImageBox src={emojiMood} alt=""/>
    <h1>emojiMoods</h1>
    {/* <p>minima? Deleniti iusto perferendis alias doloribus ex mollitia quos voluptatibus provident. Minima facere unde nulla pariatur quam consectetur?</p> */}
  </OuterBox>
 );
 
 export default emojiMoods;