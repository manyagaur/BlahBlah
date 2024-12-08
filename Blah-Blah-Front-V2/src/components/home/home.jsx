import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/navbar";
import Leftbar from "../leftbar/leftbar";
import Rightbar from "../rightbar/rightbar";

function Home(){
    const nav = useNavigate();

    return(

        <>
        <Navbar/>
        <hr className="border border-blue-300"></hr>
        <div className="h-screen bg-white grid grid-cols-12">
            <div className="hidden sm:block col-span-2"><Leftbar/></div>
            <div className="col-span-7 p-[14px] bg-gray-100">Home</div>
            <div className="col-span-3 p-[14px]"><Rightbar/></div>
        </div>
        </>
    )
}


export default Home;