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
          <div className="description">
            <p>用户可以直接使用两个输入框，按钮提供”提交“和”重新填写“两个功能</p>
            <p>使用本组件时，使用者需要自定义五个参数：formData表单数据，fields需要哪些字段, Buttons需要哪些按钮，
              onSubmit函数和onChange函数</p>
          </div>

          <FormDemo1/>
        </Demo>
        <Demo code={require('!!raw-loader!./form.demo.2.tsx').default}>
          <h1>同步校验</h1>
          <div className="description">
            <p>支持用户自定义规则， 需要在<strong>rules</strong>里增加规则</p>
            <p>目前支持的规则有：用户名和密码必填；用户名的长度必须在6~16之间；用户名必须是字母和数字构成；密码的长度必须在6~16之间</p>
          </div>
          <FormDemo2/>
        </Demo>
        <Demo code={require('!!raw-loader!./form.demo.3.tsx').default}>
          <h1>异步校验</h1>
          <div className="description">
            <p>使用<strong>Promise</strong>实现异步校验，可以同时检测到<strong>多个异步</strong>的错误。
         点击“check“按钮，两秒钟之后会返回验证结果</p>
            <p>测试用例支持两条规则：检测用户名是否存在，检测密码和用户名是否匹配</p>
            <p>支持用户自定义异步校验，由于目前没有后端，我们用setTimeout模拟请求延时，只需将setTimeout部分换成AJAX请求部分即可</p>
            <p>用户自定义异步校验规则时只需要写校验的异步函数，然后放进rules里即可</p>
          </div>

          <FormDemo3/>
        </Demo>
        <Demo code={require('!!raw-loader!./form.demo.4.tsx').default}>
          <h1>同步 + 异步校验</h1>
          <div className="description">
            <p>支持同时进行同步和异步校验，在两秒钟后统一返回验证结果</p>
            <p>用户自定义规则时只需要把规则写进rules即可</p>
          </div>

          <FormDemo4/>
        </Demo>
      </div>

    </Fragment>
  );
};

export default FormDemo;