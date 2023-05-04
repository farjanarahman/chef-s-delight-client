import React from "react";
import { Button, Card,  Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Recipe = ({ item }) => {
  const { id,chefName, img,bio,like,number,experience} = item;

  return (
    <Container>
      {/* <Row className="d-flex">
        <Col>
          <Card>
            <Card.Img
              style={{ height: "250px", width: "250px" }}
              variant="top"
              src={img}
            />
            <Card.Body>
              <Card.Title>{chefName}</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row> */}
      {/* <Row xs={1} md={2} lg={3} className="g-4 d-flex"> */}
      <Col className=" ">
          <Card>
            <Card.Img variant="top" style={{height:"300px",width:"100%"}} src={img} />
            <Card.Body className="text-secondary">
              <Card.Title className="text-dark">{chefName}</Card.Title>
              <Card.Text>
               {bio}
              </Card.Text>
              <Card.Text className="fs-6 ">
                 <small>Liked by  {like} people </small>            </Card.Text>
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
    {/* </Row> */}

    
    </Container>
  );
};

export default Recipe;
