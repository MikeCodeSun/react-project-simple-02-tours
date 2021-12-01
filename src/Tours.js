import React from "react";
import Tour from "./Tour";

export default function Tours({ tours, deleteTour }) {
  return (
    <>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />;
        })}
      </div>
    </>
  );
}
