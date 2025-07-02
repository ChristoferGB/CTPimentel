import { useEffect, useState } from "react";
import { UserRound, Search } from "lucide-react";
import { AffiliatesData } from "./affiliates-data";
import axios from "axios";
import "./styles.css";
import Pagination from "../../utils/Pagination/Pagination";

function Affiliates() {
  const [affiliatesData, setAffiliatesData] = useState([] as AffiliatesData[]);
  const [affiliates, setAffiliates] = useState([] as AffiliatesData[]);
  const [affiliatesPage, setAffiliatesPage] = useState([] as AffiliatesData[]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAffiliatesData = async (): Promise<AffiliatesData[]> => {
    const response = await axios.get('https://raw.githubusercontent.com/ChristoferGB/CTPimentel-Affiliates/refs/heads/master/ct-affiliates.json')
    return response.data;
  }

  const normalizeData = (data: AffiliatesData[]) => {
    const orderedData = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
    setAffiliates(orderedData);
  };

  const handleSearch = (input: string) => {
    let filteredData = affiliatesData.filter((x) =>
      x.name.toLowerCase().startsWith(input.toLowerCase())
    );
    normalizeData(filteredData);
  };

  useEffect(() => {
  const fetchData = async () => {
    const data = await getAffiliatesData();
    setAffiliatesData(data);
    normalizeData(data);
  };

  fetchData();
}, []);


  return (
    <section id="affiliates" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <UserRound className="mx-auto h-12 w-12 text-red-600" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Afiliados</h2>
        </div>
        <div className="input-wrapper">
          <input
            className="text-xl border p-1"
            type="text"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onSubmit={() => handleSearch(searchTerm)}
          />
          <button>
            <Search
              className="search-icon"
              onClick={() => handleSearch(searchTerm)}
            />
          </button>
        </div>
        <div className="table-wrapper">
          <table className="min-w-full border border-gray-300">
            <thead className="text-sm sm:text-md md:text-lg lg:text-xl">
              <tr className="bg-gray-100">
                <th className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 border-y"></th>
                <th className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 border-y text-left">Nome</th>
                <th className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 border-y">Graduação</th>
                <th className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 border-y">Ano de Nascimento</th>
              </tr>
            </thead>
            <tbody className="text-sm sm:text-md md:text-lg lg:text-xl">
              {affiliatesPage.map((data: AffiliatesData) => (
                <tr key={data.id}>
                  <td className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 border-y">{data.id}</td>
                  <td className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 border-y">{data.name}</td>
                  <td className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 border-y text-center">
                    {data.graduation}
                  </td>
                  <td className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 border-y text-center">
                    {data.yearOfBirth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination data={affiliates} handlePagination={setAffiliatesPage}/>
        </div>
      </div>
    </section>
  );
}

export default Affiliates;
