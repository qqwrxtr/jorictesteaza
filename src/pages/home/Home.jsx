import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
  <div className="container mt-5">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="display-4">Welcome to React!</h1>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col">
        <div className="card">
          <img src="https://picsum.photos/seed/1/200/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="https://picsum.photos/seed/2/200/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="https://picsum.photos/seed/3/200/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;