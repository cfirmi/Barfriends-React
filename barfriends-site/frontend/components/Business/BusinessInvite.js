import styled from 'styled-components';

const BusinessInvite = () => (
  <OuterBox>
      <h1>
        Content For Your Customers
      </h1>
        <IntroPara>Your customers want to know more about your bar. Join us today and start engaging the mobile first generation. 
           Advertise weekly schedules, upcoming special events. Your popular nights will be automatically advertised. Join Barfriends today and use your profile to your advantage.
            Our Users are your customers people want to know more about your bar and you have a can reach then tonight with Barfriends. 
        </IntroPara>
  </OuterBox>
);
//Edit test commit test2
const OuterBox = styled.div`
  /* background: yellow; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 100vh;
`;
 const IntroPara = styled.div`
    background: url('../../static/images/business/sunset.jpg') center;
    background-clip: text;
    -webkit-background-clip:text;
    font-weight: 800;
    font-size: ${props => props.theme.head4};
    grid-column: 1 / -1;
    color: transparent;
    text-align: center;
 `;
export default BusinessInvite;