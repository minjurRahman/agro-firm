import SingleCowProduct from "./SingleCowProduct";

const CowProduct = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text text-center">Our Cows</h1>
      <div className="lg:flex md:w-full gap-2 font-bold justify-center items-center ">
        {data?.slice(0, 4).map((data) => (
          <SingleCowProduct key={data?.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default CowProduct;
