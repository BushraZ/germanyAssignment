import React from 'react';
import './plusButton.scss';

const PlusButton = (props) => {

    const addToTable = ()=>{
        props.addRow();
    }

    return (
        <div className="plus">
            <button className="plus_button" type="button" onClick={addToTable}>+</button>            
        </div>
    )
}

export default PlusButton;
