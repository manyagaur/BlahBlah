import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

 
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(true)
  }

  const hideSidebar = () => {
    setSidebar(false)
  }
 
  return (
    <>
      <div className="grid grid-cols-12 h-9">
        <div className="col-span-2 bg-white">
          <div className="m-2 p-2">
            Logo
          </div>
        </div>
        <div className="col-span-4 bg-white">
          <input type="search" className="hidden sm:block rounded-md m-2 p-2 sm:w-[170px] w-0 border border-gray-400" />
        </div>
        <div className="col-span-6 bg-white">
          <div className="flex justify-start mt-2 p-2">
            <div className="mx-4"> <a href='#'>Notifs </a></div>
            <div className="mx-4"><a href='#'> Messages </a></div>
            <div className="mx-4"><a href='#'> Friends </a></div>
            <div className="mx-4"><a href='#'> Explore </a></div>
            <div className='relative'>
              <div onClick={showSidebar} className='absolute left-[370px] w-[100%]'><a href='#'><MenuIcon/></a></div>
            </div>
          </div>
        </div>
      </div>
      {sidebar && (
      <div className="sidebar fixed top-0 right-0 shadow-xl h-screen w-[350px] bg-gray-200/[0.6] backdrop-blur-xl z-999">
        <div className="flex flex-col justify-start">
          
        <button  onClick={hideSidebar} className='mr-[300px] mt-2'><a href='#'><CloseIcon/></a></button>
          <button className="h-12 hover:shadow-lg w-[100%]"> <a href='#'>Notifs </a></button>
          <button className="h-12 hover:shadow-lg w-[100%]"><a href='#'> Messages </a></button>
          <button className="h-12 hover:shadow-lg w-[100%]"><a href='#'> Friends </a></button>
          <button className="h-12 hover:shadow-lg w-[100%]"><a href='#'> Explore </a></button>
        </div>
      </div>
    )}
    </>
  );
}

export default Header;
