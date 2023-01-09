import React, {useState,useEffect} from "react";
import "../Card/Card.css"
import  Skeleton ,{SkeletonTheme} from "react-loading-skeleton"
    import { useEffect, useState } from "react";
    import { Link } from "react-router-dom";


export default function  Card({movies}){
    const [loading,setloading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setloading(false)
        },1500)
    },[])
    return (
        <>
        <div className="card">
            <SkeletonTheme color="#2020202" higlightColor="#444">
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>

        <Link to="home" style={{textDecoration:"none",color:"wheat"}}>
            <div className="Cards">
            <img src={movies.Poster}/>
            </div>
            <div className="cards-overlay">
                <div className="title">{movies?movies.Title:""}</div>
                <div className="title">{movies?movies.Released:""}</div>
                <div className="title">{movies?movies.Year:""}</div>
                <div className="title">{movies?movies.Plot:""}</div>
                <div className="title">{movies?movies.Ratings:""}</div>
            </div>
        </Link>

        </>
    )
}