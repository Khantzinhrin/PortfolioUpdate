import { useState, useEffect } from "react";
import Navbar from "./nav";
import Home from "./home";
import Services from "./services";
import Project from "./project";
import Contact from "./contact";
import Footer from "./footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleVideoLoaded = () => {
      setTimeout(() => setLoading(false), 400);
    };
    document.addEventListener("videoLoaded", handleVideoLoaded);
    return () => document.removeEventListener("videoLoaded", handleVideoLoaded);
  }, []);
  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500"></div>
        </div>
      )}
      <Navbar />
      <Home />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
