import React, {Component} from 'react';
import {useState} from 'react';
import axios from 'axios'; 
import OAuth2Login from 'react-simple-oauth2-login';
// import { useNavigate } from "react-router-dom";

// let navigate = useNavigate(); 
class Login extends Component{
	constructor() {
		super();
		//--- Declare state variable for this component ---//
		this.state = {
			data     : [],
			editUser : {}
		}
	}


    render() {
        const API = this.state.data.username;
        return(
                <div className="card mt-4">
                  <div className="card-header">
                      <h4 className="card-title"> LOGIN </h4>
                      {/* <button type="button" className="btn btn-primary btn-sm pull-right" data-toggle="modal" data-target="#addModal"> Add User </button> */}
                  </div>
                  <div className="card-body">
                        <div className='m-5 text-center'>
                            <img src="./github.png" width="100" height="100" className="img-fluid rounded-circle" alt=""></img><br></br><br></br>
                            <button type="button" onClick={this.handleLogin} className="btn btn-primary">Login With Github</button>
                        </div>
                  </div>
              </div>
        )
    }
}
export default Login