import React from 'react'

const BlogForm = (props) => {
  const { children } = props;
  return (
   
    <div className="bg-blue-100 p-8 rounded-2xl w-full">
        <div className="flex">
          <h1 className="font-bold uppercase text-5xl">Create Blog</h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Tile"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Subtitle*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="file"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Category*"
          />
        </div>
        <div className="my-4">
          <textarea
            placeholder="Message*"
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="my-2 w-1/2 lg:w-1/4">
          <button
            type="button"
            className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full cursor-pointer
                      focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </div>
  )
}

export default BlogForm
