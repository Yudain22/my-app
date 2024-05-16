import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import StudentList from './chapter03/StudentList';
// import Library from './chapter03/Library';
import ConfirmDialog from './chapter04/ConfirmDialog';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode> 
    {/* <App /> */} 
    {/* <Library />  */}
    {/* <StudentList />  */}
<ConfirmDialog/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();