import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, category_id, author } = news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <div className="d-flex justify-content-around">
          <p>Author: {author?.name}</p>
          <p>Published date: {author?.published_date}</p>
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">Back to category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;<h2>This is news</h2>