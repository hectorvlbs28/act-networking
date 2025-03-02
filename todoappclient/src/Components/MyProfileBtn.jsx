import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Links from '../Utils/Links';

const MyProfileBtn = () => {
  return (
    <Button component={Link} to={Links.home} color="primary" variant="text" size="small">
      Mi perfil
    </Button>
  );
};

export default MyProfileBtn;
