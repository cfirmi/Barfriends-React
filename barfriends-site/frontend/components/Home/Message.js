import styled from 'styled-components'
import Link from 'next/link'

const Profile = '../../static/images/home/Profile.png'
const Iphone = '../../static/images/home/iphoneBlue.png'
const Screen = '../../static/images/home/screenrecord.MP4'

const OuterBox = styled.div`
  /* background: red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px 200px;

  h1 {
    font-size: 70px;
    font-weight: 800;
    line-height: 60px;
    color: white;
    grid-row: 2;
    grid-column: 4 / -1;
  }
  h2 {
    color: white;
    grid-row: 3;
    grid-column: 4 / 7;
    margin-top: -80px;
    /* margin-top: 50px; */
  }
  p {
    color: white;
    grid-row: 3;
    grid-column: 4 / 7;
    margin-top: -10px;
    /* margin-top: 50px; */
  }
  @media (max-width: 500px) {
    p {
      margin-top: -100px;
    }
  };
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    grid-template-rows: 200px 200px 200px 200px 200px;
    /* margin-bottom: 200px; */
    h1 {
      grid-column: 1 / -1;
      text-align: center;
      grid-row: 1;
      margin-top: -30px;
    }
    h2 {
    text-align: center;
    color: white;
    grid-row: 2;
    grid-column: 1 / -1;
    margin-top: -80px;
    /* margin-top: 50px; */
  }
    p {
      /* margin-top: 20px; */
      grid-column: 1 / -1;
      grid-row: 5;
      margin-top: -20px;
      text-align: center;
      padding: 0px 20px;
    }
  };
  @media (max-width: 600px) {
    h1 {
      grid-column: 1 / -1;
      text-align: center;
      grid-row: 1;
      margin-top: -100px;
    }
  };

`;

 const VideoBox = styled.video`
  margin-top: 120px;  margin-left: 125px;
  width: 250px;
  /* width: 300px; */
  position: absolute;
  z-index: 1;
  border-radius: 25px;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    margin-top: 200px;  margin-left: 125px;
    margin-left: 50%;
    transform: translateX(-50%);
    };
  `;
    const PhoneBox = styled.img`
    position: absolute;
    margin-top: 100px; margin-left: 100px;
    width: 300px;
    z-index: 2;
  @media (max-width: ${props => props.theme.mobileWidth} ) {
    margin-top: 178px; margin-left: 100px;
    margin-left: 50%;
    transform: translateX(-50%);
  };
 `;
 const Signup = styled.div`
  /* color: grey; */
  background: ${props => props.theme.orange};
  grid-row: 3;
  grid-column: 4 / 5 ;
  height: 40px; width: 140px;
  line-height: 40px;
  text-align: center;
  margin-top: 80px;
  cursor: pointer;
  div {
    /* background: red; */
    display: inline-block;
    width: 10px;
    color: white;
  }
  @media (max-width: ${props => props.theme.mobileWidth}) {
    margin-top: 100px;
    grid-row: 5;
    grid-column: 1 / -1;
    margin-left: 50%; margin-bottom: 500px;
    transform: translateX(-50%);
  };
`;


const CreateProfile = () => (
  <OuterBox>
    {/* <ImageBox src={Profile} alt=""/> */}
    <PhoneBox draggable='false' src={Iphone} alt=""/>
    <VideoBox 
      autoPlay={true}
      // controls
      loop
      src={Screen}>
    </VideoBox>
    <h1>Going out <br/> has never been so easy</h1>
    {/* <h2> IS A GREAT NIGHT OUT</h2> */}
    <p>minima? Deleniti iusto perferendis alias doloribus ex mollitia quos voluptatibus provident. Minima facere unde nulla pariatur quam consectetur?</p>
    <Signup>
          <Link href="/signup">
            <a>
              Join <div>→</div>
            </a>
          </Link>
        </Signup>
  </OuterBox>
 );
 
 export default CreateProfile;