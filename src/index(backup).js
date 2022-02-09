import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import './component/profiles.js';
// import './component/add_repo.js';
// import './component/view_repo.js';

// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import profiles from './component/profiles.js';
// import add_repo from './component/add_repo.js';
// import view_repo from './component/view_repo.js';

// import Icon from '@ant-design/icons';
// import Icon  from '@ant-design/icons';
// import { Icon } from '@ant-design/compatible';
// import { SmileOutlined as Icon } from '@ant-design/icons';
import { GithubFilled,EditFilled,FolderOpenFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const {Footer, Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  render() {
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
          <GithubFilled />
          <span to="/profile" className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <EditFilled />
          <span to="/add_repo" className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <FolderOpenFilled />
          <span to="/view_repo" className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <FolderOpenFilled />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
      <button className='btn btn-danger logout' style={{float:'right', marginRight:0, marginTop:'-70px', backgroundColor:'red', color:'white'}} name='logout'>Logout</button>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
      </div>
    );
  }
}

ReactDOM.render(<SiderDemo />,document.getElementById('root'));
