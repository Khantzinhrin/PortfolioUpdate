export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and modern websites using React, Tailwind CSS, and other modern tools.",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces and engaging user experiences for web and mobile apps.",
      icon: "🎨",
    },
    {
      title: "SEO Optimization",
      description: "Improving website visibility and performance to rank higher on search engines.",
      icon: "🔍",
    },
    {
      title: "Consulting",
      description: "Providing advice and solutions to improve your online presence and web strategy.",
      icon: "📈",
    },
    {
      title:"Java Development",
      description:"Building robust backend systems and applications using Java and related technologies.",
      icon:"☕"
    },
    {
      title:"Database Management",
      description:"Designing and managing databases using MySQL, PostgreSQL, and other database systems.",
      icon:"🗄️"
    },
    {
        title:"Version Control",
        description:"Using Git and GitHub for efficient version control and collaboration on projects.",
        icon:"🔧"
    },
    {
        title:"Project Management",
        description:"Organizing and managing projects using Agile methodologies and tools like Jira and Trello.",
        icon:"📋"
    },
    {
        title:"Problem Solving",
        description:"Analyzing and solving complex problems to deliver effective solutions.",
        icon:"🧩"
    },
    {
        title:"Team Collaboration",
        description:"Working effectively in teams to achieve common goals and deliver high-quality results.",
        icon:"🤝"
    },
    {
        title:"Continuous Learning",
        description:"Staying updated with the latest technologies and trends in web development and design.",
        icon:"📚"
    },
    {
        title:"Performance Optimization",
        description:"Enhancing website and application performance for better user experience.",
        icon:"⚡"
    }
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-16 px-4 sm:px-6 md:px-12 bg-black text-white"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        My Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transform transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
