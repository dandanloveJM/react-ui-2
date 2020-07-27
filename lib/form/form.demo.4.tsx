import * as React from 'react';
import {Fragment, useState} from 'react';
import Form, {FormValue} from './form';
import Validator from './validator';
import Button from '../button/button';

const usernames = ['lisa', 'maria', 'frank', 'alice', 'bob'];
const checkUserName = (username: string, succeed: () => void, fail: () => void) => {
  setTimeout(() => {
    if (usernames.indexOf(username) >= 0) {
      fail();
    } else {
      succeed();
    }
  }, 3000);
};

interface sampleData {
  [index: string]:string
}
const data:sampleData = {'lisa': 'lisa123', 'maria': 'maria123'};

const checkPassword = (password: string, username: string, succeed: () => void, fail: () => void) => {
  setTimeout(() => {
    if (data[username] !== password) {
      fail();
    } else {
      succeed();
    }
  }, 3000);
};



const FormDemo4: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: 'lisa',
    password: ''
  });

  const [fields, setFields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);

  const [errors, setErrors] = useState({});
  const validator1 = (username: string) => {
    return new Promise<string>((resolve, reject) => {
      checkUserName(username, resolve, () => reject('用户名已存在'));
    });
  };

  const validator2 = (password: string, username: string) => {
    return new Promise<string>((resolve, reject) => {
      checkPassword(password, username, resolve, () => reject('密码输入错误'));
    });
  };

  const [isLoading, setIsLoading] = useState('')
  const onSubmit = () => {
    setIsLoading('loading')
    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 2, maxLength: 16},
      {key: 'username', validator1},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {key: 'password', required: true},
      {key: 'password', validator2},
    ];

    Validator(formData, rules, (errors) => {
      setErrors(errors);
      setIsLoading('')
    });


  };



  const changeInputType = (isShow: boolean) => {
    if (isShow) {
      setFields(() => [
          {name: 'username', label: '用户名', input: {type: 'text'}},
          {name: 'password', label: '密码', input: {type: 'text'}},
        ]
      );
    } else {
      setFields(() => [
          {name: 'username', label: '用户名', input: {type: 'text'}},
          {name: 'password', label: '密码', input: {type: 'password'}},
        ]
      );
    }
    return 'true';
  };

  return (
    <Form value={formData} fields={fields}
          buttons={
            <Fragment>
              <Button type="submit" level="important" loading={isLoading}>check</Button>
            </Fragment>
          }
          errors={errors}
          showpassword={changeInputType}
          onChange={(newValue) => setFormData(newValue)}
          onSubmit={onSubmit}
    />
  );
};

export default FormDemo4;