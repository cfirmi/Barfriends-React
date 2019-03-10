import styled from 'styled-components';
import BusinessIntro from '../components/Business/BusinessIntro'
import BusinessSignin from '../components/Business/BusinessSignin'
import BusinessCarouselComp  from '../components/Business/BusinessCarouselComp'

const BFBusiness = () => (
  <div>
    <h1>
      <BusinessIntro />
      <BusinessSignin />
      <BusinessCarouselComp />
    </h1>
  </div>
);

export default BFBusiness;