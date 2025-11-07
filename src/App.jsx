import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WorkDetail from "./pages/WorkDetail";
import AboutPage from "./pages/AboutPage"; 
import WorkOverview from "./pages/WorkOverview";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/work" element={<WorkOverview />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work/:id" element={<WorkDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
