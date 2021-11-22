import React from 'react';
import Posts from '../posts/Posts'
import Sidebar from '../sidebar/Sidebar'
import './Home.css'
import NavBar from '../NavBar/NavBar'



export default function Home() {
    return (
        <div className="navbar">

            <NavBar />
            <Posts />
            <Sidebar />

        </div>


    );
}