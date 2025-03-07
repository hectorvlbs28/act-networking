import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import AppTheme from '../Theme/AppTheme';
import AppAppBar from '../Components/AppAppBar';
import Links from '../Utils/Links';
import useAxiosConfig from '../Hooks/useAxiosConfig';
import Loading from '../Components/Loading';
import TokenExpirationChecker from '../Components/TokenExpirationChecker';
import { AppContext } from '../Context/AppContext';

const Home = lazy(() => import('../Views/Home'));
const SignUp = lazy(() => import('../Views/SignUp'));
const SignIn = lazy(() => import('../Views/SignIn'));
const Tasks = lazy(() => import('../Views/Tasks'));

const App = () => {
  const { state } = useContext(AppContext);
  const { userToken } = state;

  const loading = useAxiosConfig();

  const handleToastError = (message) => {
    toast.error(message);
  };

  const handleToastSuccess = (message) => {
    toast.success(message);
  };

  return (
    <AppTheme>
      <Toaster />
      <Loading open={loading} />
      <Router>
        {userToken && <TokenExpirationChecker handleToastError={handleToastError} />}
        <CssBaseline enableColorScheme />
        <AppAppBar />
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Routes>
          <Route path={Links.home} element={<Home />} />
          <Route
            path={Links.signUp}
            element={<SignUp handleToastError={handleToastError} handleToastSuccess={handleToastSuccess} />}
          />
          <Route
            path={Links.signIn}
            element={<SignIn handleToastError={handleToastError} handleToastSuccess={handleToastSuccess} />}
          />
          <Route path={Links.tasks} element={<Tasks />} />
        </Routes>
      </Router>
    </AppTheme>
  );
};

export default App;
