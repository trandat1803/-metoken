import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About"
import RoadMap from "./components/roadmap/RoadMap"
import Tokenomic from "./components/tokenomic/Tokenomic"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Tokenomic/>
      <RoadMap/>
      <Contact/>
    </>
  )
}

export default App
