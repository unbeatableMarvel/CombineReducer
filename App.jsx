import React from 'react';
//for multiple reducer you have to add 'combineReducers' in redux importing.look below
import {combineReducers,createStore} from 'redux';
//for single reducer you have to import redux like this 'import {createStore} from 'redux'

const userReducer=(state={},action)=>{
   switch(action.type)
   {
    case "ChangeName":{
      //if spread opreator(...) is not working then run the command to install 'npm install --save-dev babel-plugin-transform-object-rest-spread'
     state={...state,name:action.payload}
     break;
    }
    case "ChangeCompany":{
     state={...state,company:action.payload}
     break;
    }

   }
   return state;
}
const tweetsReducer=(state=[],action)=>{
  return state;
}

const reducer=combineReducers({
user:userReducer,
tweets:tweetsReducer

})

const store=createStore(reducer);

store.subscribe(()=>{
  console.log("Store Changes",store.getState());
  });

store.dispatch({type:"ChangeName",payload:"Rohit"});//payload can be any name but 'type' is mandatory
store.dispatch({type:"ChangeCompany",payload:"Wipro"});

class App extends React.Component {
 render() {
    return (
      
      <div>
      Hello
      </div>
      
      );
  }
}


export default App;


