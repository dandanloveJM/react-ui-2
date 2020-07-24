import * as React from 'react';
import './importIcons'

interface IconProps {
  name: string
}
// 写成箭头函数方便设置类型
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
       <svg>
        <use xlinkHref='#panda'/>
      </svg>
    </span>
  );
};

export default Icon;