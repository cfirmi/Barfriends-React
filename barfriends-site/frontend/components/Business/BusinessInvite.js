import styled from 'styled-components';

const BusinessInvite = () => (
  <OuterBox>
      {/* <Title>
        Content For Your Customers
      </Title> */}
      <IntroPara>Your <span style={{color: 'white'}}>customers</span> want to know more about your bar. Join us today and begin engaging with the mobile first generation will be. 
          {/* Advertise weekly schedules, upcoming special events. Watch as nights at your bar become sociallly popular.  */}
          {/* Join Barfriends today and use your profile to your advantage.
          Our Users are your customers people want to know more about your bar and you have a can reach then tonight with Barfriends.  */}
      </IntroPara>
      <SignupButton>Contact</SignupButton>
  </OuterBox>
);
//Edit test commit test2
const OuterBox = styled.div`
  background: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100vw; height: 100vh;
  min-height: 600px;
`;
//  const Title = styled.div`
//   background: url('../../static/images/business/sunset3.jpg') center;
//   background-size: 9000px;
//   background-clip: text;
//   -webkit-background-clip:text;
//   grid-column: 1 / -1;
//   text-align: center;
//   font-weight: 800;
//   font-size: ${props => props.theme.head2};
//   color: transparent;
// `;
 const IntroPara = styled.div`
  background: url('../../static/images/business/sunset4.jpg') center;
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip:text;
  max-width: 1000px;
  min-width: 600px;
  margin-left: 50%;
  transform: translateX(-50%);
  grid-column: 1 / -1;
  text-align: left;
  font-weight: 600;
  line-height: 63px;
  font-size: ${props => props.theme.head2};;
  color: transparent;
  /* padding: 150px 100px; */
  ::selection {
      background: #FFFFFF; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background:#FFFFFF; 
    }
    ::-moz-selection {
      background: #FFFFFF; 
    }
    @media (max-width: 650px) {
      min-width: 80vw;
      font-size: ${props => props.theme.head3};;
    };
`;
const SignupButton = styled.button`
  background: ${props => props.theme.orange};;
  border: none; border-radius: 25px;
  grid-row: 2;
  grid-column: 1 / -1;
  height: 45px; max-width: 213px;
  font-size: 17px;
  font-weight: 700;
  margin-top: 50px; margin-left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  color: white;
  box-shadow: ${props => props.theme.bs};
  transition: 0.5s ease;
  z-index: 2;
  :hover {
    background: white;
    color: ${props => props.theme.orange};
  }
`;
export default BusinessInvite;