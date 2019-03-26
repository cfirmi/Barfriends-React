import styled from 'styled-components';
import BusinessCarouselComp  from '../components/Business/BusinessCarouselComp'
import BusinessInvite  from '../components/Business/BusinessInvite'
import BarfriendsWhy from '../components/Business/BarfriendsWhy'

const BFBusiness = () => (
  <div style={{background: 'white'}}>
    <BusinessCarouselComp />
    <BarfriendsWhy />
    <BusinessInvite />
  </div>
);

export default BFBusiness;