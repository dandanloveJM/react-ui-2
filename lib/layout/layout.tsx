import * as React from 'react';
import {scopedClassMaker} from '../helper/classes';
import {ReactElement} from 'react';
import './layout.scss';
import Aside from './aside';

const sc = scopedClassMaker('pui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {
  const {className, ...rest} = props;
  const children = props.children as Array<ReactElement>;

  const hasAside = length in children && (children).reduce((result, node) => {
    return result || node.type === Aside;
  }, false);


  return (
    <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export {Layout};
export {default as Header} from './header';
export {default as Content} from './content';
export {default as Footer} from './footer';
export {default as Aside} from './aside';