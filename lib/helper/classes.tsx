function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export default classes;

interface Options {
  extra: string | undefined
}

interface ClassToggles {
  [K: string]: boolean
}

function scopedClassMaker(prefix: string) {
  return function (name: string | ClassToggles, options?: Options) {
    const namesObject = (name instanceof Object) ? name : {[name]: name};
    return Object
      .entries(namesObject) // 拿到[key, value]数组
      .filter(kv => kv[1] !== false) // 用value来过滤掉false的值
      .map(kv => kv[0]) // 只需要留下第一个值
      .map(name => [prefix, name] // 和前缀组成数组
        .filter(Boolean)
        .join('-')) // 用-连接拼起来
      .concat(options && options.extra || [])
      .join(' ');
  };

}

export {scopedClassMaker};