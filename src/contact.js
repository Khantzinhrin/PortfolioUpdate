import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Open mail client with pre-filled subject and body
    window.location.href = `mailto:heinkhantzin0@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
  };
  
  return React.createElement(
    "section",
    { id: "contact", className: "min-h-screen py-16 px-4 sm:px-6 md:px-12 bg-black text-white flex flex-col items-center justify-center" },
    React.createElement(
      "h2",
      { className: "text-4xl sm:text-5xl font-bold text-center mb-12 tracking-wide" },
      "Contact Me"
    ),
    React.createElement(
      "form",
      { onSubmit: handleSubmit, className: "w-full max-w-xl bg-black/30 backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-white/20 space-y-6" },
      React.createElement(
        "div",
        null,
        React.createElement("input", {
          type: "text",
          name: "name",
          placeholder: "Your Name",
          required: true,
          className: "w-full px-5 py-3 bg-black/40 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
        })
      ),
      React.createElement(
        "div",
        null,
        React.createElement("input", {
          type: "email",
          name: "email",
          placeholder: "you@example.com",
          required: true,
          className: "w-full px-5 py-3 bg-black/40 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
        })
      ),
      React.createElement(
        "div",
        null,
        React.createElement("textarea", {
          name: "message",
          rows: 5,
          placeholder: "Your message...",
          required: true,
          className: "w-full px-5 py-3 bg-black/40 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 resize-none"
        })
      ),
      React.createElement(
        "button",
        {
          type: "submit",
          className: "w-full px-6 py-3 bg-gray-700 hover:bg-gray-900 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        },
        "Send Message"
      )
    )
  );
}
