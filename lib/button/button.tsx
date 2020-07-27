import * as React from 'react';
import {ButtonHTMLAttributes} from 'react';
import classes from '../helper/classes';
import './button.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'important' | 'normal'
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {className, children, level, ...rest} = props;
  return (
    <button className={classes('pui-button', `pui-button-${level}`, className)} {...rest}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  level: 'normal'
};

export default Button;
