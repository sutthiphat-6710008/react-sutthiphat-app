import React from 'react'
import { AppBar, Toolbar, Typography, Box, Avatar, TextField, FormControl,RadioGroup, FormControlLabel, Radio, Button,Stack  } from '@mui/material'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import { Link } from 'react-router-dom';
import logo from './../assets/logo.png'
function LoginUI() {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Link to='/'>
                        <BatteryChargingFullIcon sx={{ color: 'green', fontSize: '40px' }} />
                    </Link>
                    <Typography sx={{ color: 'darkblue', ml: '10px', flexGrow: '1' }}>
                        Sutthiphat
                    </Typography>
                    <Typography sx={{ color: 'darkblue', mr: '10px' }} component={Link} to='/login'>
                        Login
                    </Typography>
                    <Typography sx={{ color: 'darkblue', mr: '10px' }} component={Link} to='/Contac' >
                        Contact
                    </Typography>
                    <Typography sx={{ color: 'darkblue' }} component={Link} to='/About' >
                        About
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ width: '70%', mx: 'auto', mt: '50px', boxShowdow: '2' }}>
                <Avatar src={logo} sx={{ mx: 'auto', mt: '20px', width: '100px', height: '100px' }} />
                <Typography sx={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>
                    เข้าใช้งาน
                </Typography>
                <Typography sx={{ fontSize: '16px', ml: '20px', }}>
                    ชื่อผู้ใช้
                </Typography>
                <TextField size='small' fullWidth />
                <Typography sx={{ fontSize: '16px', ml: '20px', }}>
                    รหัสผ่าน
                </Typography>
                <TextField size='small' fullWidth type='password' />
                <FormControl sx={{ display: 'block', mt: '20px' }}>
                    <RadioGroup row sx={{display:'flex', justifyContent:'center'}}>
                        <FormControlLabel value="สมาชิกทั่วไป" control={<Radio/>}label="สมาชิกทั่วไป"/>
                        <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                    </RadioGroup>
                </FormControl>
                <Button variant='contained' fullWidth sx={{ my: '20px', backgroundColor: '#049156' }}>
                    Login
                </Button>
                <Stack variant={'rpw'} sx={{display: 'flex', justifyContent:'center'}}>
                    <Typography sx={{fontSize:'16px'}}>
                        ยังไม่มีบัญชี
                    </Typography>
                    <Typography sx={{ fontSize: '16px',ml:1,color:'red' }}>
                        ลงทะเบียน
                    </Typography>
                </Stack>

            </Box>
        </>
    )
}

export default LoginUI