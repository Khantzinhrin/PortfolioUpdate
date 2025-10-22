import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;

      videoRef.current.onloadeddata = () => {
        document.dispatchEvent(new Event("videoLoaded"));
      }
    }
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen">
      {/* Background Video with blur */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 filter blur-sm"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-5"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
                       bg-gradient-to-r from-gray-700 via-gray-300 to-white 
                       bg-clip-text text-transparent text-center text-gradient-animate">
          Welcome to My Portfolio
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center max-w-md sm:max-w-lg md:max-w-2xl px-2">
          Crafting beautiful and functional web experiences with React and Tailwind CSS.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => scrollToSection("services")}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-900 
                       text-white font-semibold rounded-full shadow-lg 
                       transform hover:scale-105 transition-transform duration-300"
          >
            Get Started
          </button>

          <button
            onClick={() => scrollToSection("myprojects")}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-900 
                       text-white font-semibold rounded-full shadow-lg 
                       transform hover:scale-105 transition-transform duration-300"
          >
            See Projects
          </button>
          <a href="/file/Khant Zin Hein.docx"
              download="Khant Zin Hein.docx"
           className="px-6 py-3 bg-gray-700 hover:bg-gray-900 
                       text-white font-semibold rounded-full shadow-lg 
                       transform hover:scale-105 transition-transform duration-300">
            Download CV
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-300 text-center max-w-md sm:max-w-lg md:max-w-2xl px-2 font-semibold">
         Work with me to bring your ideas to life!
        </p>
      </div>
    </section>
  );
}
