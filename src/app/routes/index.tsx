import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Login } from "../pages";


export const routes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={< Navigate to={"/pagina-inicial"}/>} />
        </Routes>
        </BrowserRouter>
    );}