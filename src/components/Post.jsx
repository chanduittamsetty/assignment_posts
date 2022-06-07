import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";

export const Posts=()=>{
    const [input,setInput]=useState("");
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(({data})=>{return setPosts(data)})
    },[])
    const handleChange=(e)=>{
        console.log(e.target.value)
        setInput(e.target.value)
    }
    console.log(posts);
    const handleFilter=()=>{
        setPosts(posts.filter((el)=>{
            let body=el.body;
            let title=el.title;
            if(title.includes(input)){
            return el
            }
        }))
    }
    return (<div style={{"textAlign":"center"}}>
        <input placeholder="enter text to be filtered" onChange={handleChange}/>
        <button style={{"display":"block","margin":"auto","marginTop":"30px"}} onClick={handleFilter}>filter posts</button>
        <div>
            {posts.map((el)=>(<Card key={el.userId} prop={el}/>))}
        </div>
        
    </div>)
}