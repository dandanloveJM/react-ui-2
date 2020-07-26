import * as React from 'react';
import {scopedClassMaker} from '../helper/classes';
const sc = scopedClassMaker('pui-layout')
interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Aside: React.FunctionComponent<Props> = (props:Props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('aside', {extra: className})} {...rest}>aside</div>
  );
};

export default Aside;