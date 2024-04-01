import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import NextPage from './components/Otp';
import Waiting from './components/Waiting';
import Dashboard from './components/Dashboard';
import Final from './components/Final';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/verification" element={<NextPage/>} />
      <Route path="/waiting-screen" element={<Waiting/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/final" element={<Final/>} />
    </Routes>
  );
};

export default App;
