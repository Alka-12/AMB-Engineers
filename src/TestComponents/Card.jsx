import React from "react";
import { NavLink } from "react-router-dom";
// import "./card.css";
function Card({ title, imgsrc }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." height={250} />
          <div className="card-body bg-dark text-white">
            <h5 className="card-title bg-dark text-white">{title}</h5>
            {/* <p className="card-text bg-dark text-white">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
            {/* <NavLink to="/contact" className="btn btn-primary">
              See More
            </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
