import MainDownload from '../components/Home/HomeDownload';
import MainExperience from '../components/Home/HomeExperience';
import MobileDownload from '../components/Home/MobileDownload';
import CreateProfile from '../components/Home/Profile';
import EmojiMood from '../components/Home/emojiMood';
import Safety from '../components/Home/Saftey';
import Beyond from '../components/Home/Beyond';


const Home = props => (
  <div>
    <MobileDownload />
    <MainDownload />
    <CreateProfile />
    <EmojiMood />
    <Beyond />
    <Safety />
    <MainExperience />
  </div>
);

export default Home;