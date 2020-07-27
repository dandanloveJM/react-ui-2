import React from 'react';
import {Fragment} from 'react';
import Demo from '../../demo';
import FormDemo1 from './form.demo.1';
import FormDemo2 from './form.demo.2';
import FormDemo3 from './form.demo.3';
import FormDemo4 from './form.demo.4';
import './form.scss';

const FormDemo: React.FunctionComponent = () => {
  return (
    <Fragment>
      <div>
        <Demo code={require('!!raw-loader!./form.demo.1.tsx').default}>
          <h1>普通使用</h1>
          <FormDemo1/>
        </Demo>
        <Demo code={require('!!raw-loader!./form.demo.2.tsx').default}>
          <h1>同步校验</h1>
          <FormDemo2/>
        </Demo>
        <Demo code={require('!!raw-loader!./form.demo.2.tsx').default}>
          <h1>异步校验</h1>
          <p>等待两秒，可以看到异步结果</p>
          <FormDemo3/>
        </Demo>
        <Demo code={require('!!raw-loader!./form.demo.2.tsx').default}>
          <h1>同步 + 异步校验</h1>
          <p>等待两秒，可以看到异步结果</p>
          <FormDemo4/>
        </Demo>
      </div>

    </Fragment>
  );
};

export default FormDemo;