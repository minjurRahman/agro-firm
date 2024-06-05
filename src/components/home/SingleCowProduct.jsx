import React from "react";
import { Link } from "react-router-dom";

const SingleCowProduct = ({ data }) => {
  const { _id, title, brand, price, description, image_url } = data;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="h-60">
        <img src={image_url} alt="Product Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl front-semibold">{brand}</h3>
        <h3 className="text-xl front-semibold text-red-600">{price}</h3>
        <p>{description.slice(0, 50)}...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/cow-products/${_id}`}>See More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCowProduct;
