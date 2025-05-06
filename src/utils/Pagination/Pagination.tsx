import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const Pagination: React.FC<{
  data: any[];
  handlePagination: (d: any[]) => void;
}> = ({ data, handlePagination }) => {
  const numberOfLinesOptions = [
    { text: "5", value: 5 },
    { text: "10", value: 10 },
    { text: "25", value: 25 },
    { text: "Todos", value: -1 },
  ];

  const [numberOfLines, setNumberOfLines] = useState(
    numberOfLinesOptions[0].value.toString()
  );
  const [numberOfPages, setNumberOfPages] = useState(1);

  const handleSelectionChange = (e: string) => {
    setNumberOfLines(e);
  };

  useEffect(() => {
    let pages = Math.ceil(data.length / Number(numberOfLines));
    pages = pages < 0 ? 1 : pages;
    setNumberOfPages(pages);
  }, [numberOfLines]);

  return (
    <div className="flex flex-row justify-end p-4 gap-12">
      <div>
        <span>Linhas por página: </span>
        <select
          className="border border-gray-400 rounded"
          id="selectNumberOfLines"
          onChange={(e) => handleSelectionChange(e.target.value)}
        >
          {numberOfLinesOptions.map((n) => (
            <option value={n.value}>{n.text}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-row">
        <button className="border border-gray-400 rounded-full mx-1">
          <ChevronFirst />
        </button>
        <button className="border border-gray-400 rounded-full mx-1">
          <ChevronLeft />
        </button>
        <span>1 de {numberOfPages}</span>
        <button className="border border-gray-400 rounded-full mx-1">
          <ChevronRight />
        </button>
        <button className="border border-gray-400 rounded-full mx-1">
          <ChevronLast />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
