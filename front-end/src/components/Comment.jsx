/* eslint-disable */
import {useState} from "react";
import axios from "axios";
export const Comment = ({ comment, users }) => {
  const user = users.find((user) => user.id === comment.user_id);
  const [isOpend, setOpend] = useState(false);

  const handleDropDown = () => {
    setOpend(!isOpend);
  };
  const handleEdit = () => {
console.log('dddddd');  };
console.log(comment['id']);
  const handleDelete=()=>{
    axios.delete(`http://localhost:8000/api/delete_comment/${comment['id']}`);
    // .then(() => setStatus('Delete successful'));
  }
  return <div className="text-white flex">
    <h6>Comment </h6>

    <div className="dropdown">
      
      <button onClick={handleDropDown} id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
</button>
      <div
        id="dropdown"
        className={` z-1000 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${
          isOpend ? "block" : "hidden"
        }`}
      >
      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
      
      <li>
        <button onClick={handleEdit} class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</button>
      </li>

      <li>
        <button onClick={handleDelete} class="block py-2 px-4 hover:bg-gray-100 text-red-500 text-1 fs-2 dark:hover:bg-gray-600 dark:hover:text-white">Delete</button>
      </li>
    </ul>
      </div>
    </div>
  </div>;
};
