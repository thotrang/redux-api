import { Routes, Route, BrowserRouter } from "react-router-dom"
import { getStudents, deleteStudent } from "./redux/action"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import GetStudents from "./components/GetStudents";
import GetStudent from "./components/GetStudent";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

function App() {

  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getStudents())
  }, [])
  
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path="/students" element={<GetStudents></GetStudents>}></Route>
          <Route path="/students/:id" element={<GetStudent></GetStudent>}></Route>
          <Route path="/students/add" element={<AddStudent></AddStudent>}></Route>
          <Route path="/students/edit/:id" element={<EditStudent></EditStudent>}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
