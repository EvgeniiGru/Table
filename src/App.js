import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import TablClass from './component/Table/TabContainer'


const App = (props) => {
     return (
      <div className="app-wraper">
        <Route path='/' render={() =><TablClass/>}/>
      </div>
        )
    }

export default App;
