function AboutTaekwondo() {
  return (
    <section id="taekwondo" className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Sobre Taekwondo
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">History</h3>
            <p className="text-gray-600">
              Taekwondo originated in Korea over 2,000 years ago. It combines
              combat techniques, self-defense, sport, exercise, meditation, and
              philosophy.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Belt System</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                White → Yellow → Green → Blue → Red → Black
              </p>
              <p className="text-gray-600">
                Each belt represents a student's progress in skill, knowledge,
                and character development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTaekwondo;
