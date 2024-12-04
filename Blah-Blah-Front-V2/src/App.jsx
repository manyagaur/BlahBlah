import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Leftbar from './components/leftbar/leftbar';
import Rightbar from './components/rightbar/rightbar';
import Profile from './components/profile/profile'

function App() {

  const Layout = () => (
    <>
    <div className='bg-white'>
    <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
    </div>
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
