import Carousel from 'nuka-carousel'
import BusinessSignin from './BusinessSignin'
import BusinessFun from './BusinessFun'
import BusinessIntro from './BusinessIntro'

const BusinessCarouselComp = () => (
  <Carousel 
    // autoplay={true} 
    wrapAround={true}
    swiping={true} 
    pauseOnHover={true}
    speed={200}
    // withoutControls={true}
    renderCenterLeftControls={({ previousSlide }) => ( null
    )}
    renderCenterRightControls={({ nextSlide }) => ( null
    )}
    style={{height: '100vh', color: 'white'}}
  >
    <BusinessSignin />
    <BusinessIntro />
    <BusinessFun />
  </Carousel>
);

export default BusinessCarouselComp;