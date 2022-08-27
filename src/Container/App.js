import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../HOC/Layout";
import Home from "../Components/Pages/Home/Home";
import About from "../Components/Pages/About/about";
import Projects from "../Components/Pages/Projects/Projects";
import Skills from "../Components/Pages/Skills/Skill";
import Contact from "../Components/Pages/Contact/Contact";
import "./App.css";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
