export default function Project() {
  const projects = [
    {
      name: "Car Renting System",
      desc: "A car renting platform with booking, payment, and user management. Mainly uses Java for backend, MySQL for database, and Scene Builder for frontend.",
      image: "/image/car.png",
      link: "https://github.com/Khantzinhrin/Car_renting"
    },
    {
      name: "Tic Tac Toe Game",
      desc: "Classic Tic Tac Toe game built with Java and old JFrame.",
      image: "/image/tictactoe.png",
      link: "https://github.com/Khantzinhrin/TicTacToe"
    },
    {
      name: "Method Flow",
      desc: "A web app for creating, managing, and visualizing workflows using drag-and-drop. Built with PHP, MySQL, HTML, CSS, JS, and Tailwind CSS.",
      image: "/image/methodflow.png",
      link: "https://github.com/TripponDaellam/PHP-Project"
    },
    {
      name: "Travelling Website",
      desc: "Responsive travel website built with HTML, Tailwind CSS, JS, PHP, and SQL. Modern design with interactive elements, still in progress.",
      image: "/image/travelling.png",
      link: "https://github.com/Khantzinhrin/phpProject"
    },
    {
      name: "Portfolio Website",
      desc: "A personal portfolio website to showcase projects and skills, built with React and Tailwind CSS.",
      image: "/image/portfolio.png",
      link: "https://github.com/Khantzinhrin/PortfolioUpdate"
    },
    {
        name:"Pac-Man Game",
        desc:"Using Java to build a classic",
        image:"/image/pac-man.jpg",
        link:"https://github.com/Khantzinhrin/ClassicPacMan"
    },
    { 
        name:"Hotel Management System",
        desc:"A desktop application for managing hotel operations, including reservations, check-ins, and billing. Built with Java and MySQL.",
        image:"/image/hotelmanagement.jpg",
        link:"https://github.com/Khantzinhrin/Hotel_Management_System"
    }
  ];

  return (
    <section
      id="myprojects"
      className="min-h-screen py-16 px-4 sm:px-6 md:px-12 bg-black text-white"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="bg-black/10 border border-white/10 backdrop-blur-md rounded-2xl p-4 flex flex-col items-center text-center hover:scale-105 transform transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-300">{project.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
