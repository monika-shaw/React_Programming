import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import react from 'react';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
/////6/////////////////////////////////////
//ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));// here h1 tag which is inside render method is jsx expression


//reactDom.render(React.createElement("h1",null,"student"),document.getElementById("root"));


//creation of new element by using pure js
// var h1= document.createElement('h1');
// h1.innerHTML="tom cruice";
// document.getElementById('root').appendChild(h1) 

// all above 3 example of creation an element will give the same output

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


////7/////////////

//ReactDOM.render(<div> <h1>Hello World</h1> <p>React Tutorial</p> <h1> mltiple elements created inside render </h1></div>, document.getElementById('root'));
//ReactDOM.render(<div> <h1>Hello World</h1> <h1>React Tutorial</h1> <h1> mltiple elements created inside render </h1></div>, document.getElementById('root'));


// ReactDOM.render(

//   <div>  
//      <h1>Hello World</h1>
//       <h1>React Tutorial</h1>
//       <h1> mltiple elements created inside render </h1>
//   </div>,
//    document.getElementById('root'));


// without usinf div
   ReactDOM.render(
     [
       <h1>Hello World</h1>,
        <h1>React Tutorial</h1>,
        <h1> mltiple elements created inside render </h1>
     ],
     document.getElementById('root'));

     //8/////////////////////////////


    //  ReactDOM.render(
    //   <React.Fragment>
    //     <h1>Hello World</h1>,
    //      <h1>React Tutorial</h1>,
    //      <h1> mltiple elements created inside render </h1>
    //      </React.Fragment>,
    //   document.getElementById('root'));
  



    ReactDOM.render(
      <>
        <h1>Hello World</h1>,
         <h1>React Tutorial</h1>,
         <h1> mltiple elements created inside render </h1>
         </>,
      document.getElementById('root'))

      //9//////////////////////////////


  reactDom.render(
    <React.Fragment>
    <h1>My first react app</h1>
    <p>list of my favourite series</p>
    <ol>
      <li>Dark</li>
      <li>Money heist</li>
      <li>Mr Robot</li>
      <li>Rampage</li>
      <li>Jumanji</li>
    </ol>
    </React.Fragment>
    , document.getElementById('root')
  

    );



    //10///////
    

    const name = 'Tom cruice'

    reactDom.render(
      <react.Fragment>
      <h1>My name is {name}</h1>
      <p>Today is sunny day {2+3}</p>
      </react.Fragment>
      ,document.getElementById('root')
    );




    // reactDom.render( 
    //   <react.Fragment>
    //   <h1>My name is {name}</h1>
    //   <p>Today is sunny day {
    //     if (3<4){     // it will throw an error because e can not use statement inside html we can use only expressions.
    //       console.log(true)
    //     }
    //     else{
    //       console.log(false)
    //     }
    //  }</p>
    //   </react.Fragment>
    //   ,document.getElementById('root')
    // );

   