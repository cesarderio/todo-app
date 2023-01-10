import React, { useContext } from 'react';

import ToDo from './Components/ToDo/ToDo';
import { SettingsContext } from './Context/Settings';


const App = () => {
  const { title, description, dueDate } = useContext(SettingsContext)

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
