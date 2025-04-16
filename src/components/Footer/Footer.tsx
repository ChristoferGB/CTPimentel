function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-4">
        <p>© 2025 CT Pimentel Taekwondo. Todos os direitos reservados.</p>
        <div className="flex flex-row md:flex-col items-center justify-center gap-1 md:gap-2">
          <span>Desenvolvido por</span>
          <img
            src="images/Logo C&P.png"
            alt="C&P Logo"
            width={150}
            height={50}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
