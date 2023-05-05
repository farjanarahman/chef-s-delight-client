import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const Recipe = ({ item }) => {
  const { id, chefName, img, bio, like, number, experience } = item;

  return (
    <Container>
      <Col className=" ">
        <Card className="" style={{height: '650px', marginBottom: '15px'}}>
          <LazyLoad height={300} threshold={0.95}>
            <Card.Img
              variant="top"
              style={{ height: "300px", width: "100%" }}
              src={img}
            />
          </LazyLoad>
          <Card.Body className="text-secondary">
            <Card.Title className="text-dark">{chefName}</Card.Title>
            <Card.Text>{bio}</Card.Text>
            <Card.Text className="fs-6 ">
              <small>Liked by {like} people </small>
            </Card.Text>
            <Card.Text>
              <small>{experience} years of experience</small>
            </Card.Text>
            <Card.Text>
              <small>{number} item dishes</small>
            </Card.Text>
            <Link to={`/recipes/${id}`}>
              <Button variant="warning">View Recipe</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default Recipe;
