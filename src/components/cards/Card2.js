import React, {useState} from "react";
import { data } from "../../helpers/Data";
import "./Card.css";

function Card2(props) {
  const [showImage, setShowImage] = useState(false);
  return (
    <div className="card-container">
      {showImage 
      ? (
        <>
        {data.map((card) => {
        return (
          <div className="cards" onClick={props.onMouseClick} onDoubleClick={() => setShowImage(!showImage)}>
            <img src={card.image} alt={card.title} />
            <div className= {props.isVisible ? "card_over2" : "card_over2_no"}>
            </div>
          </div>
        );
      })}
        </>
      )
      :(
        <>
        {data.map((card) => {
        return (
          <div className="cards" onClick={props.onMouseClick} onDoubleClick={() => setShowImage(!showImage)}>
            <div className="title">
              <h2>{card.title}</h2>
            </div>
            <img src={card.image} alt={card.title} />
            <div className= {props.isVisible ? "card_over2" : "card_over2_no"}>
              <p>{card.desc}</p>
            </div>
          </div>
        );
      })}
        </>
      )}
    </div>
  );
}
export default Card2;