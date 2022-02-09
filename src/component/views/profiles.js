import React, { useState,useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../../App";

function Profiles (){
    const { state, dispatch } = useContext(AuthContext);
    const obj = JSON.parse(state.user);
    
    // const [fetchCount, setFetchCount] = useState(1);
    // const [data, setCurrentFetch] = useState({
    //     userId: '',
    //     id: '',
    //     title: '',
    //     completed: ''
    // });

    const [data, setPost] = React.useState({
            userId: '',
            id: '',
            title: '',
            completed: ''
    });

    // const fetchAPI = async() => {
    //     axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //     .then((response) => {
    //         console.log(response.data);
    //         const fetch = response.data;
    //         setCurrentFetch({...data, ...fetch});
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };
    // console.log(obj);
    return(
        <div className='profile text-center'>
            <h3>Profile User</h3>
            <img src={obj.avatar_url} width="100" height="100" className="text-center img-fluid rounded-circle" alt=""></img>
            {/* <button onClick={fetchAPI}>Fetch</button> */}
            <div className="container text-center">
                <img src={data.userId}></img>
                <h5><strong>id :</strong>{obj.id}</h5>
                <h5><strong>Nama :</strong>{obj.login}</h5>
                <h5><strong>Public Repository :</strong>{obj.public_repos}</h5>
                <h5><strong>URL :</strong> <a href={obj.html_url}>{obj.html_url}</a></h5>
            </div>
        </div>
    )
}
 
export default Profiles;