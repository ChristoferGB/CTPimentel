import { MapPin } from "lucide-react";

function Location() {
  const address = "Rua Alberto de Oliveira, 258, Soteco, Vila Velha, ES";
  const url = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <section id="location" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <MapPin className="mx-auto h-12 w-12 text-red-600" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Encontre-nos
          </h2>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-8" style={{ width: "100%", height: "400px" }}>
            <iframe
              title="Mapa"
              width="100%"
              height="100%"
              src={url}
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-lg text-gray-600 text-center">
            Rua Alberto de Oliveira, 258, Soteco
            <br />
            Vila Velha - Espírito Santo
          </p>
        </div>
      </div>
    </section>
  );
}

export default Location;
