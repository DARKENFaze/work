import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="./pages/Product.js" element={<About />} />
          <Route path="./pages/Product-Card.js" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

export default App;
