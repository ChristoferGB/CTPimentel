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
  const [currentPage, setCurrentPage] = useState(1);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  const handleSelectionChange = (e: string) => {
    setNumberOfLines(e);
  };

  const handlePageChange = (i: string) => {
    switch (i) {
      case "first":
        setCurrentPage(1);
        break;
      case "previous":
        var oldCurrentPage = currentPage;
        setCurrentPage(oldCurrentPage--);
        break;
      case "next":
        var oldCurrentPage = currentPage;
        setCurrentPage(oldCurrentPage++);
        break;
      case "last":
        setCurrentPage(numberOfPages);
        break;
      default:
        setCurrentPage(1);
        break;
    }
  };

  useEffect(() => {
    let pages = Math.ceil(data.length / Number(numberOfLines));
    pages = pages < 0 ? 1 : pages;
    setNumberOfPages(pages);
    setCurrentPage(1);
  }, [numberOfLines]);

  useEffect(() => {
    if (currentPage === 1) setIsFirstPage(true);
    else if (currentPage === numberOfPages) setIsLastPage(true);
  }, [currentPage]);

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
        <button
          className="border border-gray-400 rounded-full mx-1"
          onClick={() => handlePageChange("first")}
          disabled={isFirstPage}
        >
          <ChevronFirst />
        </button>
        <button
          className="border border-gray-400 rounded-full mx-1"
          onClick={() => handlePageChange("previous")}
          disabled={isFirstPage}
        >
          <ChevronLeft />
        </button>
        <span>
          {currentPage} de {numberOfPages}
        </span>
        <button
          className="border border-gray-400 rounded-full mx-1"
          onClick={() => handlePageChange("next")}
          disabled={isLastPage}
        >
          <ChevronRight />
        </button>
        <button
          className="border border-gray-400 rounded-full mx-1"
          onClick={() => handlePageChange("last")}
          disabled={isLastPage}
        >
          <ChevronLast />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
