import * as React from 'react';
import {useState, Fragment} from 'react';
import Form, {FormValue} from './form';
import Button from '../button/button';
import './form.scss'
import '../button/button.scss'


const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: 'frank',
    password: ''
  });

  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);


  const onSubmit = (e: any) => {
    console.log(formData);
    console.log(e);
  };
  return (
    <Form value={formData} fields={fields}
          buttons={
            <Fragment>
              <Button type="submit" level="important">提交</Button>
              <Button>返回</Button>
            </Fragment>
          }
          onChange={(newValue) => setFormData(newValue)}
          onSubmit={onSubmit}

    />
  );
};

export default FormExample;