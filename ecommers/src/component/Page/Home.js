import React, { useEffect, useState } from "react";
import "../Page/Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import "bootstrap/dists/css/bootstrap.min.css"
import Headers from "../Headers/Headers";
import "../../App.css"
import Movies from "../Headers/Movies"
import {Link } from "react-router-dom"


export default function Home(){
    const [popularMovies,setPopularmovies] = useState([])

    useEffect(()=>{
  fetch("http://www.omdbapi.com/?i=tt3896198&apikey=364b3c13").then(res=>res.json()).then(data=>{
    console.log({data})
    setPopularmovies([data])
  }
  
)
    },[])
    return (
        <>
        <div className="poster">
        <Headers/>
        <Carousel 
         showThumbs={false}
         autoPlay={true}
         transitionTime={3}
         infiniteLoop={true}
         showStatus={false}   
        >
        
          {
            popularMovies.map((movies,index)=><div>
           <Movies movies={movies} key={index}/>
                </div>)
          }
          
        </Carousel>
       
        </div>
        </>
    )
}