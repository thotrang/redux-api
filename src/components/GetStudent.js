import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate,useParams} from "react-router-dom";
import { getStudent } from "../redux/action";
function GetStudent () {
    const params = useParams();
    const navigate = useNavigate()
    const dispacth = useDispatch();
    useEffect(()=>{
        dispacth(getStudent(params.id))
    },[])
    const student = useSelector(state => state.studentReducer.student)

    return(
        <div>
            <h1>{student.name}</h1>
            <p>{student.action}</p>
            <p>{student.description}</p>
            <button onClick={()=>{
                navigate('/students')
            }}>Home</button>
            <button onClick={()=>{
                navigate(`/students/edit/${params.id}`)
            }}>Edit</button>
        </div>
    )
}
export default GetStudent;