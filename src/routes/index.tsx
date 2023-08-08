import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Register } from "../pages/register"
import { Login } from "../pages/login"
import { Product } from "../pages/product"
import { UserDash } from "../pages/userDash"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register"element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/userDash" element={<UserDash/>}/>
        </Routes>
    )
}