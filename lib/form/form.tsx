import * as React from 'react';
import {ReactFragment} from 'react';
import Input from '../input/input';

export interface FormValue {
  [K: string]: any
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
}


const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('form submit')
    props.onSubmit(e);
  };

  const onInputChange = (name: string, value: string) => {
    const newFormValue = {...formData, [name]: value};
    props.onChange(newFormValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <table>
        <tbody>
        {props.fields.map(f =>

          <tr key={f.name}>
            <td className="pui-form-td">
              <span className="pui-form-label">{f.label}</span>
            </td>
            <td className="pui-form-td">
              <Input className="pui-form-input"
                     type={f.input.type}
                     value={formData[f.name]}
                     onChange={(e) => onInputChange(f.name, e.target.value)}
              />
            </td>
          </tr>
        )}

        <tr className="pui-form-tr">
          <td className="pui-form-td"/>
          <td className="pui-form-td">
            {props.buttons}
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;