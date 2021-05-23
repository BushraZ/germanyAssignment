import React,{useState} from 'react';
import Row from '../row/row';
import PlusButton from "../plusButton/plusButton";
import {removedItem} from '../../utils';
import  './table.scss';

const Table = () => {
    const rows = [ 
        {   id:0,
            items :[
              {label:'id',value:'01',defaultValue:'01',type:'number'},
              {label:'start',value:'10:00',defaultValue:'10:00',type:'time'},
              {label:'end',value:'10:06',defaultValue:"10:06",type:'time'},
              {label:'min start',value:'10%',defaultValue:'10%',type:'percentage'},
              {label:'min end', value:'90%',defaultValue:'90%',type:'percentage'}
            ]
        },
        {   id:1,
            items :[
              {label:'id',value:'02',defaultValue:'02',type:'number'},
              {label:'start',value:'10:12',defaultValue:'10:12',type:'time'},
              {label:'end',value:'10:18',defaultValue:"10:18",type:'time'},
              {label:'min start',value:'10%',defaultValue:'10%',type:'percentage'},
              {label:'min end', value:'90%',defaultValue:'90%',type:'percentage'}
            ]
        },
        {   id:2,
            items :[
              {label:'id',value:'03',defaultValue:'03',type:'number'},
              {label:'start',value:'10:20',defaultValue:'10:20',type:'time'},
              {label:'end',value:'10:26',defaultValue:"10:26",type:'time'},
              {label:'min start',value:'10%',defaultValue:'10%',type:'percentage'},
              {label:'min end', value:'90%',defaultValue:'90%',type:'percentage'}
            ]
        },
        {   id:3,
            items :[
              {label:'id',value:'04',defaultValue:'04',type:'number'},
              {label:'start',value:'10:29',defaultValue:'10:29',type:'time'},
              {label:'end',value:'10:35',defaultValue:"10:35",type:'time'},
              {label:'min start',value:'10%',defaultValue:'10%',type:'percentage'},
              {label:'min end', value:'90%',defaultValue:'90%',type:'percentage'}
            ]
        },
        {   id:4,
            items :[
              {label:'id',value:'05',defaultValue:'05',type:'number'},
              {label:'start',value:'10:37',defaultValue:'10:37',type:'time'},
              {label:'end',value:'10:43',defaultValue:"10:43",type:'time'},
              {label:'min start',value:'10%',defaultValue:'10%',type:'percentage'},
              {label:'min end', value:'90%',defaultValue:'90%',type:'percentage'}
            ]
        },
        {   id:5,
            items :[
              {label:'id',value:'06',defaultValue:'06',type:'number'},
              {label:'start',value:'10:47',defaultValue:'10:47',type:'time'},
              {label:'end',value:'10:45',defaultValue:"10:45",type:'time'},
              {label:'min start',value:'10%',defaultValue:'10%',type:'percentage'},
              {label:'min end', value:'90%',defaultValue:'90%',type:'percentage'}
            ]
        }
    ];

   const [tableRows, setRows] = useState(rows);
   
    const addRow =()=>{
      const id = tableRows.length;
      const array =[...tableRows];
      array.push(
          {   id:id,
              items :[
                {label:'id',value:`${id+1<10?'0':''}${id+1}`,defaultValue:`${id+1<10?'0':''}${id+1}`,type:'number'},
                {label:'start',value:'00:00',defaultValue:'00:00',type:'time'},
                {label:'end',value:'00:00',defaultValue:"00:00",type:'time'},
                {label:'min start',value:'10%',defaultValue:'10%',type:'percentage'},
                {label:'min end', value:'90%',defaultValue:'90%',type:'percentage'}
              ]
          });
      
      setRows(array);
    }

    const removeRow = (id)=>{
      const temp = removedItem(id,tableRows);
      setRows(temp);
    }

    return (
       <div className="table">
          {
            tableRows.map((element) => (       
              <Row key={element.id} columns={element} removeRow={removeRow} />
            ))
          }
          <PlusButton addRow ={addRow} />  
       </div>
    )
}

export default Table;
