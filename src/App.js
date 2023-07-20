import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(20);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
      .then(response => {
        setBooks(response.data);
        setFilteredBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books data:', error);
      });
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  useEffect(() => {
    applySearch();
  }, [searchTerm]);

  const applyFilters = () => {
    let filtered = [...books];

    if (filters.country) {
      filtered = filtered.filter(book => book.country === filters.country);
    }

    if (filters.language) {
      filtered = filtered.filter(book => book.language === filters.language);
    }
    
    if (filters.pagesRange) {
      const [minPages, maxPages] = filters.pagesRange.split('-');
      filtered = filtered.filter(book => book.pages >= Number(minPages) && book.pages <= Number(maxPages));
    }
    
    if (filters.yearCentury) {
      const [century] = filters.yearCentury.split(' ');
      const startYear = (Number(century) - 1) * 100 + 1;
      const endYear = Number(century) * 100;
      filtered = filtered.filter(book => book.year >= startYear && book.year <= endYear);
    }

    setFilteredBooks(filtered);
    setCurrentPage(1);
  };

  const applySearch = () => {
    let filtered = [...books];
    if (searchTerm) {
      filtered = filtered.filter(
        book =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()) || 
          book.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.language.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
    }
    setFilteredBooks(filtered);
    setCurrentPage(1);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
  };

  const handleSearchChange = term => {
    setSearchTerm(term);
  };

  const handlePaginationChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleBooksPerPageChange = event => {
    setBooksPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  return (
   
    <div className="app">
       
    { <div className="animate__animated animate__fadeIn" id="box" >  <h1  >100 Best Books</h1></div>  }
    
      {/* <img src="images/TITLE.JPG" className="animate__animated animate__fadeIn" id="box" /> */}
      <div className="search-and-filters">
        <SearchBar onSearchChange={handleSearchChange} />
        <Filters onFilterChange={handleFilterChange} />
      
      <Pagination
        totalBooks={filteredBooks.length}
        booksPerPage={booksPerPage}
        currentPage={currentPage}
        onPageChange={handlePaginationChange}
        onBooksPerPageChange={handleBooksPerPageChange}
      /></div>
      <BookList books={currentBooks} />
      
    </div>
  );
};

export default App;
