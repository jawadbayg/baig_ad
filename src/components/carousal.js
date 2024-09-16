import Carousel from 'react-bootstrap/Carousel';
import './styles/carousal.css'; 

function Carousal() {
  return (
    <Carousel interval={4000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/gallery/p23.jpeg" 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>City high school</h3>
          <p>Stainless steel backlit letters</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/gallery/p14.jpg" 
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Sanoor</h3>
          <p>Acrylic and stainless steel 3D Letters with module light</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/gallery/p6.jpeg" 
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Main Street Cafe</h3>
          <p>3D Acrylic Letters</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/gallery/p7.jpg" 
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>14th Street Pizza</h3>
          <p>3D Acrylic Letters</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;
