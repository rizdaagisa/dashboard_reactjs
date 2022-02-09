import React, {Component, useState, useEffect, useContext} from 'react';
import axios from 'axios'; 
import OAuth2Login from 'react-simple-oauth2-login';
// import { useNavigate } from "react-router-dom";

// let navigate = useNavigate(); 
import { Navigate  } from "react-router-dom";
// import Styled from "styled-components";
// import GithubIcon from "mdi-react/GithubIcon";
import { AuthContext } from "../../App";


function Login() {
  const { state, dispatch } = useContext(AuthContext);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });
  const { client_id, redirect_uri } = state;

  
  // console.log(data);
  // for (var i = 0; i < localStorage.length; i++){
  //   console.log(localStorage.getItem(localStorage.key(i)));
  // }
  // let users = localStorage.getItem("isLoggedIn");
  // const obj = JSON.parse(users);
  // console.log(users);
  useEffect(() => {
    
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");
    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      
      // alert(newUrl[1]);
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const requestData = {
        code: newUrl[1]
      };

      const proxy_url = state.proxy_url;

      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData)
      })
      .then(response => response.text())
      .then(data => {
        dispatch({
          type: "LOGIN",
          payload: { user: data, isLoggedIn: true, code : newUrl[1] }
        });
      })
      .catch(error => {
        alert("Sorry! Login failed");
        setData({
          isLoading: false,
          errorMessage: "Sorry! Login failed"
        });
      });
    }
  }, [state, dispatch, data]);

  if (state.isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

    return(
                <div className="card mt-4">
                  <div className="card-header">
                      <h4 className="card-title"> LOGIN </h4>
                      {/* <button type="button" className="btn btn-primary btn-sm pull-right" data-toggle="modal" data-target="#addModal"> Add User </button> */}
                  </div>
                  <div className="card-body">
                        <div className='m-5 text-center'>
                            <img src="./github.png" width="100" height="100" className="img-fluid rounded-circle" alt=""></img><br></br><br></br>
                            <a  className="btn btn-primary"
                                href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                                onClick={() => {
                                    setData({ ...data, errorMessage: "" });
                                }}
                            >Login With Github</a>
                        </div>
                  </div>
              </div>
    );
}
export default Login