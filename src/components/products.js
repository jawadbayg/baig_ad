import React from 'react';
import './styles/products.css'; 

const Products = () => {
  return (
    <div className="card-section-container">
      <div className="row">
      <div className="col-lg-3 col-md-6 card-column">
          <div className="text">
            <p className="subtitle-text">Best Solutions</p>
            <h2 className="large-text">For Your Business</h2>
            <p>Lorem ipsum dolor sit amet consecte turadipiscing elit sed do eiusmodte porincididunt ut laboreua.</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 card-column">
          <div className="card">
            <img src="/image/card1.jpg" alt="Card 1" className="card-img-top" />
            <div className="card-body">
            </div>
          </div>
              <h5 className="card-title">Card Title 1</h5>
        </div>
        <div className="col-lg-3 col-md-6 card-column">
          <div className="card">
            <img src="/image/card2.jpg" alt="Card 2" className="card-img-top" />
            <div className="card-body">
              {/* <p className="card-text">This is a description for the second card.</p> */}
            </div>
          </div>
              <h5 className="card-title">Card Title 2</h5>
        </div>
        <div className="col-lg-3 col-md-6 card-column">
          <div className="card">
            <img src="/image/card3.jpg" alt="Card 3" className="card-img-top" />
            <div className="card-body">
              {/* <p className="card-text">This is a description for the third card.</p> */}
            </div>
          </div>
              <h5 className="card-title">Card Title 3</h5>
        </div>
      </div>
    </div>
  );
};

export default Products;
