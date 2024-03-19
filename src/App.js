import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Body/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default App;
