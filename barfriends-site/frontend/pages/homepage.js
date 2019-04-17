import HomeDownload from '../components/Home/HomeDownload';
import MainExperience from '../components/Home/HomeExperience';
import CreateProfile from '../components/Home/Profile';
import EmojiMood from '../components/Home/emojiMood';
import Safety from '../components/Home/Saftey';
import Beyond from '../components/Home/Beyond';


const Home = props => (
  <div>
    {/* <MobileDownload /> */}
    <HomeDownload />
    <CreateProfile />
    <EmojiMood />
    <Beyond />
    <Safety />
    <MainExperience />
  </div>
);

export default Home;