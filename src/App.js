import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/navbar';
import Header from './components/header';
import Products from './components/products';
import RunningLine from './components/marquee';
import Carousal from './components/carousal';
import SecondHeader from './components/secondHeader';
import LogoMarquee from './components/logoMarquee';
import ThirdHeader from './components/thirdHeader';
import Footer from './components/footer';
import Gallery from './components/gallery';
import FloatingButton from './components/floatingBtn';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <RunningLine />
        <CustomNavbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Products />
              <Carousal />
              <SecondHeader />
              <LogoMarquee />
              <ThirdHeader />
              <Footer />
              <FloatingButton />
            </>
          } />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
