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
import EditCom from './Editcom';

const Tables = ({users, deleteIcon, editIcon}) => {
    const [showEdit, setShowEdit] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
    const handleDelete = (userId) => {
        setUser((prevUsers) => prevUsers.filter((u) => u.id !== userId));
      };
    
const [user, setUser] = useState([]);
useEffect(() => {
    setUser(users);
  }, [users]);
  const handleEdit = (user) => {
    setEditingUser(user);
    setShowEdit(true);
  };
    return(
        <div>
      {showEdit ? (
        <EditCom setShowEdit={setShowEdit}/>
      ) : (
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
                                        <IconButton onClick={() => handleEdit(user)}>
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
        )}
        </div>
    )
}

export default Tables;