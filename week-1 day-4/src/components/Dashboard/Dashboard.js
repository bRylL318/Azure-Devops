import React, { useEffect, useState } from "react";
import axios from 'axios';
import { getAllPosts } from "../../asset/service";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(getAllPosts)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const postList = posts.length ? (
    posts.map((post) => {
      return <p>{post.title}</p>;
    })
  ) : (
    <p>No Post yet</p>
  );
  return <>{postList}</>;
};

export default Dashboard;