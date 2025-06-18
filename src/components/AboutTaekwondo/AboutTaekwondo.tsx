function AboutTaekwondo() {
  return (
    <section id="taekwondo" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Sobre Taekwondo
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">História</h3>
            <p className="text-gray-600 text-justify">
              Taekwondo nasceu na Coreia há mais de 2.000 anos atrás, e foi
              introduzido no estado do Espírito Santo pelo Grão Mestre Sung Jang
              Hong em 1972. O nome dessa arte marcial tem o sentido de
              representar o caminho dos pés e das mãos através da mente. O
              Taekwondo está fundamentado em alguns princípios como cortesia,
              integridade, perseverança, autocontrole e espírito indomável.
              Atualmente, é uma arte marcial olímpica, presente de forma oficial
              nos jogos olímpicos desde as olimpíadas de Sydney, em 2000.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Sistema de graduação</h3>
            <div className="space-y-2">
              <p className="text-gray-600 text-justify">
                Branca → Cinza → Amarela → Verde Claro → Verde Escuro → Azul Claro → Azul Escuro → Vermelho Claro → Vermelho Escuro → Preta
              </p>
              <p className="text-gray-600 text-justify">
                Cada faixa representa o progresso do aluno não só em habilidade, mas também em conhecimento e caráter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTaekwondo;
