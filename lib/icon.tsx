import * as React from 'react';
import './importIcons'
import './style.scss'

interface IconProps {
  name: string
}
// 写成箭头函数方便设置类型
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
      <svg className='pui-icon'>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
  );
};

export default Icon;