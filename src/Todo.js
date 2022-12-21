import React from "react";
import { useQuery } from "react-query";

function Todo(){

  const {data, error, isLoading} = useQuery(["pokemon"], async ()=>{
    await new Promise (resolve=>setTimeout(resolve,1000));
    console.log("Requested");
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    return res.json();
  })

  if(isLoading){
    return "Loading..."
  }
  console.log("data",data)

  if(error){
    return "Error:" +error.message
  }
    return(
      <div className="fs-2 my-5">
        {data?.game_indices.map((pokemon, index) =><div key={index} className="py-2 ms-5 card me-5 ">{pokemon.version.name}</div>)}
        {/* {data.title} */}
      </div>
    )
}
 

export default Todo;