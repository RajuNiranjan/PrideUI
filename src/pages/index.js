import React, { useState } from 'react';
import CategorieCard from '@/components/CategorieCard';
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

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);


  const totalPages = Math.ceil(CategoriesData.length / ITEMS_PER_PAGE);


  const currentItems = CategoriesData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className='flex justify-center gap-4 items-center flex-col h-screen'>
      <div className='text-center'>
        <h1 className=' text-4xl font-bold'>Explore Our Categories</h1>
        <p className='text-gray-500 text-sm'>Browse through our wide range of product categories.</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 top-10'>
        {currentItems.map(item => (
          <CategorieCard key={item.id} image={item.image} title={item.title} description={item.description} />
        ))}
      </div>
      {/* <div className='my-5'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className="cursor-pointer" onClick={handlePreviousPage} />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index + 1}>
                <PaginationLink
                  onClick={() => setCurrentPage(index + 1)}
                  className={currentPage === index + 1 ? 'bg-black cursor-pointer text-white' : ' cursor-pointer'}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext className="cursor-pointer" onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div> */}
    </div>
  );
};

export default Home;

