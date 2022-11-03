import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple, pink } from '@mui/material/colors';



const theme = createTheme({palette: {
  primary: deepPurple,
},
});

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  
const [name, setName] = React.useState(' ');
const [password, setPassword] = React.useState(' ');

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar alt="" src="https://png.pngtree.com/element_our/png_detail/20181010/book-icon-logo-png_125608.jpg" />
          <Typography component="h1" variant="h5">
            Bienvenido/a a U-Conect
          </Typography>
          
          <Box>
            <form
                onSubmit={ev=>{
                  ev.preventDefault();

                  login(name, password);
                }}            
            
            >
            
            <TextField
            
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              autoComplete="email"
              autoFocus
              onChange={ev=>setName(ev.target.value)}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={ev=>setPassword(ev.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuérdame"
            />
            <Button
              
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}         
                                        
            >
              Iniciar Sesión
            
            </Button>
            </form>
            
           
            <Grid container>
              <Grid item xs>
                <Link href="" variant="body2">
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="register" variant="body2">
                  {"No tienes cuenta? Regístrate aquí"}
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );

  function login(name, password){
    if(name === "juan@hotmail.com" && password === "password")
      
      location.replace('home')

    else alert('Email o contraseña incorrectos, por favor verifica los datos ingresados')
      
  };

}