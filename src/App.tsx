import React from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/index';
import NotFoundBlock from './components/NotFoundBlock';
import Header from './components/Header';
import Footer from './components/Footer';
import Analyze from './components/AnalyzeBlock';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/not-found" element={<NotFoundBlock />} />
            <Route path="/analyze" element={<Analyze />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFoundBlock />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
