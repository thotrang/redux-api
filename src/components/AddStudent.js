import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../redux/action"

function AddStudent() {
    const dispacth = useDispatch();
    const [student, setStudent] = useState({})
    const handleAdd = (values) => {
        dispacth(addStudent(values))
        
    }
    const navigate = useNavigate()

    return (
        <div>
            <h2>Add Student</h2>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    action: ''
                }}
                validate={
                    (values) => {
                        setStudent(values)
                    }
                }
                onSubmit={(values) => {
                    handleAdd(values)
                   
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
export default AddStudent