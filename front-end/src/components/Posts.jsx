/* eslint-disable */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Post } from "./Post";
import { getUsers } from "../redux/fromDB/userSlice";
export const Posts = ({ description }) => {
  const users = useSelector((state) => state.Users.data?.data);
  // console.log(description);
  const [posts, setPosts] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/api/posts",
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        // console.log(response.data.data);
        setPosts(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [description]);
  console.log(posts);
  return (
    <>
      {posts
        ?.sort((a, b) => b.id - a.id)
        .map((post, i) => {
          return <Post post={post} key={i} users={users} />;
        })}
    </>
  );
};
