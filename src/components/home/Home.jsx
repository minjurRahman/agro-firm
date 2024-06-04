import React from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import CowProduct from "./CowProduct";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner />
      <CowProduct data={data} />
    </div>
  );
};

export default Home;
