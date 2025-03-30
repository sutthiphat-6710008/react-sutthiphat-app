import React from 'react'
import { Box, Typography, Avatar, Button } from '@mui/material';
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Box sx={{ width: '80%', boxShadow: '1', mx: 'auto', my: 'auto' }}>
          <Avatar src={logo} sx={{ mx: 'auto', mt: '10px', width: '100px', height: '100px' }} />
          <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'greenyellow', textAlign: 'center', mt: '20px' }}>
            ยินดีต้อนรับ
          </Typography>
          <Typography sx={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center', color: 'Highlight', mb: '50px' }}>
            sutthiphat
          </Typography>
          <Button component={Link} to='/login' variant='contained' sx={{ mb: '30', display: 'block', mx: 'auto', width: '200px', backgroundColor: 'InactiveCaptionText',textAlign:'center' }}>
            เข้าหน้า Login
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Home