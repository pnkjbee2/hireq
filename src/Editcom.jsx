import { Button, Card, TextField  } from '@mui/material';

const EditCom = ({setShowEdit}) => {
    return (
       <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        
        }}
      >
        <Card variant="outlined" sx={{ display:'flex', width: 300 ,padding:4, flexDirection:'column', gap: 1 }}>
            <h1>Edit User details</h1>
            <TextField size="small" label="Name" variant="outlined" />
            <TextField size="small" label="Role" variant="outlined" />
            <TextField size="small" label="Email" variant="outlined" /><br/>
            <Button variant="contained" sx={{ marginTop: 2 }} onClick={()=>setShowEdit(edit => false)}>Save</Button>
        </Card>
        </div>  
    )
}

export default EditCom