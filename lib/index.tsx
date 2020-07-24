import React from 'react';
import Icon from './Icon/icon';
import * as ReactDOM from 'react-dom';


const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};


ReactDOM.render(<div>
    <Icon name="wechat"
          onClick={fn}
          onMouseEnter={()=>{console.log('enter')}}
          onMouseLeave={()=>{console.log('leave')}}
    />
  </div>, document.querySelector('#root'));


export {Icon};