import React, { useState, useEffect } from 'react';
import {
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  TextField,
  Button,
  IconButton,
} from '@mui/material';


const Tables = ({users, deleteIcon, editIcon}) => {
    const handleDelete = (userId) => {
        setUser((prevUsers) => prevUsers.filter((u) => u.id !== userId));
      };
    
const [user, setUser] = useState([]);
useEffect(() => {
    setUser(users);
  }, [users]);
    return(
        <Container>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        user.map((user)=>{
                            return(
                                <TableRow key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleDelete(user.id)}>
                                        {deleteIcon}
                                        </IconButton>
                                        <IconButton>
                                        {editIcon}
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        
                        })
                    }
                </TableBody>
            </Table>
        </Container>
    )
}

export default Tables;