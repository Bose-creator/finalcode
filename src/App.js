import './App.css';
import Homewa from './Components/Homewa';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Workk from './Components/Workk';
// import Testimonial from './Components/Testimonial';
// import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homewa/>
      <About/>
      <Workk />
      {/* <Testimonial/> */}
      {/* <Contact/> */}
    </div>
  );
}

export default App;
