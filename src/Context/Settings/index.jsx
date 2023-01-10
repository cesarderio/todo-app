import React, { useState } from 'react';

// export const TodoContext = React.createContext();
export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [ showComplete, setShowComplete ] = useState(false);
  const [ pageItems, setPageItems ] = useState(3);
  const [ sort, setSort ] = useState('difficulty');
  // const [ id, setId ] = useState('Id');
  // const [ text, setText ] = useState('Some todo Text');
  // const [ assignedTo, setassignedTo ] = useState('Assigned To:');
  // const [ difficulty, setDifficulty] = useState('Difficulty');
  
  
  const values = {
    showComplete,
    pageItems,
    sort,
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )

};

export default SettingsProvider;
