function Hero() {
  return (
    <section id="hero" className="py-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="images/hero.jpg"
          alt="Equipe CT Pimentel Taekwondo"
        />
        <div className="absolute inset-0 h-[600px] bg-black opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          CT Pimentel Taekwondo
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Junte-se a nós e descubra o caminho da disciplina, respeito e
          aperfeiçoamento por meio do Taekwondo, uma tradicional arte marcial
          Coreana.
        </p>
      </div>
    </section>
  );
}

export default Hero;
