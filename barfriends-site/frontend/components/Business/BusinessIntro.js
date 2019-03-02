import styled from 'styled-components';

const OuterBox = styled.div`
  background: red;
  margin-top: 66px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw;
`;

const BusinessIntro = () => (
  <div>
    <OuterBox>
      <div>
        Welcome new customers
      </div>
      <div>
        Engage your customers before they enter 
      </div>
    </OuterBox>
  </div>
);

export default BusinessIntro;