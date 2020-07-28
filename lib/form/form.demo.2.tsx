import * as React from 'react';
import {Fragment, useState} from 'react';
import Form, {FormValue} from './form';
import Validator from './validator';
import Button from '../button/button';

const FormDemo2: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: 'lisa',
    password: ''
  });

  const [fields, setFields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);
  const [errors, setErrors] = useState({});
  const onSubmit = () => {

    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 2, maxLength: 16},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {key: 'password', required: true},
      {key: 'password', minLength: 8, maxLength: 20},
    ];


    Validator(formData, rules, (errors) => {
      setErrors(errors);
    });


  };
  const clear = (e:any)=> {
    e.preventDefault()
    setFormData({'username':'', 'password':''})
    setErrors({})
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

  return (
    <Form value={formData} fields={fields}
          buttons={
            <Fragment>
              <Button type="submit" level="important" >提交</Button>
              <Button onClick={clear}>重新填</Button>
            </Fragment>
          }
          errors={errors}
          showpassword={changeInputType}
          onChange={(newValue) => setFormData(newValue)}
          onSubmit={onSubmit}
    />
  );
};

export default FormDemo2;