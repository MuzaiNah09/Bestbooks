import React from 'react';
import Pagination from '@mui/material/Pagination';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const BookPagination = ({ totalBooks, booksPerPage, currentPage, onPageChange, onBooksPerPageChange }) => {
  const totalPages = Math.ceil(totalBooks / booksPerPage);
  // to calculate no. books per page

  const handlePageChange = (event, value) => {
    onPageChange(event, value);
  };

  const handleBooksPerPageChange = event => {
    onBooksPerPageChange(event);
  }; 

  return (
    <div className="pagination">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
        showFirstButton
        showLastButton
      />

      {/* To display pagination */}
      <FormControl>
        <InputLabel>Books per page</InputLabel>
        <Select value={booksPerPage} onChange={handleBooksPerPageChange}>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
    </div>

  );
};

export default BookPagination;
