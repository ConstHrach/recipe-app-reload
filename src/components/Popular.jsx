import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
  setPopular(data.recipes);
  console.log(data.recipes)
}
// creates a div for each unique recipe based on id, creates a paragraph based on recipes title (without key prop it would bring errors)
  return <div>
  
    {popular.map((recipe) => {
      return(
        <Wrapper>
          <h3>Popular Picks!</h3>
          {popular.map((recipe) => {
            return(
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </Card>
            )
          })}
        </Wrapper>
      );
    })}
  </div>;
}

const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
`
export default Popular;