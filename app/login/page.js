import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: 'lightblue', 
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper', 
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: '300px',
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom align="center">
          Login
        </Typography>
        
        <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="input-with-icon-adornment">Usuário</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="input-with-password">Senha</InputLabel>
          <Input
            id="input-with-password"
            type="password"
          />
        </FormControl>

        <Button variant="contained" color="primary" fullWidth>
          Entrar
        </Button>
      </Box>
    </Box>
  );
}
