import React from 'react'
import classes from './Table.module.css'
import ReactPaginate from 'react-paginate'


const Table = (props) => {
    let TableItems = props.tablMap.slice(props.countValuePages.start, props.countValuePages.end).map(item => {
        return (
            <li className={classes.item_tabl} key={item.id} id={item.id} onClick={() => {}}>
                <input readOnly className={classes.item_name} value={item.username} />
                <input readOnly  className={classes.item_city} value={item.city} />
                <textarea readOnly  className={classes.item_title} value={item.title} />
                <input readOnly  className={classes.item_comments} value={item.comments.length} />
            </li>
        )
    });

let LabelName  = (sortName) =>  {
    if(props.sort===sortName){
   return props.sortOrder==="asc"?"▼":"▲"}else{
      return ""
    }
}

    return <div className={classes.frame}>
        <div className={classes.pannel_bt}>

        </div>
        <ul className={classes.table}>
            <li className={classes.item_tabl}>	
                <input  readOnly className={props.sort ==="username"?
                classes.item_name_header + ' ' +  classes.action_filter_green:classes.item_name_header} 
                value={`Имя пользователя ${LabelName("username")}`}
                onClick = {() => props.changeSort('username')} />

                <input  readOnly className={props.sort ==="city"?
                    classes.item_city_header + ' ' + classes.action_filter_red:classes.item_city_header}
                 value={`Название города ${LabelName("city")}`}
                 onClick = {() => props.changeSort('city')} />

                <input  readOnly className={props.sort ==="title"?
                   classes.item_title_header + ' ' + classes.action_filter_green:classes.item_title_header} 
                value={`Название публикации ${LabelName("title")}`}
                onClick = {() => props.changeSort('title')} />

                <input  readOnly className={classes.item_comments} 
                value="Количество комментариев" />
            </li>
            {TableItems}
        </ul>

        <ReactPaginate containerClassName={classes.block_pages}
            nextLabel={">"}
            previousLabel={"<"}
            pageCount={props.pages}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            containerClassName={classes.container}
            pageClassName={classes.page}
            activeClassName={classes.page_active}
            pageLinkClassName={classes.a_style}
            onPageChange={props.getPageNow}
            nextClassName={classes.page_next}
            previousClassName={classes.page_next}
            previousLinkClassName={classes.a_style}
            nextLinkClassName={classes.a_style} />

    </div>
}


export default Table;
