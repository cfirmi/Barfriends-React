import styled from 'styled-components'
import Link from 'next/link'

const emojiMood = '../../static/images/home/emojiMood.png'

const OuterBox = styled.div`
  /* background: red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px 200px;
  margin-top: 200px;
  h1 {
    grid-row: 3;
    grid-column: 1 / -1;
    font-size: ${props => props.theme.head1};
    font-weight: 800;
    text-align: center;
    margin-top: -60px;
    color: white;
    z-index: 2;
    @media (max-width: 1200px) {
     margin-top: -100px;
     margin-bottom: 0px;
    };
    @media (max-width: 640px) {
     margin-top: -60px;
     font-size: 50px;
    };
    @media (max-width: 458px) {
     margin-top: -100px;
     font-size: 40px;
    };
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
  p {
    color: white;
    grid-row: 3;
    text-align: center;
    grid-column: 1 / -1;
    margin-top: 10px;
    font-size: 20px;
    z-index: 2;
    /* margin-top: 50px; */
    line-height: 25px;
    @media (max-width: 1200px) {
      grid-row: 4;
      margin-top: -220px;
    };
    @media (max-width: 1062px) {
      margin-top: -140px;
    };
    span {
      color: white;
      font-style: italic;
      font-size: 30px;
      font-weight: 800;
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
`;

 const ImageBox = styled.img`
  grid-row: 1/ 5;
  grid-column: 1 / -1;
  height: 100%;
  width: auto;
  place-self: center;
  z-index: 1;
  /* background: url("../../static/images/home/emojiMood.png"); */
  /* background-position: center; */
  ::selection {
      background: transparent
    }
    ::-webkit-selection {
      background: transparent
    }
    ::-moz-selection {
      background: transparent 
    }
    @media (max-width: 500px) {
      /* display: none; */
      width: 100%;
      height: auto;
      grid-row: 2 / 5;
    }; 
  `;
 
const emojiMoods = () => (
  <OuterBox>
    <ImageBox draggable="false" selectable="false" src={emojiMood} alt=""/>
    {/* <h1>&#8220;Expressions Of Emotion Are Universal&#8221;</h1> */}
    <h1>A True Expression Of Emotion</h1>
    <p>with <br/> <span>emojiMoods</span></p>
    {/* <p>minima? Deleniti iusto perferendis alias doloribus ex mollitia quos voluptatibus provident. Minima facere unde nulla pariatur quam consectetur?</p> */}
  </OuterBox>
 );
 
 export default emojiMoods;