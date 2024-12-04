import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GreetingElement from './myGreetingApp'
import AppColor from './AppbackgroundColor'
import reportWebVitals from './reportWebVitals';
import GreetingElementwithProp from './myGreetingProp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppColor heading="This is first element" lbl="Name: " color="green" />
    <AppColor heading="This is second element" lbl="Name: " color="blue" />
    <AppColor heading="This is third element" lbl="Name: " color="Yellow" />
    <GreetingElement />
    <GreetingElementwithProp msg="Hi its Monday" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
