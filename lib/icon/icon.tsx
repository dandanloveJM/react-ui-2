import * as React from 'react';
import './importIcons'
import '../style.scss'
import classes from '../helper/classes'

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string,
}
// 写成箭头函数方便设置类型
const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className, name, ...restProps} = props;
  return (
      <svg className={classes('pui-icon', className)}
           {...restProps}  >
        <use xlinkHref={`#${name}`}/>
      </svg>
  );
};

export default Icon;