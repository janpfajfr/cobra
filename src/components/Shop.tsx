import React, { useState, useEffect } from "react";
import "../App.css";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  
  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    const comments: any  = await data.json;
    console.log(comments);
  };

  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
