import * as React from 'react';
import {ReactFragment} from 'react';
import Input from '../input/input';
import classes from '../helper/classes';

export interface FormValue {
  [K: string]: any
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors?: { [K: string]: string[] }
  errorsDisplayMode?: 'first' | 'all';
  showpassword: (isShow: boolean) => string
}


const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  const onInputChange = (name: string, value: string) => {
    const newFormValue = {...formData, [name]: value};
    props.onChange(newFormValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <table className="pui-form-table">
        <tbody>
        {props.fields.map(f =>

          <tr key={f.name} className={classes('pui-form-tr')}>
            <td className="pui-form-td">
              <span className="pui-form-label">{f.label}</span>
            </td>
            <td className="pui-form-td">
              <Input className="pui-form-input"
                     type={f.input.type}
                     value={formData[f.name]}
                     inputname={f.label}
                     showpassword={(isShowPassword: boolean) =>{
                        props.showpassword(isShowPassword)
                       return 'xxx'
                     }

                     }
                     onChange={(e) => onInputChange(f.name, e.target.value)}
              />
              <div className="pui-form-error">
                {
                  props.errors &&
                  props.errors[f.name] ?
                    (props.errorsDisplayMode === 'first' ?
                      props.errors[f.name][0] : props.errors[f.name].join())
                    : <span>&nbsp;</span>
                }
              </div>
            </td>
          </tr>
        )}

        <tr className="pui-form-tr">
          <td className="pui-form-td"/>
          <td className="pui-form-td pui-form-button-td">
            {props.buttons}
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  );
};

Form.defaultProps = {
  errorsDisplayMode: 'first'
};

export default Form;