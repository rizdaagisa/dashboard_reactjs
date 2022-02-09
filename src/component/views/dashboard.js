import React,{ useContext } from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import App from '../../App';
import { AuthContext } from "../../App";
import { Navigate } from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import { GithubFilled,EditFilled,FolderOpenFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

// import Dashboard from './component/views/dashboard.js';
import Profiles from './profiles.js';
// import Add_repo from '../add_repo.js';
// import View_repo from '../view_repo.js';



const {Footer, Header, Sider, Content } = Layout;



function Dashboard(){
    const { state, dispatch } = useContext(AuthContext);
    
    const handleLogout = () => {
        dispatch({
        type: "LOGOUT"
        });
    }
    
    if (!state.isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        
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
                    <Profiles/>
                    {/* <Routes>
                        <Route path="/dashboard/" element={<Profiles/>} />
                        <Route path="/dashboard/profile" element={<Profiles/>} />
                        <Route path="/dashboard/add_repo" element={<Add_repo/>} />
                        <Route path="/dashboard/view_repo" element={<View_repo/>} />
                    </Routes> */}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </Layout>
      </div>
    );
}
 
export default Dashboard;

// ReactDOM.render(<SiderDemo />,document.getElementById('root'));
