import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import TableContainer from './component/Table/TableContainer'


const App = (props) => {
     return (
      <div className="app-wraper">
        <Route path='/' render={() =><TableContainer/>}/>
      </div>
        )
    }

export default App;
