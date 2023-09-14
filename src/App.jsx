import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Box } from "@mui/material";
import DashboardLayout from "./Layouts/DashboardLayout";
import Users from "./pages/Users";
import CreateUser from "./pages/Create/CreateUser";
import Roles from "./pages/Roles";
import Footer from "./components/Footer";
import Calendar from "./pages/Calendar";
import SingleUser from "./pages/SingleUser";



function App() {
 
  return (
    <Box
    bgcolor={"background.default"} 
    color={"text.primary"}
    >
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route element={<Navigate to='/dashboard/app'/>} index/>
          <Route path="app" element={<Home/>}/>
          <Route path="calendar" element={<Calendar/>}/>
          <Route path="users">
            <Route element={<Users/>} index/>
            <Route path="add" element={<CreateUser/>}/>
            <Route path="roles" element={<Roles/>}/>
            <Route path=":id" element={<SingleUser/>}/>
          </Route>
        </Route>
          <Route path="/" element={<Navigate to='/dashboard'/>}/>
        <Route path="/login">
          <Route index element={<Login/>}/>
        </Route>
      </Routes>
     
    </BrowserRouter>
    </Box>
  )
}

export default App
