import * as React from 'react';
import classes from '../helper/classes';
import {InputHTMLAttributes, useState} from 'react';
import './input.scss';
import Icon from '../icon/icon';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  showpassword: (isShow: boolean) => string,
  inputname?: string
}

const Input: React.FunctionComponent<Props> = (props) => {
  const {className, showpassword, ...rest} = props;
  const [isShow, setIsShow] = useState(true);

  function passwordToggle() {
    setIsShow(!isShow);
    showpassword && showpassword(isShow);
  }

  let inner
  if(props.inputname === '密码') {
    if(!isShow) {
      inner = <Icon name="view_off" onClick={passwordToggle}/>
    } else {
      inner = <Icon name="view" onClick={passwordToggle}/>
    }
  }

  return (
    <div className="input-icon-wrapper">
      <input className={classes('pui-input', className)} {...rest} />
      {inner}
    </div>

  );
};

export default Input;