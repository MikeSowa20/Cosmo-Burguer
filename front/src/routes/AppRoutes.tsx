import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cardapio from "../pages/cardapio/Cardapio";
import type { pageProps } from "../types/types";


export default function AppRoutes({setMsg}:pageProps){
    return(
            <Routes>
                <Route path="/" element={<Home setMsg={setMsg}/>}/>
                <Route path="/home" element={<Home setMsg={setMsg}/>}/>
                <Route path="/cardapio" element={<Cardapio setMsg={setMsg}/>}/>
            </Routes>
    )
}