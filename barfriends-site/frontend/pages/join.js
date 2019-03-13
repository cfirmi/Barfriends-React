import JoinLearn from '../components/Join/JoinLearn'
import JoinHowto from '../components/Join/JoinHowto'
import ASKS from '../components/Join/ASK'
import JoinCarousel from '../components/Join/JoinCarousel'


const JoinPage = () => (
  <div style={{background: 'white'}}>
    <JoinLearn />
    <JoinCarousel />
    <JoinHowto />
    <ASKS />
  </div>
);

export default JoinPage;