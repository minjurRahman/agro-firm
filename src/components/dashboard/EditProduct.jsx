import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditProduct = () => {
  const product = useLoaderData();
  console.log(product);

  //Form e purber data input field e show korate hobe...
  const [title, setTitle] = useState(product.title);
  const [brand, setBrand] = useState(product.brand);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [image_url, setImage_url] = useState(product.image_url);

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { title, brand, price, description, image_url };

    await fetch(`http://localhost:5000/shoes/${product._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("Product updated successfully");
  };
  return (
    <div>
      <h1 className="text-6xl font-bold text-center">Edit Products</h1>
      <div className="my-20">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="bg-gray-200 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-200 p-4 w-full border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-200 p-4 w-full border border-black rounded-lg"
              type="text"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-200 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-200 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image Url"
              value={image_url}
              onChange={(e) => setImage_url(e.target.value)}
            />
          </div>
          <div className="mt-3 flex justify-center items-center">
            <input
              className="btn bg-blue-600 text-white p-4"
              type="submit"
              value="Update Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
