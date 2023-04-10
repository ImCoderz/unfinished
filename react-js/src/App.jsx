import image from './assets/image.png';
import facebook from './assets/Facebook.svg';
import github from './assets/GitHub.svg';
import icon from './assets/Icon.svg';
import instagram from './assets/Instagram.svg';
import linkedin from './assets/Linkedin.svg';
import twitter from './assets/Twitter.svg';
import './App.css';
function App() {
  return (
    <div className="App">
        <div className="card">
            <div className="image">
              <img src={image} alt="female_image"/>
            </div>
            <div className="text">
              <h1>Laura Smith</h1>
              <p className='orange'>Frontend Developer</p>
              <p className='white'>laurasmith.website</p>
            </div>
            <div className="email">
              <img src={icon} alt="icon" />
              <p>Email</p>
            </div>
            <div className="about">
              <h1>About</h1>
              <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="interests">
              <h1>Interests</h1>
              <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <div className="media">
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={linkedin} alt="likedin" />
              <img src={github} alt="github" />
            </div>
        </div>
    </div>
  );
}

export default App;
