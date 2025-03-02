import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { putSignOut } from '../Services/authService';
import { createSignOutBody } from '../Utils/createBodys';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import apisEndPoints from '../Utils/Apis';
import Links from '../Utils/Links';

const TokenExpirationChecker = ({ handleToastError }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
  const { userToken, tokenExpirationTime } = state;

  const [isTokenExpired, setIsTokenExpired] = useState(false);

  useEffect(() => {
    const checkTokenExpiration = () => {
      const currentTime = Math.floor(Date.now() / 1000);
      if (currentTime >= tokenExpirationTime) {
        setIsTokenExpired(true);
      } else {
        setIsTokenExpired(false);
      }
    };
    checkTokenExpiration();
    const intervalId = setInterval(checkTokenExpiration, 60000);

    return () => clearInterval(intervalId);
  }, [tokenExpirationTime]);

  useEffect(() => {
    const handleTokenExpiration = async () => {
      if (isTokenExpired) {
        try {
          const signOutBody = createSignOutBody(userToken);
          await putSignOut(signOutBody);
          dispatch({ type: 'SIGN_OUT' });
          handleToastError('Tu sesión ha caducado. Por favor, inicia sesión nuevamente.');
          navigate(Links.signIn);
        } catch (error) {
          handleToastError(error.response.data.message);
        }
      }
    };

    handleTokenExpiration();
  }, [isTokenExpired]);

  return <Box>{isTokenExpired ? <Typography>El token ha caducado.</Typography> : null}</Box>;
};

export default TokenExpirationChecker;
