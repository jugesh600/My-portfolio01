import { useState } from "react";
import "./App.css";
import {
  About,
  Contact,
  Footer,
  Home,
  Mainlayout,
  Project,
  Skills,
} from "./Config/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./theme/ThemeContext.jsx";
import { ThemeProvider } from "./Theme/ThemeProvider.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Main layout route */}
          <Route path="/" element={<Mainlayout />}>
            {/* Child routes rendered inside <Outlet /> in Mainlayout */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
            <Route path="project" element={<Project />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
