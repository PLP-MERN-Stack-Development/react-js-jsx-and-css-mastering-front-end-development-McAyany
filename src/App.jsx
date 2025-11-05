import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TaskManager from "./components/TaskManager";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>

      <div className="p-6">
        <nav className="flex gap-4 mb-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-blue-600 hover:underline">
            About
          </Link>
          <Link to="/tasks" className="text-blue-600 hover:underline">
            Task Manager
          </Link>
        </nav>

        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks" element={<TaskManager />} />
          </Routes>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
