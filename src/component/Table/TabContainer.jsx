import React from 'react'
import { connect } from 'react-redux'
import Table from './Table'
import {getTablMap, getPageNow, changeSort} from '../../redux/TablReducer'


class TableClass extends React.Component{

componentDidMount(){
  this.props.getTablMap()
}


render() {
        return <Table {...this.props}/>
}
}

let mapstate = (state) => {
    return{...state.table}
}

export default connect(mapstate,{getTablMap,
    getPageNow,
    changeSort})(TableClass)
