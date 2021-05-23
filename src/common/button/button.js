import React from 'react';
import './button.scss'

const Button =(props)=>{
    const {title, color, disabled, padding, width} = props;

    return (
        <div className="button" style={{backgroundColor: color, padding:padding, width:width}}>
            <span className="close" onClick={props.toggle}>&#x2715;</span>
            <button type="button" className={`selected_btn ${disabled? 'disabled': ''}`}>
                {title}
            </button>            
        </div>
    )
}

export default Button;
