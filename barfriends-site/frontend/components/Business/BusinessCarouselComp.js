import Carousel from 'nuka-carousel'
import BusinessSignin from './BusinessSignin'
import BusinessFun from './BusinessFun'
import BusinessIntro from './BusinessIntro'

const BusinessCarouselComp = () => (
  <Carousel 
    // autoplay={true} 
    wrapAround={true}
    swiping={true} 
    pauseOnHover={false}
    speed={100}
    withoutControls={true}
    renderCenterLeftControls={({ previousSlide }) => ( null
    )}
    renderCenterRightControls={({ nextSlide }) => ( null
    )}
    style={{height: '100%', width: '100vw', color: 'white'}}
    className="random"
  >
    <BusinessIntro />
    <BusinessSignin />
    <BusinessFun />
  </Carousel>
);

export default BusinessCarouselComp;