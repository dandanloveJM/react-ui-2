import * as React from 'react';
import {ButtonHTMLAttributes} from 'react';
import classes from '../helper/classes';
import './button.scss'
import Icon from '../icon/icon';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'important' | 'normal',
  loading?: string
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {className, children, level, loading, ...rest} = props;
  return (
    <button className={classes('pui-button', `pui-button-${level}`, `pui-button-${loading}`,  className)} {...rest}>
      {loading === 'loading' ? <Icon className="button-loading-icon" name="loading"/> : ''}
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  level: 'normal'
};

export default Button;
