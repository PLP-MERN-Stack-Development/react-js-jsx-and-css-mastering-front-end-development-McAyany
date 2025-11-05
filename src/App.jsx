import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TaskManager from "./components/TaskManager";
import ApiIntegration from "./pages/ApiIntegration";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/api" element={<ApiIntegration />} />
          </Routes>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
