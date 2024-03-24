import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import Tabs from './navigation/tabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native'; 
// import Tabs from './navigation/tabs';
// import { View, Text, StyleSheet } from 'react-native';

// function App() {

//   const [backendData, setBackendData] = useState([{}]);

//   useEffect(() => {
//     fetch("/api").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data)
//       }
//     )
//   }, [])

// }

// export default App