import Carousel from 'nuka-carousel'
import styled from 'styled-components'

const Map = 'static/images/joinimg/joinCarousel/map.png'
const JoinBar = 'static/images/joinimg/joinCarousel/NavJoinBar.png'
const OtherProfile = 'static/images/joinimg/joinCarousel/OtherProfile.png'
const Profile = 'static/images/joinimg/joinCarousel/Profile.png'
const newASK = 'static/images/joinimg/joinCarousel/receivedASK.png'
const Send = 'static/images/joinimg/joinCarousel/sendingmessage.png'
const ViewJoined = 'static/images/joinimg/joinCarousel/ViewJoinedBar.png'

const PhoneBox = styled.div`
  /* background: purple; */
  height: 750px;
  width: 300px;
  /* margin-top: 150px; */
  margin-left: 50%;
  transform: translateX(-50%);
  img {
    width: 100%;
  }
  @media (max-width: ${props => props.theme.mobileWidth}) {
    height: 600px;
  }
`;

const JoinCarouselComp = () => (
  <Carousel 
    autoplay={true} 
    wrapAround={true}
    swiping={true} 
    pauseOnHover={false}
    speed={200}
    // withoutControls={false}
    cellAlign='center' 
    renderCenterLeftControls={({ previousSlide }) => ( null
    )}
    renderCenterRightControls={({ nextSlide }) => ( null
    )}
    style={{height: '100%', width: '380px', color: 'white', marginLeft: '50%', transform: 'translateX(-50%)'}}
  >
    <PhoneBox> 
      <img draggable={false} src={Map} alt=""/>
    </PhoneBox>
    <PhoneBox> 
      <img  draggable={false} src={JoinBar} alt=""/>
    </PhoneBox>
  </Carousel>
);

export default JoinCarouselComp;