import React, { useEffect } from "react";
import axios from "axios";
import SearchAppBar from "./SearchBar";
import "./App.css";
import { setAllData } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function FetchData() {
  const dispatch = useDispatch();
  const allItems = useSelector((state) => state.data.allItems);

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/posts").then((response) => {
      dispatch(setAllData(response.data));
    });
  }, [dispatch]);
  return (
    <div>
      <SearchAppBar />
      {allItems.map((card) => {
        return (
          <div className="note">
            <h1>
              {card.id + ". "}
              {card.title}
            </h1>
            <p>{card.body}</p>
            <Link to={`/detail/${card.id}`}>View More</Link>
          </div>
        );
      })}
    </div>
  );
}
