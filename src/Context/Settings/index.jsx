import React, { useState } from 'react';

export const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {
  // const [ title, setTitle ] = useState('Some todo Thing');
  // const [ description, setDescription ] = useState('Read Me');
  // const [ dueDate, setDueDate ] = useState('Due Date');
  const [ id, setId ] = useState('Id');
  const [ text, setText ] = useState('Some todo Text');
  const [ assignedTo, setassignedTo ] = useState('Assigned To:');
  const [ difficulty, setDifficulty] = useState('Difficulty');
  
  
  const values = {
    id,
    text,
    assignedTo,
    difficulty,
  };

  return (
    <TodoContext.Provider value={values}>
      {children}
    </TodoContext.Provider>
  )

};

export default TodoProvider;
