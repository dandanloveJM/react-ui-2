import * as React from 'react';
import {Fragment} from 'react'
import Demo from '../../demo';
import LayoutExample1 from './layout.example.1';
import LayoutExample2 from './layout.example.2';
import LayoutExample3 from './layout.example.3';
import LayoutExample4 from './layout.example.4';
import './layout.example.scss'


const LayoutDemo: React.FunctionComponent = () => {
  return (
    <Fragment >
      <div className="example">
        <Demo code={require('!!raw-loader!./layout.example.1.tsx').default}>
          <h1>第一个例子</h1>
          <LayoutExample1/>
        </Demo>
        <Demo code={require('!!raw-loader!./layout.example.2.tsx').default}>
          <h1>第二个例子</h1>
          <LayoutExample2/>
        </Demo>
        <Demo code={require('!!raw-loader!./layout.example.3.tsx').default}>
          <h1>第三个例子</h1>
          <LayoutExample3/>
        </Demo>
        <Demo code={require('!!raw-loader!./layout.example.4.tsx').default}>
          <h1>第四个例子</h1>
          <LayoutExample4/>
        </Demo>
      </div>

    </Fragment>
  );
};

export default LayoutDemo;