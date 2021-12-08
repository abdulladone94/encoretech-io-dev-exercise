import React from "react";
import { useParams } from "react-router-dom";

const DetailView = () => {
  const { id } = useParams();
  return <h1>Card id: {id}</h1>;
};

export default DetailView;
