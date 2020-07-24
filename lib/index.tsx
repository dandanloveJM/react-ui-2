import React from 'react';
import Icon from './icon';
import * as ReactDOM from "react-dom";
const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};


ReactDOM.render(<div>
  <Icon name="wechat" onClick={fn} />
  </div>

  , document.querySelector('#root'))


export {Icon};