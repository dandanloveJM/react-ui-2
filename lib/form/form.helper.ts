
const changeInputType = (isShow: boolean, callback: (arg0: () => { name: string; label: string; input: { type: string; }; }[]) => void) => {
  if (isShow) {
    callback(() => [
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'text'}},
      ]
    );
  } else {
    callback(() => [
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
      ]
    );
  }
};

export {changeInputType}