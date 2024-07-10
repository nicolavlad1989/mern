import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllUsers } from '../../../api/controllers/user.controllers';

export default function Home() {
  const { currentUser } = useSelector((state) => state.user)
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    setLoading(true);
    const response = await fetch("/api/user/getAllUsers");
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleChange = (e) =>{setFormData({...formData, [e.target.id]: e.target.value})};


  if (currentUser) {
    return (
      <div className='px-4 py-12 max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4 text-slate-700'>
          Welcome {currentUser.username}
        </h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody> 
        </table>
      </div>
    )
  }
  return (    
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-700'>Welcome to my Auth App!</h1>
      <p className='mb-4 text-slate-700'>This is a full-stack web application built with the MERN (MonogDB, Express, React, NodeJs) stack. It includes authentication features that allow users to sign up, log in, and log out, and provides access to protected routes only for authenticated users.
      </p>
      <p className='mb-4 text-slate-700'>The front-end of the application is built with React and uses React Router for client side routing. The back end is built with NodeJs and Express, and uses MongoDB as the data base. Authentication is implemented using JSON WEB TOKENS(JWT)
      </p>
      <p className='mb-4 text-slate-700'>This application  is intended as a starting point for building full-stack web applications with authentication using MERN stack. Feel free to use it as a template for your own projects.
      </p>
    </div>
  )
}
