import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Info from './components/infosection/info'
import AboutMe from './components/aboutme/about'
import Spelcization from './components/spelization/spelcization';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Info/>
    <AboutMe/>
    <Spelcization/>
  <Projects/>
<Footer/>
    </div>
  );
}

export default App;
