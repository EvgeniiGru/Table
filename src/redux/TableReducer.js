import { getPost, getUser, getComments } from "../api/Api";

const SET_TABLE = "SET_TABLE";
const GET_PAGE_NOW = "GET_PAGE_NOW";
const GET_PAGES = "GET_PAGES";
const SET_TABLE_ADD_CITY = "SET_TABLE_ADD_CITY";
const SET_TABLE_COMMENTS = "SET_TABLE_COMMENTS";
const SORT_TABLE = "SORT_TABLE";

let initialization = {
    tablMap:[],
    pageNow:1,
    countPage:10,
    pages:1,
    sort:"",
    sortOrder:"",
    countValuePages:{start:0, end:10}
}

const TableReducer = (state = initialization, action) => {
    switch (action.type) {
        case SET_TABLE:
         return {
             ...state,
             tablMap:action.postMap.map(item => {item.city=""; item.username=""; item.comments = []; return item})
         }
         case SET_TABLE_ADD_CITY:
            return {
                ...state,
                tablMap:state.tablMap.map(itemV =>
                    {
                        itemV.username = action.users[itemV.userId-1].username;
                        itemV.city = action.users[itemV.userId-1].address.city;
                        return itemV;
                })
            }
         case SET_TABLE_COMMENTS:    
             return{
                ...state,
                tablMap:state.tablMap.map(item => {
                    item.comments = action.comments.filter(value=> value.postId == item.id);
                     return item;
                     })
             }
         case GET_PAGES:
         return {
             ...state,
             pages:Math.ceil(action.countValue/state.countPage)
         }
         case GET_PAGE_NOW:
            return{
                ...state,
                pageNow:action.data.selected + 1,
                countValuePages:{start:action.data.selected===0?0:(state.countPage)*(action.data.selected), 
                    end:state.countPage*(action.data.selected + 1)}
        }
        case SORT_TABLE:
            let sort = "";
            let sortOrder = "";
            let sortOrderValue = {a:1,b:-1};
            if(action.sort != state.sort)
            {
                sort = action.sort;
                sortOrder = "asc";
                sortOrderValue = {a:1,b:-1}
            }else if(state.sortOrder === "asc"){
                sort = action.sort;
                sortOrder = "desc";  
                sortOrderValue = {a:-1,b:1}
            }else if(state.sortOrder === "desc"){
                sort = "id";
                sortOrder = ""; 
                sortOrderValue = {a:1,b:-1}
            }
        return{
                ...state,
                tablMap: state.tablMap.sort((a, b) => a[sort] > b[sort] ? sortOrderValue.a : sortOrderValue.b),
                sort:sort,
                sortOrder:sortOrder,
            }
         default:  
         return state;
    }
};

export default TableReducer;

export const setTablMap = (postMap) => ({ type: SET_TABLE, postMap })
export const getPageNow = (data) => ({type: GET_PAGE_NOW, data})
export const getPages = (countValue) => ({type: GET_PAGES, countValue}) 
export const setCity = (users) => ({ type: SET_TABLE_ADD_CITY, users})
export const setComments = (comments) => ({ type: SET_TABLE_COMMENTS, comments})

export const changeSort = (sort) => ({ type: SORT_TABLE, sort})

export const getTablMap = () => (dispatch) => {
    getPost().then(res => {
        dispatch(setTablMap(res));
        dispatch(getPages(res.length));
        getUser().then(res => {
             dispatch(setCity(res));
         });

        getComments().then(res =>{
            dispatch(setComments(res));
        });
        
    })
    
}
