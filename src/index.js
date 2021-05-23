import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import returnStoreAndPersistor from "../src/redux/store";
// import Chart from './components/Chart/chart.js';
import App from './components/app/app';

const { store, persistor } = returnStoreAndPersistor();

// const App = () => {
//     const dummyData =[{
//         id:1,
//         title:'chanal a',
//         color:'#556688'
//       },
//       {
//           id:2,
//           title:'chanal b',
//           color:'#228800'
//       },
//       {
//           id:3,
//           title:'chanal c',
//           color:'#990000',
//           disabled:1
//       },
//       {
//           id:4,
//           title:'chanal d',
//           color:'#000099',
//           disabled:1
//       },
//       {
//           id:5,
//           title:'chanal e',
//           color:'#e91e63'
//       }
//     ];

//     return (
//         <div className="app">
//             {/* <Chart /> */}
//             <List dummyData={dummyData} />
//         </div>
//     );
// }

ReactDOM.render( 
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
           <App />
        </PersistGate>
    </Provider>,
document.getElementById("root"));