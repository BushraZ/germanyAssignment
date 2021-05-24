import React, {useState} from 'react';
import './input.scss';

const Input = (props) => {
    const {label, name, type, placeholder, defaultValue} = props;
    
    const [value, setValue] = useState(defaultValue);

    const handleChange = (event) => {
        const {name, value} = event.target;

        setValue(value);
        props.handleValue(name, value);
    }

    return (
        <div className="input">
            <div className="label">
              {label}
            </div>
            <input 
            //  type={type} 
              name={name} 
              placeholder={placeholder} 
             // defaultValue={defaultValue} 
              value={value || defaultValue}
              onChange={handleChange}
            />
        </div>
    )
}

export default Input;
