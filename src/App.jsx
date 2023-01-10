import React, { useContext } from 'react';

import ToDo from './Components/ToDo/ToDo';
import { TodoContext } from './Context/Settings';
import './App.css';

const App = () => {
  const { text, assignedTo, difficulty } = useContext(TodoContext)

  return (
  
      <ToDo />

  );
}

export default App;
// export default class App extends React.Component {
//   render() {
//     return (
//       <ToDo />
//     );
//   }
// }
