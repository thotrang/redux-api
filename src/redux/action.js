import axios from "axios"

export const addStudent = (data) => {
    if (data.name && data.description && data.action) {
        return async dispatch => {
            const res = await axios.post(`http://localhost:3000/students`, data)
            dispatch({
                type: 'students/add',
                payload: data
            })
        }
    } else {
        alert('Vui lòng điền đầy đủ thông tin')
    }
}
export const getStudents = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:3000/students')
        dispatch({
            type: 'students/getAll',
            payload: res.data
        })
    }
}


export const getStudent = (index) => {
    return async dispatch => {
        const res = await axios.get(`http://localhost:3000/students/${index}`)
        dispatch({
            type: 'students/getOne',
            payload: res.data
    
        })
    }
}
export const deleteStudent = (index) => {
    return async dispatch => {
        const res = await axios.delete(`http://localhost:3000/students/${index}`)
        dispatch({
            type: 'students/delete',
            payload: index
        })
    }
}

export const editStudent = (index, data) => {
    if (data.name && data.description && data.action) {
        return async dispatch => {
            const res = await axios.put(`http://localhost:3000/students/${index}`, data)
            dispatch({
                type: 'students/edit',
                payload: {
                    index: index,
                    data: data
                }
            })
        }
    } else {
        alert('Vui lòng điền đầy đủ thông tin')
    }
}
export const findStudents = () => {

}