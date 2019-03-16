import JoinLearn from '../components/Join/JoinLearn'
import JoinHowto from '../components/Join/JoinHowto'
import ASKS from '../components/Join/ASK'
import Everywhere from '../components/Join/Everywhere'


const JoinPage = () => (
  <div style={{background: 'white'}}>
    <JoinLearn />
    <Everywhere />
    <JoinHowto />
    {/* <ASKS /> */}
  </div>
);

export default JoinPage;