import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import {Layout, Aside, Header, Content, Footer} from './lib/layout/layout';
import './example.scss';
import Icon from './lib/icon/icon';
import IconDemo from './lib/icon/icon.demo';
import LayoutDemo from './lib/layout/layout.demo';
import FormExample from './lib/form/form.example';



ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
         <Icon name="pandalogo"/>
          <span> Panda UI </span>
        </div>
      </Header>

      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局</NavLink>
            </li>
            <li>
              <NavLink to="/form">表单</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className='site-main'>
          <Route path="/icon" component={IconDemo}/>
          <Route path="/layout" component={LayoutDemo}/>
          <Route path="/form" component={FormExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; 熊猫UI
      </Footer>


    </Layout>
  </Router>
  , document.querySelector('#root'));