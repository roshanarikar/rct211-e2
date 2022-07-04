import React from "react";
import "../Styles/Shoes.css"

const ShoeCard = ({shoesData}) => {
  let shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`} className="card">
      <div>
        <img data-cy="shoe-card-image" src={shoesData.image} alt="" />
      </div>
      <div>
        <div data-cy="shoe-name">{shoesData.name}</div>
        <div data-cy="shoe-category">{shoesData.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
