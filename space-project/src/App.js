import './App.css';
import { Header, Navbar } from './component';
import {Imageslider} from './containers';
const slides=[
  {url:'../../assets/earth-11015_340.jpg',title:'earth'},
  {url:'../../assets/uranus-153572_480.jpg',title:'uranus'},
  {url:'../../assets/saturn.webp',title:'saturn'},
  {url:'../../assets/mars-11012_480.png',title:'earth'}
];
function App() {
  return (
    <div className="App">
      <div className='nasa__header'>
        <Navbar/>
        <Header/>
      </div>
      <div className='nasa__planet'>
          <div className='nasa__imageslider-image'>
            <Imageslider/>
          </div>
      </div>
    </div>
  );
}
export default App;
