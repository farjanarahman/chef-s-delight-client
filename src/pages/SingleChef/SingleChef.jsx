import React, {useState} from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
// import { toast } from "react-toastify";
import {Toaster, toast} from "react-hot-toast"
import LazyLoad from "react-lazy-load";

const SingleChef = () => {
  const chef = useLoaderData();
  console.log(chef);
  const { chefName, id, bio, like, number, img, recipe, experience } = chef;
  const [disable, setDisable] = useState(false);

  const handleFavourite = () => {
    toast.success("You added it to favourite");
    setDisable(true);
  };

  return (
    <Container>
      <Card className="mt-5">
        <LazyLoad offsetVertical={500} threshold={0.95}>
          <Card.Img
            variant="top"
            className="img-fluid"
            style={{ height: "500px", width: "100%" }}
            src={img}
          />
        </LazyLoad>
        <Card.Body className="text-secondary">
          <Card.Text className="text-dark">
            <h1>{chefName}</h1>
          </Card.Text>
          <Card.Text>
            <h3>{bio}</h3>
          </Card.Text>
          <Card.Text>
            <h3>Liked {like} people</h3>
          </Card.Text>
          <Card.Text>
            <h3>{number} of item cooked</h3>
          </Card.Text>
          <Card.Text>
            <h3>Experience: {experience} years</h3>
          </Card.Text>
          <hr />

          {recipe.map((r) => (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Recipe Name</th>
                  <th colSpan={5}>{r.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Ingredients</th>
                  {r.ingredients.map((i) => (
                    <td>{i}</td>
                  ))}
                </tr>
                <tr>
                  <th>Cooking Method</th>
                  {r.steps.map((s) => (
                    <td>{s}</td>
                  ))}
                </tr>
                <tr>
                  <th>Rating</th>
                  <td colSpan={5}>
                    {r.rating}
                    <Rating
                      placeholderRating={r.rating}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                  </td>
                </tr>
              </tbody>
            </Table>
          ))}
          <Button onClick={handleFavourite} disabled={disable} className="btn-danger" variant="success">
            Favourite
          </Button>
          <Toaster></Toaster>
          <hr />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleChef;
