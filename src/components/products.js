import React from 'react';
import { Link } from 'react-router-dom';
import './styles/products.css'; 

const Products = () => {
  return (
    <div className="card-section-container">
      <div className="row">
        <div className="col-lg-3 col-md-6 card-column">
          <div className="text-p">
            <p className="subtitle-text-p">Best Solutions</p>
            <h2 className="large-text-p">For Your Business</h2>
            <p className='text-details-p'>At Baig Advertising, we specialize in crafting captivating sign boards, 3D letter boards, and dynamic light boards that transcend traditional marketing</p>
          </div>
          <Link to="/gallery" className='view-more-btn'>View More</Link>
        </div>

        <div className="col-lg-3 col-md-6 card-column">
          <div className="card">
            <img src="/images/steel.jpg" alt="Card 1" className="card-img-top" />
          </div>
          <h5 className="card-title">Stainless Steel letters</h5>
        </div>
        <div className="col-lg-3 col-md-6 card-column">
          <div className="card">
            <img src="/gallery/p2.jpg" alt="Card 2" className="card-img-top" />
          </div>
          <h5 className="card-title">Neon & 3D Sign Board</h5>
        </div>
        <div className="col-lg-3 col-md-6 card-column">
          <div className="card">
            <img src="/gallery/p22.jpg" alt="Card 3" className="card-img-top" />
          </div>
          <h5 className="card-title">Tri-faced Sign Board</h5>
        </div>
      </div>
    </div>
  );
};

export default Products;
