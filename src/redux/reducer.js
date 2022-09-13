import { combineReducers } from "redux";
const initialState = {
    students: [],
    student: {
        name: '',
        action:'',
        description:''
    },
    editStudent:{}
}
const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "students/getAll": {
            return {
                ...state,
                students: [...action.payload.sort(function (a, b) { return b.id - a.id })]
            }
        }
        case "students/getOne": {
            return {
                ...state,
                student: action.payload
            }
        }
        case "students/add": {
            return {
                ...state,
                students: [...state, action.payload],
            }
        }
        case "students/delete": {
            
            return {
                ...state,
                students:[...state.students.filter(item=>item.id!==action.payload)]
            }
        }
        case "students/edit":{
            return{
                ...state,
                students:[...state.students.filter(item=>item.id!==action.payload.index),
                    {...action.payload.data,id:action.payload.index}]
            }
        }
 
        default: return state;
    }

}

const rootReducer = combineReducers({
    studentReducer: studentReducer
})
export default rootReducer;