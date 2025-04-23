import { UserRound } from "lucide-react";
import { affiliatesData, AffiliatesData } from "./affiliates-data";

function Affiliates() {
  return (
    <section id="affiliates" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <UserRound className="mx-auto h-12 w-12 text-red-600" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Afiliados</h2>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">User List</h1>
          <table className="min-w-full border border-gray-300">
            <thead className="text-xl">
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border-y"></th>
                <th className="px-4 py-2 border-y text-left">Nome</th>
                <th className="px-4 py-2 border-y">Graduação</th>
                <th className="px-4 py-2 border-y">Ano de Nascimento</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {affiliatesData.map((data: AffiliatesData) => (
                <tr key={data.id}>
                  <td className="px-4 py-2 border-y">{data.id}</td>
                  <td className="px-4 py-2 border-y">{data.name}</td>
                  <td className="px-4 py-2 border-y text-center">
                    {data.graduation}
                  </td>
                  <td className="px-4 py-2 border-y text-center">
                    {data.yearOfBirth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Affiliates;
