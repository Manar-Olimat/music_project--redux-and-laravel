import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/fromDB/userSlice";

export const Review = ({ review }) => {
  const user = useSelector((state) =>
    state.Users?.data?.data.find((user) => user.id === review.id)
  );
  //   find((user) => user.id === userId)

  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return <div>Review</div>;
};
