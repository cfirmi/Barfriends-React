import styled from 'styled-components';
import BusinessCarouselComp  from '../components/Business/BusinessCarouselComp'
import BusinessSoon  from '../components/Business/BusinessSoon'
import BarfriendsWhy from '../components/Business/BarfriendsWhy'

const BFBusiness = () => (
  <div style={{background: 'white'}}>
    <BusinessCarouselComp />
    <BarfriendsWhy />
    <BusinessSoon />
  </div>
);

export default BFBusiness;