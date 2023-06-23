import React from 'react'

const Login = () => {
  return (
    <>
      <div className='max-w-6xl flex flex-col items-center mx-auto mt-40'>
        <div>
          <h1 className='text-2xl text-center rounded-full px-3 py-1 my-1'>Login as
            <strong className='pl-3'>
              <a href='/employee-login' className=' no-underline'>Employee</a>
            </strong>
          </h1>
          <h1 className='text-xl text-center rounded-full px-3 py-1 my-1'>
            or login as user
          </h1>
        </div>
        <div></div>
        <div className='max-w-2xl flex'>
          <LoginForm/>
        </div>
        <div>
          <h5 className='mt-6 text-center'>New ? <a className=' no-underline' href='/signup'>Signup</a></h5>
        </div>
      </div>
    </>
  )
}

export default Login


export const LoginForm = ({ type }) => {

  const heading = (type === 'employee') ? 'Employee Login' : 'Login';

  return (
      <div className="w-full  p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{heading}</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="px-4 py-2 border-[1.5px] w-full border-gray-300 rounded-md shadow-sm focus:border-gray-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="px-4 py-2 border-[1.5px] w-full border-gray-300 rounded-md shadow-sm focus:border-gray-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
  );
};
