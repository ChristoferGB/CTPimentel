import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Pagination() {
  const numberOfLines = [5, 10, 25, "Todos"];

  return (
    <div className="flex flex-row justify-end p-4 gap-12">
      <div>
        <span>Linhas por página: </span>
        <select className="border border-gray-400">
          {numberOfLines.map((n) => (
            <option value={n}>{n}</option>
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
