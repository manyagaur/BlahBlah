import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/navbar";

function Home(){
    const nav = useNavigate();

    return(

        <>
        <Navbar/>
        <div className="h-screen bg-white">
        </div>
        </>
    )
}


export default Home;