import React, { useState } from 'react';

// export const TodoContext = React.createContext();
export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [ showComplete, setShowComplete ] = useState(false);
  const [ pageItems, setPageItems ] = useState(3);
  const [ sort, setSort ] = useState('difficulty');
  const [itemsSet, setItems] = useState([{text: 'Clean', assignee: 'Raphael'}])

  const addItemss = (item) => {
    
    if(item && item.text && item.assignee){
      setItems([...itemsSet, item]);
    } else{
      console.log('Invalid Task! Add a title and assignee');
    }
  }

  const values = {
    showComplete,
    pageItems,
    sort,
    setShowComplete,
    itemsSet,
    addItemss
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )

};

export default SettingsProvider;
