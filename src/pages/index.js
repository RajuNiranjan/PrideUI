import React, { useState } from "react";
import CategorieCard from "@/components/CategorieCard";
import { CategoriesData } from "@/data/data";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 6;
const PAGES_PER_VIEW = 2;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(CategoriesData.length / ITEMS_PER_PAGE);

  const currentItems = CategoriesData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const startPage =
    Math.floor((currentPage - 1) / PAGES_PER_VIEW) * PAGES_PER_VIEW + 1;
  const endPage = Math.min(startPage + PAGES_PER_VIEW - 1, totalPages);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Explore Our Categories
        </h1>
        <p className="text-xs text-gray-500 md:text-sm">
          Browse through our wide range of product categories.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 top-10">
          {currentItems.map((item) => (
            <CategorieCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="my-5">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className="cursor-pointer"
                  onClick={handlePreviousPage}
                />
              </PaginationItem>
              {[...Array(endPage - startPage + 1)].map((_, index) => (
                <PaginationItem key={startPage + index}>
                  <PaginationLink
                    onClick={() => setCurrentPage(startPage + index)}
                    className={
                      currentPage === startPage + index
                        ? "bg-black cursor-pointer text-white"
                        : " cursor-pointer"
                    }>
                    {startPage + index}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {endPage < totalPages && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationNext
                  className="cursor-pointer"
                  onClick={handleNextPage}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Home;
