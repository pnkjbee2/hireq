import Tables from "./Tables"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import React, { useState, useEffect } from 'react';


const TableData = ({users}) => {

  const deleteIcon = <DeleteIcon />
  const editIcon = <EditIcon />
  //   const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`);
  //     const data = await response.json();
      
  //     setUsers(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return (
    <div>
      <Tables users={users} deleteIcon={deleteIcon} editIcon={editIcon} />
    </div>
  );
}

export default TableData