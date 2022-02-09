import logo from './logo.svg';
import './App.css';
// import './index.css';
import { Link, Route,Routes } from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// import Dashboard from './component/views/dashboard.js';
// import Login from './component/views/login.js';
import Profiles from './component/profiles.js';
import Add_repo from './component/add_repo.js';
import View_repo from './component/view_repo.js';

import { GithubFilled,EditFilled,FolderOpenFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const {Footer, Header, Sider, Content } = Layout;

function App() {
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
                    <GithubFilled /><Link to="/profile" className="nav-text">nav 1</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <EditFilled /><Link to="/add_repo" className="nav-text">nav 2</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <FolderOpenFilled /><Link to="/view_repo" className="nav-text">nav 3</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <FolderOpenFilled /><Link to="/extra" className="nav-text">nav 4</Link>
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
            <button className='btn btn-danger logout' style={{float:'right', marginRight:0, marginTop:'-70px', backgroundColor:'red', color:'white'}} name='logout'>Logout</button>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    {/* Content */}
                    <Routes>
                        <Route path="/" element={<Profiles/>} />
                        <Route path="/profile" element={<Profiles/>} />
                        <Route path="/add_repo" element={<Add_repo/>} />
                        <Route path="/view_repo" element={<View_repo/>} />
                    </Routes>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </Layout>
      </div>
  );
}

export default App;
