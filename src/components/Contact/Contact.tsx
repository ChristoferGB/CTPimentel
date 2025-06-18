import { MessageCircle, Instagram, Phone } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Phone className="mx-auto h-12 w-12 text-red-600" />
          <h2 className="mt-4 text-3xl font-bold">Contato</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Entre em contato conosco
            </h3>
            <p>Tel: (27) 99286-7149</p>
            <p>E-mail: tkdteampimentel@gmail.com</p>
          </div>
          <div>
            <div className="flex justify-center md:justify-start">
              <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="http://api.whatsapp.com/send?phone=27997228180" className="hover:text-red-600">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/ctpimenteltaekwondo?igsh=cWMzdGVodjM4djI2" className="hover:text-red-600">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
