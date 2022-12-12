/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Comment } from "./Comment";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/fromDB/userSlice";
export const Comments = ({ postId, comment }) => {
  const post_id = parseInt(postId);
  const [comments, setComments] = useState();
  const users = useSelector((state) => state.Users.data?.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const config = {
    method: "get",
    url: `http://127.0.0.1:8000/api/comments/${post_id}`,
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        // console.log(response.data.data);
        setComments(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [comment]);

  return (
    <div className="my-5">
      {comments?.map((comment, i) => {
        return <Comment key={i} comment={comment} users={users} />;
      })}
    </div>
  );
};
