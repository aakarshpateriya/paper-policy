"use client";
import { useState } from "react";
import { FaMoon, FaSun, FaGlobe } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === "EN" ? "HI" : "EN");

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 p-5">
          <h2 className="text-2xl font-bold mb-8">Paper Policy</h2>
          <nav className="flex flex-col gap-4">
            <a href="#" className="hover:text-blue-500">Dashboard</a>
            <a href="#" className="hover:text-blue-500">Documents</a>
            <a href="#" className="hover:text-blue-500">Requests</a>
            <a href="#" className="hover:text-blue-500">Buying</a>
            <a href="#" className="hover:text-blue-500">Profile</a>
          </nav>

          {/* Dark Mode & Language */}
          <div className="mt-8 flex items-center gap-4">
            <button onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button onClick={toggleLanguage} className="flex items-center gap-2">
              <FaGlobe /> {language}
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
