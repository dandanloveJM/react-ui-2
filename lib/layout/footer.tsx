import * as React from 'react';
import {scopedClassMaker} from '../helper/classes'

const sc = scopedClassMaker('pui-layout')
interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Footer: React.FunctionComponent<Props> = (props:Props) => {
  return (
    <div className={sc('footer')}>Footer</div>
  );
};

export default Footer;