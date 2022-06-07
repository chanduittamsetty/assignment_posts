import React from "react";
export const Card=(props)=>{
    // console.log(props)
    return <div style={{"border":"1px solid black"}}>
        <h4>{props.prop.title}</h4>
        <p>{props.prop.body}</p>
    </div>
}