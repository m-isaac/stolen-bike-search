import { useState } from 'react';
import Pagination, { PaginationProps } from './Pagination';

const usePagination = () => {
  const [page, setPage] = useState(1);
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const paginationProps: PaginationProps = {
    page,
    handleNext,
    handlePrevious,
  };

  return { paginationProps, Pagination };
};

export default usePagination;
