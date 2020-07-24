import * as React from 'react';
import './importIcons'
import './style.scss'

interface IconProps {
  name: string,
  onClick: React.MouseEventHandler<SVGElement>
}
// 写成箭头函数方便设置类型
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
      <svg className='pui-icon' onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
  );
};

export default Icon;