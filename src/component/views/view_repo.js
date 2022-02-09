import React from 'react';
import { GithubFilled,EditFilled,FolderOpenFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";

const {Footer, Header, Sider, Content } = Layout;
function view_repo (){
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
            <button className='btn btn-danger logout' style={{float:'right', marginRight:0, marginTop:'-70px', backgroundColor:'red', color:'white'}} name='logout'>Logout</button>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    Content
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
    )
}
 
export default view_repo;