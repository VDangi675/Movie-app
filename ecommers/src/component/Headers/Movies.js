import React from "react";
import "../Headers/Movies.css"
export default function Movies({movies}){
    return(
        <>
        <div className="box">
        <div className="movies">
            <img className="img-1" src={movies.Poster} alt="movies"/>
            <h1>{movies.Title}</h1>
             <h2>{movies.Language}</h2>
             </div>
             <div className="title">
                <h3>Writer:-{movies.Director}</h3>
                <h4>Country:-{movies.Country}</h4>
                <p> Awards:--{movies.Awards}</p>
                
            </div>

        <div className="details">
            <section className="sec-1">
            <p>Movie Writer:-{movies.Writer}</p>
               <p>Year:-{movies.Year}</p>
               <p>Rated:-{movies.Rated}</p>
               <p>Released Date:--{movies.Released}</p>
               <p>Runtime:-{movies.Runtime}</p>
               <p>Genwr:-{movies.gener}</p>
               <p>Movie Rating:-{movies.Rated}</p>
               <p>Movie Plot:-{movies.Plot}</p>
            </section>
        </div>
        </div>
        </>
    )
}