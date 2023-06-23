import React from 'react';

const Signup = () => {
  return (

    <div className="flex justify-center items-center mt-24 ">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border-[1px] border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="px-4 py-2 w-full border-[1.5px] border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-2 w-full border-[1.5px] border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="px-4 py-2 w-full border-[1.5px] border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="px-4 py-2 w-full border-[1.5px] border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="px-4 py-2 w-full border-[1.5px] border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:outline-none"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
