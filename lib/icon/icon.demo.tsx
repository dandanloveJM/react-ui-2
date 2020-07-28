import IconExample from './icon.example';
import React from 'react';
import Demo from '../../demo';

const IconDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
      <div className="icon-demo">
        <h1>支持一键引入各种svg图标</h1>
        <IconExample/>
      </div>

    </Demo>
  );
};

export default IconDemo;