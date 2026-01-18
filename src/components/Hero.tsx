const Hero = () => {
  return (
    <section className="min-h-screen bg-zinc-950">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
        {/* Badge */}
        <span className="mb-6 w-fit rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
          Estudante de ADS • Em busca de estágio
        </span>

        {/* Nome */}
        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-100">
          Victor
        </h1>

        {/* Cargo */}
        <h2 className="mt-4 text-xl font-medium text-zinc-300">
          Desenvolvedor Web com foco em Backend
        </h2>

        {/* Linha de destaque */}
        <div className="mt-6 h-px w-20 bg-blue-500" />

        {/* Stack principal */}
        <p className="mt-4 text-sm font-medium text-blue-400">
          Node.js • APIs REST • SQL • Firebase
        </p>

        {/* Descrição */}
        <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-400">
          Focado no desenvolvimento de aplicações com lógica bem estruturada,
          integração entre sistemas e persistência de dados, utilizando o
          frontend como camada de interface.
        </p>

        {/* Ações */}
        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Ver projetos
          </a>

          <a
            href="#contact"
            className="rounded-md border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:border-zinc-500"
          >
            Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
