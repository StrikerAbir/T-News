import React from 'react';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaWhatsapp,FaTwitch } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightNav = () => {
    return (
      <div>
        <ButtonGroup vertical>
          <Button className="mb-2" variant="outline-primary">
            <FaGoogle></FaGoogle> Login with Google
          </Button>
          <Button variant="outline-dark">
            <FaGithub></FaGithub> Login with GitHub
          </Button>
        </ButtonGroup>
        <div className='mt-4'>
          <h5>Find Us on</h5>
          <ListGroup>
            <ListGroup.Item className='mb-2'><FaGoogle></FaGoogle> Google</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
            <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
      </div>
    );
};

export default RightNav;