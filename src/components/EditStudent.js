import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editStudent, getStudent } from "../redux/action"

function EditStudent() {
    const id = useParams().id
    const dispacth = useDispatch();
    const [student, setStudent] = useState({})
    const handleEdit = (values) => {
        dispacth(editStudent(id,values))
    }
    const navigate = useNavigate()
    const students = useSelector(state => state.studentReducer.students)
    const studentEdit = students.filter(student => student.id == id)
    const student1 = useSelector(state=> {
        return state.studentReducer.student
    })
    useEffect(() => {
      dispacth(getStudent(id))
    }, [])
    return (
        <div>
            <h2 >Edit Student</h2>
            <Formik
                initialValues={student1}
                validate={
                    (values) => {
                        setStudent(values)
                    }
                }
                enableReinitialize={true}
                onSubmit={(values) => {
                    handleEdit(values)
                }}
            >
                <Form>
                    Name : <Field name={'name'}></Field>
                    <br></br>
                    Description : <Field name={'description'}></Field>
                    <br></br>
                    Action : <Field name={'action'}></Field>
                    <br></br>
                    <button>Save</button>
                </Form>

            </Formik>
            <button onClick={() => {
                navigate('/students')
            }}>Home</button>
        </div>
    )
}
export default EditStudent