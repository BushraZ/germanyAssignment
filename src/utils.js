import _, { indexOf } from 'lodash';

export const fetchItem = (id, list) => {    
    return _.find(list, (element) => element.id === id);
};

export const removedItem = (id, list)=>{
  //console.log(id,list)
  return _.filter(list, (element)=> {
      return element.id !== id;
  });
}

export const fetchItemsGroup =(fields,list,value)=>{
  return _.filter(list, (element)=> {
    return element[fields] === value;
  });
}

export const findItemIndex = (id,list)=>{
  return _.findIndex(list, ele => ele.id === id);
}

export const disabledSelectedItem = (id,list) =>{
  console.log(id,list)
  const targetIndex = findItemIndex(id,list);
  let tempList = [...list];
  tempList[targetIndex].disabled=!tempList[targetIndex].disabled;

  return tempList;
}

