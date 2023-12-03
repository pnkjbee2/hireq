import React, { useState, useEffect } from 'react';
import TableData from './TableData';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';

const TableWithPagination = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterUsers();
  }, [searchTerm, users]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
      );
      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterUsers = () => {
    const filtered = users.filter((user) =>
      Object.values(user).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(filteredUsers.length / itemsPerPage))
    );
  };

  const handleLastPage = () => {
    setCurrentPage(Math.ceil(filteredUsers.length / itemsPerPage));
  };

  return (
    <Container>
      <TextField
        label="Search Name"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TableData
        users={filteredUsers.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )}
      />
      <Box mt={2} display="flex" justifyContent="center">
        <Button onClick={handleFirstPage}>First Page</Button>
        <Button onClick={handlePrevPage}>Previous Page</Button>
        <Typography variant="body1">
          Page {currentPage} of {Math.ceil(filteredUsers.length / itemsPerPage)}
        </Typography>
        <Button onClick={handleNextPage}>Next Page</Button>
        <Button onClick={handleLastPage}>Last Page</Button>
      </Box>
    </Container>
  );
};

export default TableWithPagination;
