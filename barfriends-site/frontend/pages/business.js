import styled from 'styled-components';
// import BusinessCarouselComp  from '../components/Business/BusinessCarouselComp'
import BusinessIntro from '../components/Business/BusinessIntro'
import BusinessInvite  from '../components/Business/BusinessInvite'
import BarfriendsSignin from '../components/Business/BusinessSignin'
// import NewWhy from '../components/Business/NewWhy'

const BFBusiness = () => (
  <div style={{background: 'white'}}>
    {/* <BusinessCarouselComp /> */}
    <BusinessIntro />
    <BarfriendsSignin />
    <BusinessInvite />
    {/* <NewWhy /> */}
  </div>
);

export default BFBusiness;