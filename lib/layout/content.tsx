import * as React from 'react';
import {scopedClassMaker} from '../helper/classes'

const sc = scopedClassMaker('pui-layout')
interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Content: React.FunctionComponent<Props> = (props:Props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('content', {extra: className})} {...rest}>content</div>
  );
};

export default Content;