import React, { useState } from "react";

export default function Tour({ id, name, image, info, price, deleteTour }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="single-tour">
      <img src={image} alt={name} className="img tour-img" />
      <footer>
        <header>
          <h5>{name}</h5>
          <p>{price}</p>
        </header>
        <article className="tour-info">
          <p>
            {showMore ? info : `${info.substring(0, 220)}...`}
            <button
              className="btn btn-hipster"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </p>
        </article>
      </footer>
      <button className="btn btn-delete" onClick={() => deleteTour(id)}>
        Not Intereted
      </button>
    </div>
  );
}
