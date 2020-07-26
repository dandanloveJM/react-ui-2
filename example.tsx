import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import LayoutExample from './lib/layout/layout.example';
import './lib/layout/layout.example.scss'


ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">
          PandaUI
        </div>

      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/Icon">Icon</Link>
            </li>
            <li>
              <Link to="/Layout">布局</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/Icon" component={IconExample}/>
          <Route path="/Layout" component={LayoutExample}/>
        </main>
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));