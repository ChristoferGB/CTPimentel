import { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Menu,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                className="h-10 w-10"
                src="images/Logo.png"
                alt="Logo da Academia"
              />
              <span className="ml-2 text-white font-bold text-xl">
                CT Pimentel Taekwondo
              </span>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white">
                Sobre Nós
              </a>
              <a href="#sensei" className="text-gray-300 hover:text-white">
                Nosso Kyosanim
              </a>
              <a href="#taekwondo" className="text-gray-300 hover:text-white">
                Sobre Taekwondo
              </a>
              <a href="#schedule" className="text-gray-300 hover:text-white">
                Horários
              </a>
              <a href="#location" className="text-gray-300 hover:text-white">
                Localização
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white">
                Contato
              </a>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a
                href="#sensei"
                className="block px-3 py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosso Kyosanim
              </a>
              <a
                href="#taekwondo"
                className="block px-3 py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Taekwondo
              </a>
              <a
                href="#schedule"
                className="block px-3 py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Horários
              </a>
              <a
                href="#location"
                className="block px-3 py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Localização
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-16">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80"
            alt="Taekwondo Practice"
          />
          <div className="absolute inset-0 h-[600px] bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Master the Art of Taekwondo
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Join our community and discover the path of discipline, respect, and
            self-improvement through traditional Korean martial arts.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our History
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 1985, Dragon Spirit Taekwondo has been a cornerstone of
            martial arts excellence in our community. For over three decades, we
            have trained thousands of students in the art of Taekwondo,
            fostering discipline, respect, and personal growth.
          </p>
        </div>
      </section>

      {/* Sensei Section */}
      <section id="sensei" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-top lg:space-x-8">
            <div className="lg:w-1/2">
              <img
                className="rounded-lg shadow-xl"
                src="images/Mídia (2).jpg"
                alt="Kyosanim Alysson"
              />
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Kyosanim Alysson
              </h2>
              <p className="text-lg text-gray-600">
                With over 30 years of experience in Taekwondo, Master Kim holds
                a 7th-degree black belt and has trained champions across the
                globe. His teaching philosophy emphasizes both traditional
                values and modern training techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Taekwondo Section */}
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
                combat techniques, self-defense, sport, exercise, meditation,
                and philosophy.
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

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Clock className="mx-auto h-12 w-12 text-red-600" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Horários Semanais
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Segunda-feira", "Terça-feira", "Quinta-feira"].map((day) => (
              <div key={day} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">{day}</h3>
                <ul className="space-y-2">
                  <li>18:30 - Turma infantil (até 6 anos)</li>
                  <li>19:30 - Turma geral</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <MapPin className="mx-auto h-12 w-12 text-red-600" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Find Us</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg text-gray-600 text-center">
              Rua Alberto de Oliveira, 258, Soteco
              <br />
              Vila Velha - Espírito Santo
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Phone className="mx-auto h-12 w-12 text-red-600" />
            <h2 className="mt-4 text-3xl font-bold">Contato</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Entre em contato conosco</h3>
              <p>Tel: (555) 123-4567</p>
              <p>E-mail: info@dragonspirittkd.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="hover:text-red-600">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-red-600">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-red-600">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 CT Pimentel Taekwondo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
