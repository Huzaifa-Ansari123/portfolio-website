export default function Projects() {
    const projects = [
      {
        title: "Word-Counter",
        description: "It counts the words that had been written",
        link: "https://github.com/Huzaifa-Ansari123/Word-Counter",
      },
      {
        title: "Simple-Calculator",
        description: "It calculates simple calculations like add,sub,divide,multiple",
        link: "https://github.com/Huzaifa-Ansari123/Simple-Calculator",
      },
      {
        title: "Todo list",
        link: "https://github.com/Huzaifa-Ansari123/TODO-List",
      },
      {
        title: "Currency Convertor",
        link: "https://github.com/Huzaifa-Ansari123/Currency-Convertor",
      },
      {
        title: "ATM Machine code",
        link: "https://github.com/Huzaifa-Ansari123/ATM-code",
      },
      {
        title: "Netflix Clone",
        link: "#",
      },
    ];
  
    return (
      <section id="projects" className="bg-gray-800 text-white py-12 px-4 md:px-8">
        <h3 className="text-3xl font-bold text-center mb-8">Projects</h3>
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-4">{project.title}</h4>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-yellow-500 hover:text-yellow-400 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  