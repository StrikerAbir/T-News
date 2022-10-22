import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummeryCard = ({ news }) => {
  const { title, _id, rating, author, details, image_url, total_view } = news;
  return (
    <div>
      <Card className="mb-5">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Image
              roundedCircle
              src={author?.img}
              style={{ height: "60px" }}
            ></Image>
            <div className="ms-3">
              <h5 className="mb-0">{author?.name}</h5>
              <small>{author?.published_date}</small>
            </div>
          </div>
          <div className="d-flex">
            <FaRegBookmark className="me-3"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <>
                {details.slice(0, 250) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read more</Link>
              </>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between ">
          <div className="d-flex align-items-center">
            <FaStar className="me-2 text-warning"></FaStar>
            <span>{rating?.number}</span>
          </div>
          <div className="d-flex align-items-center">
            <FaEye className="me-2"></FaEye>
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummeryCard;
