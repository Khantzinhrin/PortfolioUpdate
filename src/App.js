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
    const video = document.querySelector("video"); 
    if (video) {
      video.onloadeddata = () => {
        setTimeout(() => setLoading(false), 1000);
      };
    } else {
      // fallback: stop loading after 2s
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {loading ? (
        // Loading Screen
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <Services />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
