import styled from 'styled-components';
// import BusinessCarouselComp  from '../components/Business/BusinessCarouselComp'
import BusinessIntro from '../components/Business/BusinessIntro'
import BusinessInvite  from '../components/Business/BusinessInvite'
import BarfriendsWhy from '../components/Business/BarfriendsWhy'
import NewWhy from '../components/Business/NewWhy'

const BFBusiness = () => (
  <div style={{background: 'white'}}>
    {/* <BusinessCarouselComp /> */}
    <BusinessIntro />
    <BarfriendsWhy />
    <NewWhy />
    {/* <BusinessInvite /> */}
  </div>
);

export default BFBusiness;