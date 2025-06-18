function Kyosanim() {
  return (
    <section id="sensei" className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-top lg:space-x-8">
          <div className="lg:w-1/2">
            <img
              className="rounded-lg shadow-xl"
              src="images/kyosanim.jpg"
              alt="Kyosanim Alysson"
            />
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kyosanim Alysson
            </h2>
            <p className="text-lg text-gray-600 text-justify">
              Com quase 20 anos de experiência no Taekwondo, Kyosanim Alysson é
              professor formado desde 2014, e atual faixa preta 2° Dan. Possui
              história extensa e vitoriosa no Taekwondo, sendo:
            </p><br />
            <ul className="list-disc text-lg text-gray-600 pl-6">
              <li>11x campeão estadual</li>
              <li>Ex-atleta do CT olímpico do Espírito Santo</li>
              <li>Atleta titular da seleção capixaba de 2012-2019 e 2024-2025</li>
              <li>Medalha de bronze no International Open 2014 e 2015</li>
              <li>2x campeão de duplas</li>
            </ul><br />
            <p className="text-lg text-gray-600 text-justify">
              Alysson é um professor capacitado, tendo formações que contribuem
              para o ensino do Taekwondo como, por exemplo, formação de técnico
              nacional, curso de primeiros socorros aplicado a artes marciais e
              curso de defesa pessoal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kyosanim;
