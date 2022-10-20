import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsSummeryCard = ({ news }) => {
  const { title, _id, total_view, author, details, image_url } = news;
  return (
    <div>
      <Card className="mb-5">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
              roundedCircle
              src={author.img}
              style={{ height: "60px" }}
            ></Image>
            <div className="ms-3">
              <h5>{author.name}</h5>
              <small>{author.published_date}</small>
            </div>
          </div>
          <div className="d-flex">
            <FaRegBookmark className="me-3"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read more</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummeryCard;
