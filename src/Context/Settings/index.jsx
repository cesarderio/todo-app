import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [ title, setTitle ] = useState('Some todo Thing');
  const [ description, setDescription ] = useState('Read Me');
  const [ dueDate, setDueDate ] = useState('Due Date');
  
  
  const values = {
    title,
    description,
    dueDate,
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )

};

export default SettingsProvider;
