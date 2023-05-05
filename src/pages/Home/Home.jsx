import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";
import Featured from "./Featured";
import MoreRecipe from "./MoreRecipe";

const Home = () => {
    const recipe=useLoaderData()
    console.log(recipe)
    //const [recipe,setRecipe]=useState([]);
    // useEffect(()=>{
    //     fetch("https://assignment-10-alpha.vercel.app/recipes")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setRecipe(data)
    //         console.log(data)
    //     })
    // },[])
  return (
    <Container>
      <Row className="mt-5">
        <Col className="mx-auto">
          <div className="mx-auto">
          <h1 className="text">Welcome to <span className="fw-bolder text-danger">Chef's Delight</span></h1>
          <p className="text-secondary">
          Welcome to Chef's Delight! Our website offers a vast collection of authentic and contemporary Indian recipes from renowned chefs around the world. Whether you're a seasoned cook or a beginner in the kitchen, our user-friendly interface makes it easy to find and follow your favorite recipes. Explore diverse and flavorful dishes that are sure to delight your taste buds and create unforgettable dining experiences. Thank you for visiting Chef's Delight!
          </p>
          <Button variant="danger">Visit Us</Button>
          </div>
        </Col>
        <Col>
          <img
            className="img-fluid"
            style={{height:"280px",width:"550px",borderRadius:"10px"}}
            src="https://images.slurrp.com/prod/articles/jhzlfvthmf.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75"
            alt=""
          />
        </Col>
      </Row>
      <h2 className="mt-5 text-center text-danger text-decoration-underline">Chefs</h2>
      
      <Row xs={1} md={2} lg={3} className="g-4 d-flex mt-5">
      {recipe.map(item=><Recipe  item={item} key={item.id}></Recipe>)}
      </Row>
      <Row>
      {/* {recipe.map(item=><Featured  item={item} key={item.id}></Featured>)} */}
      <Featured></Featured>
      <MoreRecipe></MoreRecipe>
      </Row>
    </Container>
  );
};

export default Home;
