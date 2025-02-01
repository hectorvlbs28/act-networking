import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import AppTheme from '../Theme/AppTheme';
import AppAppBar from '../Components/AppAppBar';
import Links from '../Utils/Links';

const Home = lazy(() => import('../Views/Home'));
const SignUp = lazy(() => import('../Views/SignUp'));
const SignIn = lazy(() => import('../Views/SignIn'));
const Tasks = lazy(() => import('../Views/Tasks'));

const App = () => {
  return (
    <AppTheme>
      <Router>
        <CssBaseline enableColorScheme />
        <AppAppBar />
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Routes>
          <Route path={Links.home} element={<Home />} />
          <Route path={Links.signUp} element={<SignUp />} />
          <Route path={Links.signIn} element={<SignIn />} />
          <Route path={Links.tasks} element={<Tasks />} />
        </Routes>
      </Router>
    </AppTheme>
  );
};

export default App;
