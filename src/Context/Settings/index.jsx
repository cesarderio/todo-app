import React, { useEffect, useState } from 'react';

// export const TodoContext = React.createContext();
export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [ showComplete, setShowComplete ] = useState(false);
  const [ pageItems, setPageItems ] = useState(3);
  const [ sort, setSort ] = useState('difficulty');
  // const [itemsSet, setItems] = useState([{text: 'Clean', assignee: 'Raphael'}])

const saveLocally = () => {
  localStorage.setItem('todo', JSON.stringify({pageItems, sort,  showComplete}))
};

useEffect(() => {
  let storage = JSON.parse(localStorage.getItem('todo'));
  if(storage){
    console.log('storage', storage);
    setShowComplete(storage.showComplete);
    setPageItems(storage.pageItems);
    setSort(storage.sort);
  }
}, []);

  // const addItemss = (item) => {
    
  //   if(item && item.text && item.assignee){
  //     setItems([...itemsSet, item]);
  //   } else{
  //     console.log('Invalid Task! Add a title and assignee');
  //   }
  // }

  const values = {
    showComplete,
    pageItems,
    sort,
    setSort,
    setPageItems,
    setShowComplete,
    // itemsSet,
    // addItemss,
    saveLocally,
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )

};

export default SettingsProvider;
