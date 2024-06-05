import { toast } from "react-hot-toast";

const AddProduct = () => {
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

    await fetch("https://agro-firm-server.onrender.com/cows", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product Successfully added");
        form.reset();
      });
  };
  return (
    <div>
      <h1 className="text-6xl font-bold text-center">Add New Products</h1>
      <div className="my-20">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="bg-gray-200 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-200 p-4 w-full border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-200 p-4 w-full border border-black rounded-lg"
              type="text"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-200 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-200 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image Url"
            />
          </div>

          <div className="mt-3 flex justify-center items-center">
            <input
              className="btn bg-blue-600 text-white p-4"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
