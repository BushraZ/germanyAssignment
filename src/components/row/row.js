import React from 'react';
import Input from '../../common/input/input';
import './row.scss';

const Row = (props) => {
    const {columns} = props;   
    console.log(columns)
    return (
        <div className="row">
            {
                columns.items.map(item => (
                    <Input 
                       key={`${item.value}${item.name}`}
                       defaultValue = {item.defaultValue || ''}
                       value = {item.value || ''}
                       name = {item.name}
                       handleValue = {props.handleValue}
                       label= {item.label}
                    />
                ))
            }
            <span className="close" onClick={()=>props.removeRow(props.columns.id)}>&#x2715;</span>
        </div>
    )
}

export default Row;
