import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import "./styles.css";

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
        setCurrentPage(--oldCurrentPage);
        break;
      case "next":
        var oldCurrentPage = currentPage;
        setCurrentPage(++oldCurrentPage);
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
    pages = pages <= 0 ? 1 : pages;

    setNumberOfPages(pages);
    setCurrentPage(1);
    setIsFirstPage(true);

    if (pages === 1) setIsLastPage(true);
    else setIsLastPage(false);
  }, [numberOfLines, data]);

  useEffect(() => {
    console.log(currentPage);
    console.log(numberOfPages);
    if (currentPage === numberOfPages) {
      setIsLastPage(true);
      if(numberOfPages === 1) setIsFirstPage(true);
      else setIsFirstPage(false);
      return;
    }
    
    if (currentPage === 1) {
      setIsFirstPage(true);
      setIsLastPage(false);
      return;
    }

    setIsFirstPage(false);
    setIsLastPage(false);
  }, [currentPage, numberOfPages]);

  useEffect(() => {
    let intNumberOfLines = Number(numberOfLines);
    if (intNumberOfLines === -1)
      intNumberOfLines = Math.max(...numberOfLinesOptions.map((x) => x.value));
    const beginning = intNumberOfLines * (currentPage - 1);
    const end = beginning + intNumberOfLines;
    const currentPageData = data.slice(beginning, end);

    handlePagination(currentPageData);
  }, [numberOfLines, currentPage, data]);

  return (
    <div className="flex flex-row justify-end p-2 lg:p-4 gap-12">
      <div className="text-xs sm:text-sm md:text-md lg:text-lg">
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
          className="btn-pagination border border-gray-400 rounded-full mx-1"
          onClick={() => handlePageChange("first")}
          disabled={isFirstPage}
        >
          <ChevronFirst />
        </button>
        <button
          className="btn-pagination border border-gray-400 rounded-full mx-1"
          onClick={() => handlePageChange("previous")}
          disabled={isFirstPage}
        >
          <ChevronLeft />
        </button>
        <span className="text-xs sm:text-sm md:text-md lg:text-lg">
          {currentPage} de {numberOfPages}
        </span>
        <button
          className="btn-pagination border border-gray-400 rounded-full mx-1"
          onClick={() => handlePageChange("next")}
          disabled={isLastPage}
        >
          <ChevronRight />
        </button>
        <button
          className="btn-pagination border border-gray-400 rounded-full mx-1"
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
