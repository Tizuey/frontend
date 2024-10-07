//import React from 'react'; 
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Certifique-se de ter esse arquivo CSS

function ExampleCarouselImage() {
  return (
    <section className="carousel-section">
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Description for First Slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Description for Second Slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+3"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Description for Third Slide</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default ExampleCarouselImage;

