import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div className='pb-6'>



<div className="max-w-2xl px-4 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">{post['created_at']}</span>
    </div>

    <div className="mt-2">
        <p className="mt-2 text-gray-600 dark:text-gray-300">
        {post['description']}  </p>
    </div>

    <div className="flex items-center justify-between mt-4">
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link">Read more</a>

      
    </div>
</div>
    </div>
  )
}

export default PostCard