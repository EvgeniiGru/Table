import React from 'react'
import { connect } from 'react-redux'
import Tabl from './Tabl'
import {getTablMap, getPageNow, changeSort} from '../../redux/TablReduser'


class TablClass extends React.Component{

componentDidMount(){
  this.props.getTablMap()
}


render() {
        return <Tabl {...this.props}/>
}
}

let mapstate = (state) => {
    return{...state.tabl}
}

export default connect(mapstate,{getTablMap,
    getPageNow,
    changeSort})(TablClass)