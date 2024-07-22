import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logo.png'

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);

  return (
    <>
      <div className="grid grid-cols-12 h-24 bg-white">
        <div className="col-span-2 flex items-center">
          <div className="mx-3 mt-1 ">
          <img src={logo} alt="Logo" className="h-28 w-[180px]" />
          </div>
        </div>
        <div className="col-span-4 hidden sm:flex items-center sm:mb-[27px]">
          <input type="search" className="hidden sm:block rounded-md  border border-gray-400 w-full" />
        </div>
        <div className="col-span-10 sm:col-span-6 sm:m-8 flex justify-end sm:justify-start">
          <div className="hidden sm:flex flex-grow justify-between">
            <a href='#' className="mx-4">Notifs</a>
            <a href='#' className="mx-4">Messages</a>
            <a href='#' className="mx-4">Friends</a>
            <a href='#' className="mx-4">Explore</a>
          </div>
          <button onClick={showSidebar} className='sm:hidden'>
            <MenuIcon />
          </button>
        </div>
      </div>
      {sidebar && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 z-50'>
          <div className="sidebar fixed top-0 right-0 shadow-xl h-screen w-64 bg-gray-200/[0.6] backdrop-blur-xl z-999">
            <div className="flex flex-col p-4">
              <button onClick={hideSidebar} className='mb-4'><CloseIcon /></button>
              <a href='#' className="h-12 hover:shadow-lg w-full mb-2">Notifs</a>
              <a href='#' className="h-12 hover:shadow-lg w-full mb-2">Messages</a>
              <a href='#' className="h-12 hover:shadow-lg w-full mb-2">Friends</a>
              <a href='#' className="h-12 hover:shadow-lg w-full mb-2">Explore</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
