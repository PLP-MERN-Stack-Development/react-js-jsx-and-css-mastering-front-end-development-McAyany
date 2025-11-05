import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-700 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">MySite</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/api" className="hover:text-yellow-400">API Data</Link>
        <Link to="/tasks" className="hover:underline">Tasks Manager</Link>
      </div>

      <button
        onClick={toggleTheme}
        className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-200"
      >
        {theme === "light" ? "🌞 Light" : "🌜 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;
