import * as React from 'react';
import {Fragment, useState} from 'react';
import Form, {FormValue} from './form';
import Button from '../button/button';

const FormDemo1: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });
  const [fields, setFields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);
  const clear = (e:any)=> {
    e.preventDefault()
    setFormData({'username':'', 'password':''})
  }
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

  const onSubmit = () => {}
  return (
    <Form value={formData} fields={fields}
          buttons={
            <Fragment>
              <Button type="submit" level="important">提交</Button>
              <Button onClick={clear}>重新填</Button>
            </Fragment>
          }
          showpassword={changeInputType}
          onChange={(newValue) => setFormData(newValue)}
          onSubmit={onSubmit}
    />
  );
};

export default FormDemo1;