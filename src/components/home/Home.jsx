import React from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import CowProduct from "./CowProduct";
import Accordion from "./Accordion";
import DisplayPrimiumProduct from "./DisplayPrimiumProduct";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner />
      <CowProduct data={data} />
      <DisplayPrimiumProduct />
      <Accordion />
    </div>
  );
};

export default Home;
