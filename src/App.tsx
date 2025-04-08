import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Kyosanim from "./components/Kyosanim/Kyosanim";
import AboutTaekwondo from "./components/AboutTaekwondo/AboutTaekwondo";
import Schedule from "./components/Schedule/Schedule";
import Location from "./components/Location/Location";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AboutUs />
      <Kyosanim />
      <AboutTaekwondo />
      <Schedule />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
