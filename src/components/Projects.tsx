const projects = [
  {
    title: "Jogo Multiplayer em Tempo Real",
    description:
      "Projeto desenvolvido para aplicar conceitos de backend em tempo real utilizando WebSockets. O servidor é responsável por gerenciar salas, jogadores conectados, estado das partidas e sincronização entre clientes.",
    image: "/projects/pedra-papel-tesoura.png", // coloque em /public/projects
    stack: ["Node.js", "Socket.IO", "TypeScript", "React"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-24">
        {/* Header */}
        <header className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
            Projetos
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Projetos pessoais focados em backend, comunicação em tempo real e
            arquitetura de aplicações.
          </p>
        </header>

        {/* Projects */}
        <div className="mt-16 space-y-24">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-10 md:grid-cols-2 md:items-center"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="max-w-xl">
                <h3 className="text-xl font-semibold text-zinc-100">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-8 flex gap-6 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    className="font-medium text-blue-400 transition hover:text-blue-300"
                  >
                    GitHub →
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="font-medium text-zinc-400 transition hover:text-zinc-300"
                    >
                      Demo →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
