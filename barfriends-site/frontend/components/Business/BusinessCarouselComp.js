import Carousel from 'nuka-carousel'
import styled from 'styled-components'

const BetterEvents = "../../static/images/joinimg/ASKBanner.svg"
const TheBoys = "../../static/images/business/theboys.jpg"

const Images = styled.img`
  width: 100%;
`;

const BusinessCarouselComp = () => (
  <Carousel 
    autoplay={true} 
    wrapAround={true}
    swiping={true} 
    pauseOnHover={true}
    speed={200}
    // withoutControls={true}
    renderCenterLeftControls={({ previousSlide }) => ( null
    )}
    renderCenterRightControls={({ nextSlide }) => ( null
    )}
    style={{height: '100vw', marginTop: '100vh', background: 'red', color: 'white' }}
  >
    <div style={{height: '100%', width: '100vw'}}>
      <Images draggable='false' src={BetterEvents} alt=""/>
    </div>
    <div style={{height: '100%', width: '100vw'}}>
      <Images draggable='false' src={TheBoys} alt=""/>
    </div>
  </Carousel>
);

export default BusinessCarouselComp;