import { Menu } from "lucide-react";
import { useState } from "react";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <a href="#hero" className="flex items-center">
            <img
              className="h-10 w-10"
              src="images/Logo.png"
              alt="Logo da Academia"
            />
            <span className="ml-2 text-white font-bold text-xl">
              CT Pimentel Taekwondo
            </span>
          </a>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-red-600 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-red-600">
              Sobre Nós
            </a>
            <a href="#sensei" className="text-gray-300 hover:text-red-600">
              Nosso Kyosanim
            </a>
            <a href="#taekwondo" className="text-gray-300 hover:text-red-600">
              Sobre Taekwondo
            </a>
            <a href="#schedule" className="text-gray-300 hover:text-red-600">
              Horários
            </a>
            <a href="#affiliates" className="text-gray-300 hover:text-red-600">
              Afiliados
            </a>
            <a href="#location" className="text-gray-300 hover:text-red-600">
              Localização
            </a>
            <a href="#contact" className="text-gray-300 hover:text-red-600">
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
              className="block px-3 py-2 text-gray-300 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a
              href="#sensei"
              className="block px-3 py-2 text-gray-300 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosso Kyosanim
            </a>
            <a
              href="#taekwondo"
              className="block px-3 py-2 text-gray-300 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Taekwondo
            </a>
            <a
              href="#schedule"
              className="block px-3 py-2 text-gray-300 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Horários
            </a>
            <a
              href="#affiliates"
              className="block px-3 py-2 text-gray-300 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Afiliados
            </a>
            <a
              href="#location"
              className="block px-3 py-2 text-gray-300 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Localização
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
