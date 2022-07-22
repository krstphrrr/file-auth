import React, { useEffect, useState } from "react";
import './App.css';
import { useAuth0 } from "@auth0/auth0-react"
import Button from '@mui/material/Button';
import LoginButton from './auth/login';
import LogoutButton from './auth/logout';
import axios from "axios";


function App() {

  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
 
  async function getProtectedRoute(){
    try{
      const token = await getAccessTokenSilently()
      const response = await axios.put('http://localhost:5001/api/download-data',{
        data: {
          "primaryKeys": ["17101012114127892017-09-01"]
        }
      }, {
        headers:{
          authorization: `Bearer ${token}`
        }
      })
      console.log(response.data)
    } catch(error){
      console.log(error.message)
    }
    
  }

  if (isAuthenticated){
    return (<div className="App">
            <h1>User logged in </h1>
            <Button variant="text" onClick={getProtectedRoute}>
              Fetch
            </Button>
            <LogoutButton></LogoutButton>

            </div>)
  }
  return (
  <div className='App'>
    <h1>User logged out</h1>
    <LoginButton></LoginButton>
  </div>
    

  )
}

export default App;
