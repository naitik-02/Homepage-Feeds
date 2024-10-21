import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Homepage";
import { ComprehensiveDashboard } from "./Pages/Dashboard";
import ExplorePage from "./Pages/Explore";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
       
        <Navbar />

        <div>
          
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<ComprehensiveDashboard />} />
            <Route path="/explore" element={<ExplorePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
