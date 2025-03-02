import React, { useContext, useState } from 'react';
import AppTheme from '../Theme/AppTheme';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { CssBaseline, Box, Button, Divider, FormLabel, FormControl, TextField, Typography, Stack } from '@mui/material';
import Links from '../Utils/Links';
import { postSignIn } from '../Services/authService';
import { createSignInBody } from '../Utils/createBodys';
import { AppContext } from '../Context/AppContext';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow: 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
    marginTop: '3rem',
  },
}));

const SignIn = ({ handleToastError, handleToastSuccess }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (emailError || passwordError) return;

    const { email, password } = event.target;
    const signInBody = createSignInBody(email.value, password.value);

    try {
      const postSignUpRes = await postSignIn(signInBody);
      handleToastSuccess(postSignUpRes.message);

      const { tokenExpirationTime, userEmail, userId, userName, userToken } = postSignUpRes.user;
      dispatch({
        type: 'SET_USER',
        payload: { tokenExpirationTime, userEmail, userId, userName, userToken },
      });

      [(email, password)].forEach((input) => (input.value = ''));
      navigate(Links.home);
    } catch (error) {
      handleToastError(error.response.data.message);
    }
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', textAlign: 'center' }}
          >
            Iniciar sesión en Todo App
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="tu@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <Button type="submit" fullWidth variant="contained" onClick={validateInputs}>
              Iniciar sesión
            </Button>
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ textAlign: 'center' }}>
              ¿No tienes una cuenta?{' '}
              <Button component={Link} to={Links.signUp} variant="text" sx={{ alignSelf: 'center', padding: 0 }}>
                Regístrate aquí
              </Button>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </AppTheme>
  );
};

export default SignIn;
