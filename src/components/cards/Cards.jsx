import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './cards.css'



export default function Cards(prop) {
    return (
                <div className="col">
                    <div className="card">
                        <img src={prop.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{prop.title}</h5>
                            <p className="card-text">{prop.under_title}</p>
                            <a href="#!" className="btn btn-primary">Te amagesc</a>
                        </div>
                    </div>
                </div>
    );
}
