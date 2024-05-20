import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import StudentList from './chapter03/StudentList';
// import Library from './chapter03/Library';
// import ConfirmDialog from './chapter04/ConfirmDialog';
// import Clock from './chapter04/Clock';
// import PropsEx from './chapter05/PropsEx';
// import CommnetList from './chapter05/CommentList';
// import BoardList from './chapter05/BoardList';
import NotificationList from './chapter06/NotificationList';
import Counter from './chapter07/Count';
import Info from './chapter07/Info';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> 
      {/* <App />  */}
      {/* <Library />  */}
      {/* <StudentList />  */}
  {/* <ConfirmDialog/> */}
  {/* <PropsEx/> */}
  {/* <CommnetList/> */}
  {/* <BoardList/> */}
  {/* <NotificationList/> */}
  {/* <Counter/> */}
    <Info/>
  </React.StrictMode>
);

// setInterval(()=>{
//   root.render( 
//     <React.StrictMode> 
    
//   <Clock/>
//       </React.StrictMode>
//   );
// //밀리세컨이라서 1000이 1초
// },1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();