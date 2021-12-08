import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchAppBar from "./SearchBar";
import "./App.css";

export default function App() {
  const [fetchData, setFetchData] = useState("");

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/posts").then((response) => {
      setFetchData(response.data);
    });
  }, []);
  if (!fetchData) return null;

  return (
    <div>
      <SearchAppBar />
      {fetchData.map((card) => {
        return (
          <div className="note">
            <h1>
              {card.id + ".   "}
              {card.title}
            </h1>
            <p>{card.body}</p>
          </div>
        );
      })}
    </div>
  );
}
