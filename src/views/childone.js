import * as React from 'react';
import Box from '@mui/material/Box';

export default function Childone() {
  return (
    <>
    <Box
      sx={{
        marginTop:5 ,
        marginLeft:5,
        width: 500,
        backgroundColor: 'aliceblue',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        
      }}>

        <img src="https://images.pexels.com/photos/4725001/pexels-photo-4725001.jpeg" alt="" 
        style={{width:"50rem", height:"auto"}}/>
      </Box>
        
     
    
    
    </>
  );
}


