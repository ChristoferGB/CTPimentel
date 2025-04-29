import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

function Pagination() {
  const numberOfLinesOptions = [
    { text: "5", value: 5 },
    { text: "10", value: 10 },
    { text: "25", value: 25 },
    { text: "Todos", value: -1 },
  ];

  const [numberOfLines, setNumberOfLines] = useState(
    numberOfLinesOptions[0].value.toString()
  );

  const handleSelectionChange = (e: string) => {
    setNumberOfLines(e);
  };

  return (
    <div className="flex flex-row justify-end p-4 gap-12">
      <div>
        <span>Linhas por página: </span>
        <select
          className="border border-gray-400"
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
        <span>1 de 3</span>
        <button className="border border-gray-400 rounded-full mx-1">
          <ChevronRight />
        </button>
        <button className="border border-gray-400 rounded-full mx-1">
          <ChevronLast />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
