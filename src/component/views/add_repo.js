import React,{ useContext } from 'react';
import { GithubFilled,EditFilled,FolderOpenFilled } from '@ant-design/icons';
import {Input, Layout, Menu } from 'antd';
import {Link} from "react-router-dom";
import { Button } from 'bootstrap';
import { AuthContext } from "../../App";
import { Navigate } from "react-router-dom";

const {Footer, Header, Sider, Content } = Layout;
function Add_repo (){
    const { state, dispatch } = useContext(AuthContext);

    const handleSubmit = () => {
        // e.preventDefault();
        const urls = window.location.href;
        var url = new URL(urls);
        var nama = url.searchParams.get("nama");
        alert(nama);
        const requestData = {
            code: JSON.parse(localStorage.getItem('code')),
            name: nama,
        };
        console.log(requestData);
        // alert(state.code);
        fetch("http://localhost:5000/create", {
            method: "POST",
            body: JSON.stringify(requestData)
        })
        .then(response => response.text())
        .then(data => {
            // alert(data);
            console.log(data);
        })
    }

    const handleLogout = () => {
        dispatch({
        type: "LOGOUT"
        });
    }
    if (!state.isLoggedIn) {
        return <Navigate to="/" />;
    }
    return(
        <div className='app' style={{margin:0}}>
        <Layout>
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            >

        <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                    <GithubFilled style={{fontSize:'20px'}}/> <Link to="/dashboard/profile" className="nav-textt menus">Profile</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <EditFilled style={{fontSize:'20px'}}/> <Link to="/dashboard/add_repo" className="nav-textt menus">Add Repository</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <FolderOpenFilled style={{fontSize:'20px'}}/> <Link to="/dashboard/view_repo" className="nav-textt">My Repository</Link>
                </Menu.Item>
                {/* <Menu.Item key="4">
                    <FolderOpenFilled style={{fontSize:'20px'}}/> <Link to="/dashboard/extra" className="nav-textt">nav 4</Link>
                </Menu.Item> */}
            </Menu>
        </Sider>
        <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
            <button onClick={()=> handleLogout()} className='btn btn-danger logout' style={{float:'right', marginRight:0, marginTop:'-70px', backgroundColor:'red', color:'white'}} name='logout'>Logout</button>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <h2>Add Repository</h2>
                    <form method=''>
                        <div className='container text-center'>
                            <br></br>
                            {/* <input name="code" value={state.code} type="text"></input> */}
                            <Input className='nama' placeholder="Nama Repository" name='nama'></Input><br></br><br></br>
                            <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </Layout>
      </div>
    )
}
 
export default Add_repo;