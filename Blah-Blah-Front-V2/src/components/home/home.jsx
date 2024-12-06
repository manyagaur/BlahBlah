import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/navbar";
import Leftbar from "../leftbar/leftbar";

function Home(){
    const nav = useNavigate();

    return(

        <>
        <Navbar/>
        <div className="h-screen bg-white">
            <Leftbar/>
        </div>
        </>
    )
}


export default Home;