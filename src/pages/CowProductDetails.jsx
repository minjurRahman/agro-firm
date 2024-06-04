import React from "react";
import { useLoaderData } from "react-router-dom";

const CowProductDetails = () => {
  const data = useLoaderData();
  const { title, brand, price, description, image_url } = data;
  return (
    <div className=" items-center">
      <div className="card justify-center align-middle w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Product Picture" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h2 className="">Brand: {brand}</h2>
          <h2 className="">Price: {price}</h2>

          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">Buy Now</button>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-info text-white">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CowProductDetails;
