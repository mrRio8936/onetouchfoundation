import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import OurMotive from "./components/OurMotive";
import GalleryCarousel from "./components/GalleryCarousel";
import MediaCoverage from "./components/MediaCoverage";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import DonateNow from "./components/DonateNow";
import StatsCounter from "./components/StatsCounter";
import Certificates from "./components/Certificates";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <OurMotive />
              <About />
              <GalleryCarousel />
              <StatsCounter />
            </>
          }
        />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/causes" element={<MediaCoverage />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
