import React, {Component, createContext, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios'; 

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Dashboard from './component/views/dashboard.js';
import Login from './component/views/login.js';
import Header from './component/views/Header';
import Profiles from './component/views/profiles.js';
import Add_repo from './component/views/add_repo.js';
import View_repo from './component/views/view_repo.js';

import { initialState, reducer } from "./store/reducer";

export const AuthContext = createContext();

function App() {
      const [state, dispatch] = useReducer(reducer, initialState);
        // console.log(state);
        return(
          <AuthContext.Provider value={{state,dispatch}}>
              {/* <Header/> */}
              <Routes>
                <Route path='/' element={<Login/>}/>
                <Route exact path='/dashboard' element={<Dashboard/>}/>
                <Route path="/dashboard/profile" element={<Dashboard/>} />
                <Route path="/dashboard/add_repo" element={<Add_repo/>} />
                <Route path="/dashboard/view_repo" element={<View_repo/>} />
              </Routes>
          </AuthContext.Provider>
        );
}
// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Login/>} />

//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/dashboard/profile" element={<Dashboard/>} />
//         <Route path="/dashboard/add_repo" element={<Add_repo/>} />
//         <Route path="/dashboard/view_repo" element={<View_repo/>} />

//       </Routes>
      
//     </div>
//   );
// }

export default App;
