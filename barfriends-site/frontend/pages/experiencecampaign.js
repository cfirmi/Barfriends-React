import Experience1 from '../components/Campaign/Experience';
import Experience2 from '../components/Campaign/Experience2';
import styled from 'styled-components'

const OuterBox = styled.div` 
  display: inline-block;
`;

const ExperienceCampaign = () => (
  <OuterBox>
    <Experience1 style={{zIndex: '1'}} />
    <Experience2 style={{zIndex: '2'}} />
  </OuterBox>
);
  
  export default ExperienceCampaign;