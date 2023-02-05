import React, { useEffect, useState } from "react";

function Popular() {

const [popular, setPopular] = useState([]);

//running get popular as soon as compenent gets prepared
useEffect(() => {
  getPopular();
},[]);


const getPopular = async () => { //fethces recipes from api including api key to fetch, number=9 will show 9 recipes on load
  const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
  const data = await api.json();
  console.log(data);
  setPopular(data.recipes)
}

  return <div>
    
    {popular.map((recipe) => {
      return(
        <div>
          <p>{recipe.title}</p>
        </div>
      );
    })}
  </div>;
  
}

export default Popular;