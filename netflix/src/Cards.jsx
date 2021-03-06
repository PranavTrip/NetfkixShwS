import React from "react";
import "./index.css";
import Images from "./Images";
import Heading from "./Heading";

const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <Images imgsrc={props.imgsrc} />
          <div className="card_info">
            <span className="card_title">{props.title}</span>
            <Heading name={props.name} />
            <a href={props.link} target="_blank" className="card_link">
              <button className="card_btn">Watch Now !</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
