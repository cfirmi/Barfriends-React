import styled from 'styled-components'
import Link from 'next/link'

const Profile = '../../static/images/home/Profile.png'

const OuterBox = styled.div`
  /* background: red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px 200px;
  h1 {
    font-size: 70px;
    font-weight: 800;
    color: white;
    grid-row: 2;
    grid-column: 4 / -1;
  }
  p {
    color: white;
    grid-row: 3;
    grid-column: 4 / 7;
    margin-top: -20px;
    /* margin-top: 50px; */
  }
`;

 const ImageBox = styled.img`
  margin-top: -100px;
  grid-row: 2 / 5;
  grid-column: 2 / 3;
  height: 100%;
  /* width: 300px; */
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
   margin-top: 130px;
   grid-row: 3;
   grid-column: 3 / -1;
   margin-left: 50%;
   transform: translateX(-50%);
   div {
   display: inline-block;
   width: 10px;
 }
 };
`;


const CreateProfile = () => (
  <OuterBox>
    <ImageBox src={Profile} alt=""/>
    <h1>Profile <br/>& Friends</h1>
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