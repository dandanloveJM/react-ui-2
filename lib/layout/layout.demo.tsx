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
          <h1>上中下布局</h1>
          <LayoutExample1/>
        </Demo>
        <Demo code={require('!!raw-loader!./layout.example.2.tsx').default}>
          <h1>侧边栏做左边的双栏布局</h1>
          <LayoutExample2/>
        </Demo>
        <Demo code={require('!!raw-loader!./layout.example.3.tsx').default}>
          <h1>侧边栏在右边的双栏布局</h1>
          <LayoutExample3/>
        </Demo>
        <Demo code={require('!!raw-loader!./layout.example.4.tsx').default}>
          <h1>侧边栏单独一列的布局</h1>
          <LayoutExample4/>
        </Demo>
      </div>

    </Fragment>
  );
};

export default LayoutDemo;