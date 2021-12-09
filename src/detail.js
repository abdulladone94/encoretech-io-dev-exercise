import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";

const DetailView = () => {
  const { id } = useParams();

  const [user, setUser] = useState("");
  const [fetchUser, setFetchUser] = useState("");

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setUser(response.data);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setFetchUser(response.data);
      });
  }, [id]);

  return (
    <div className="App">
      <h1>Detail Informations</h1>
      <div className="detailCard">
        <h1>Card id: {id}</h1>
        <h1>Name: {fetchUser.name}</h1>
        <p>Title: {user.title}</p>
        <br />
        <Link to="/">Back To Home</Link>
      </div>
    </div>
  );
};

export default DetailView;
