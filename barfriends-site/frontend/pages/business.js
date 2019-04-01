import styled from 'styled-components';
import BusinessCarouselComp  from '../components/Business/BusinessCarouselComp'
import BusinessInvite  from '../components/Business/BusinessInvite'
import BarfriendsWhy from '../components/Business/BarfriendsWhy'
import NewWhy from '../components/Business/NewWhy'

const BFBusiness = () => (
  <div style={{background: 'white'}}>
    <BusinessCarouselComp />
    <BarfriendsWhy />
    <NewWhy />
    {/* <BusinessInvite /> */}
  </div>
);

export default BFBusiness;