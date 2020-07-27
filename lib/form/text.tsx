import * as React from 'react';
import {useRef, useState} from 'react';

const test: React.FunctionComponent = () => {
  const [name, setName] = useState('Lisa')
  const refInput = useRef<HTMLInputElement>(null)
  const x = ()=>{
    console.log(refInput.current!.value)
  }

  return (
    <div>
        受控组件
        <input value={name} onChange={(e)=> setName(e.target.value)}/>

        非受控组件
        <input defaultValue={name} ref={refInput} type="text" onBlur={x} />

    </div>
  );
};

export default test;