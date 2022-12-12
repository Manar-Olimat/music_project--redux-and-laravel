/* eslint-disable */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CommentForm } from "./CommentForm";
// import { Comments } from "./Comments.jsx";
export const Post = ({ post, users }) => {
  const user = users.find((usr) => usr.id === post.user_id);
  // console.log(user);
  // console.log(post);
  return (
    <>
      <div className="w-full bg-black m-5">
        <h1>post  </h1> <h1 className="text-end text-white pr-10">text</h1>
        <p className="text-white">{post?.description}</p>
        <img
          //u can read the image like this
          // src={`data:image/jpeg;base64,${user.avatar}`}
          src={user?.avatar}
          width="50%"
          alt=""
        />
        {/* <Comments postId={post?.id} /> */}
        <CommentForm postId={post?.id} />
      </div>
    </>
  );
};
