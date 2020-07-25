import * as React from 'react';
import {scopedClassMaker} from '../helper/classes'
import {ReactElement} from 'react';
import './layout.scss'

const sc = scopedClassMaker('pui-layout')
interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props:Props) => {
  const {className, ...rest} = props;

  return (
    <div className={sc({'': true}, {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;