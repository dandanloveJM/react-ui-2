import {FormValue} from './form';

interface FormRule {
  key: string,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  pattern?: RegExp,
  validator1?: (value: string) => Promise<string>
  validator2?: (value: string, username: string) => Promise<string>
}

type FormRules = Array<FormRule>


function flat(array: Array<any>) {
  return array.reduce((result, item) => {
    if (item instanceof Array) {
      result.push(...item);
    } else {
      result.push(item);
    }
    return result;
  }, []);

}


function isEmpty(value: any) {
  return value === undefined || value === null || value === '';
}

export function noError(errors: any) {
  return Object.keys(errors).length === 0;
}

type OneError = string | Promise<string>;

const Validator = (formValue: FormValue, rules: FormRules, callback: (errors: any) => void) => {
  let errors: { [key: string]: OneError[] } = {};
  const addError = (key: string, error: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(error);
  };

  rules.map(rule => {
    const value = formValue[rule.key];
    const username = formValue['username']
    if (rule.validator1) {
      const promise = rule.validator1(value);
      addError(rule.key, promise);
    }

    if(rule.validator2) {
      const promise = rule.validator2(value, username)
      addError(rule.key, promise)
    }

    if (rule.required && isEmpty(value)) {
      addError(rule.key, '这项必填噢！');
    }
    if (rule.minLength && !isEmpty(value) && value!.length < rule.minLength) {
      addError(rule.key, '填写太短啦~');
    }
    if (rule.maxLength && !isEmpty(value) && value!.length > rule.maxLength) {
      addError(rule.key, '填写太长啦~');
    }
    if (rule.pattern) {
      if (!(rule.pattern.test(value))) {
        addError(rule.key, '格式不正确，只能是数字和字母~');
      }
    }

  });
  //Object.keys(errors)   ['username', 'password']
  const errorArray = Object.keys(errors).map(key => {
    // errors['username'] = ["太短", Promise, Promise, "格式不正确"]
    return errors[key].map(promise => [key, promise]);
  });
  console.log(errorArray);

  const flattenErrors = flat(errorArray);
  console.log(flattenErrors);

  // @ts-ignore
  const newPromises = flattenErrors.map(([key, promiseOrString]) => (
    promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString))
    .then(() => [key, undefined], (reason) => [key, reason]));
  console.log(newPromises);

  Promise.all(newPromises).then(results => {
    // @ts-ignore
    callback(zip(results.filter(item => item[1])));
  });

  function zip(kvList: unknown[]) {

    const result = {};
    kvList.map(([key, value]) => {
      // @ts-ignore
      result[key] = result[key] || [];
      // @ts-ignore
      result[key].push(value);
    });

    return result
  }
}
  export default Validator;



