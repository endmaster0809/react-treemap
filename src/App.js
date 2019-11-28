import React from 'react';
import TreemapExample from './components/TreemapExample';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => <Admin dataProvider={dataProvider} />;
// function App() {
//   return (
//     <div style={{ width: '50%', height: '500px' }}>
//       <TreemapExample />
//     </div>
//   );
// }

export default App;
