import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents, deleteStudent, getStudent } from "../redux/action"
import { useNavigate } from "react-router-dom";

function GetStudents() {
    const listStudents = useSelector(state => state.studentReducer.students);
    const navigate = useNavigate()
    const dispacth = useDispatch();

    // useEffect(() => {
    //   dispacth(getStudents())
    // }, [])

    const handleDelete = (id) => {
        console.log('delete');
        dispacth(deleteStudent(id))
    }
    const handleEdit = (id) => {
        console.log('edit');
        dispacth(getStudent(id))
        navigate(`/students/edit/${id}`)
    }
    return (
        <div>
            <h2>List Student</h2>
            <button onClick={() => {
                console.log('add');
                navigate('/students/add')
            }}>Add Student</button>
            {
                listStudents.map((student, index) => (
                    <ul key={index}>
                        <li>{student.id}</li>
                        <li onClick={() => {
                            navigate(`/students/${student.id}`)
                        }}>{student.name}</li>
                        <li>{student.description}</li>
                        <li>{student.action}</li>
                        <li><button onClick={() => { handleEdit(student.id) }}>Edit</button></li>
                        <li><button onClick={() => { handleDelete(student.id) }}>Delete</button></li>
                    </ul>
                ))
            }
        </div>
    )
}
export default GetStudents