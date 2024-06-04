import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const SingleProduct = ({ data, deletedProduct }) => {
  const { _id, title, brand, price, description, image_url } = data;
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    await fetch(`https://agro-firm-server.onrender.com/shoes/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        deletedProduct(_id);
        toast.success("Product Deleted Successfully");
      });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl front-semibold">{brand}</h3>
        <h3 className="text-xl front-semibold text-red-600">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button onClick={handleDelete} className="btn bg-red-600 text-white">
            Delete
          </button>
          <button className="btn btn-outline btn-info text-white">
            <Link to={`edit/${_id}`}>Edit</Link>
          </button>
          <button className="btn btn-primary text-white">
            <Link to={`/cow-products/${_id}`}>See More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
