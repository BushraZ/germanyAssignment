import React,{useState} from 'react';
import './dropDown.scss';

const DropDown = (props) => {
    const {options}=props;
    const [open, setOpen] =useState(false);    

    const handleAddToSelectedChannel= id =>{
        console.log(id);
        props.added(id);
        setOpen(false);        
    }

    return (
        <div className="dropDown">
            <button type="button" className="dropDown_btn" onClick={()=>setOpen(!open)}>+</button>
            {
                open && <div className="dropDown_item open">
                {
                    options.map(element=>(
                        <div key={element.id} className="dropDown_item_element" onClick={()=>handleAddToSelectedChannel(element.id)}>{element.title}</div>
                    ))
                }
            </div>
            }
           
        </div>
    )
}

export default DropDown;
