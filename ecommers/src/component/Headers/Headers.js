import React, { useState } from "react";
import "../Headers/Headers.css"

export default function Headers(){
    const [search,setSearch] = useState("")




    return (
        <>
        <div className="Headers">
            <h1>Movies</h1>
            <input className="search" type="text" placeholder="search heare" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        </>
    )
}