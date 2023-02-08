import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

function VeganPicks() {

  const [VeganPicks, setVeganPicks] = useState([]);

  //running get popular as soon as compenent gets prepared
  useEffect(() => {
    getVeganPicks();
  },[]);
  
  
  const getVeganPicks = async () => { //fethces recipes from api including api key to fetch, number=9 will show 9 recipes on load
    //caches results in local storage by making the array into a string with parse(check)
    const check = localStorage.getItem("veganPicks");
  
    if(check){
      setVeganPicks(JSON.parse(check));
    } else {// api searches for random recipes with the tag vegetarian
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
      const data = await api.json();
  
      localStorage.setItem('veganPicks', JSON.stringify(data.recipes));
      console.log(data);
      setVeganPicks(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div>
    <Wrapper>
      <h3>Our Top Vegan Picks!</h3>
      <Splide options={{
        perPage: 3,
        arrows: false,
        pagination:false,
        drag: 'free',
        gap: "5rem",
      }}>

      {VeganPicks.map((recipe) => {
        return(
          <SplideSlide key={recipe.id}>
            <Card>
              <Link to={'/recipe/' + recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        )
      })}
      </Splide>
    </Wrapper>

  </div>
  )
}
const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img{
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

}
p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default VeganPicks;