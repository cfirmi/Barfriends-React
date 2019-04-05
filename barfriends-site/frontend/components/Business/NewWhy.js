import styled from 'styled-components';

const NewWhy = () => (
  <OuterBox>
    <WhyItem>
      <TitleBox>The Future of Going Out.</TitleBox>
      <MainText>
        Barfriends is a technology that gives access to you and to those who love your bar. 
        We value your money and the time it takes reaching out to customers, hosting events and creating a unqiue atmosphere. 
        Our Users are your customers, join us today, on Barfriends you simply start connecting and engaging with your community right away.
      </MainText>
    </WhyItem>
    <WhyItem>
      <TitleBox>How do I get started?</TitleBox>
      <MainText> 
        I want to advertise at your bar in exchange I advertise you on my app.
        We want you to advertise you on our app in exchange for you to advertise for us at your bar.  
      </MainText>
    </WhyItem>
    <WhyItem>
      <TitleBox>What is different! Since I'm joining early</TitleBox>
      <MainText> 
        Basically 
      </MainText>
    </WhyItem>
  </OuterBox>
);
const OuterBox = styled.div`
  /* background: black; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 100vh;
  margin-top: 100px;
`;

const TitleBox = styled.div`
    /* background: red; */
    border-bottom: 1px solid lightgray;
    grid-column: 1 / -1;
    width: 50vw; height: 50px;
    max-width: 1000px;
    color: white;
    text-align: left;
    line-height: 30px;
    font-size: 35px;
    font-weight: 600;
    margin-top: 50px; margin-left: 50%;
    transform: translateX(-50%);
    @media (max-width: 1300px) {
      height: 70px;
    };
    @media (max-width: 1000px) {
      height: 60px;
      width: 70vw;
    };
    @media (max-width: 600px) {
      width: 90vw;
    };
`;
 const WhyItem = styled.div`
  background: #000;
  background: #FF7000;
  box-shadow: ${props => props.theme.bs2};
  border-radius: 9px;
  margin: 20px 0px; 
  transform: translateX(-50%);
  /* transform: skewX(-5deg); */
  margin-left: 50%;
  width: 80vw;
  grid-column: 1 / -1;
 `;
const MainText = styled.p`
    /* background: red; */
    grid-column: 1 / -1;
    width: 50vw;
    max-width: 1000px;
    color: white;
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px; margin-left: 50%;
    transform: translateX(-50%);
    @media (max-width: 1000px) {
      width: 70vw;
    };
    @media (max-width: 600px) {
      width: 90vw;
    };
`;
export default NewWhy;