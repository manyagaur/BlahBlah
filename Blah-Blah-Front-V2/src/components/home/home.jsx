import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/navbar";
import Leftbar from "../leftbar/leftbar";
import Rightbar from "../rightbar/rightbar";
import Posts from "../posts/Posts";
import Stories from "../Stories/Stories";

function Home(){
    const nav = useNavigate();

    return(

        <>
        <Navbar/>
        <hr className="border border-blue-300"></hr>
        <div className="h-screen bg-white grid grid-cols-12">
            <div className="hidden sm:block h-screen bg-white col-span-2"><Leftbar/></div>
            <div className="mainpage col-span-7 p-[14px] h-screen bg-gray-200 overflow-scroll">
                <Stories/>
                <Posts/>
            </div>
                
                
            <div className="hidden lg:block h-screen bg-white col-span-3 p-[14px] "><Rightbar/></div>
        </div>
        </>
    )
}


export default Home;
