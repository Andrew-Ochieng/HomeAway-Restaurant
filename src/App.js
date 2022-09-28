import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/aboutus' element={ <AboutUs />} />
          <Route path='/menu' element={ <Menu />} />
          <Route path='/services' element={ <Services />} />
          <Route path='/contactus' element={ <ContactUs />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
