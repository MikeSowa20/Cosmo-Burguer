import { FaHamburger } from "react-icons/fa";
import { RiDrinksFill } from "react-icons/ri";

interface CategoryFoodProps{
    selectCategory:"Comida"|"Bebida",
    handleChange:(str:"Comida"|"Bebida")=>any,
}

export default function CategoryFood({selectCategory,handleChange}:CategoryFoodProps){
    return(
        <div className="rounded-2xl w-full flex border-slate-500 border shadow">
            <div className={`h-full p-3 flex justify-center w-full items-center text-white bg-yellow-500 rounded-l-2xl cursor-pointer ${selectCategory == "Comida" ? "opacity-100":"opacity-50"}`}
                onClick={()=>handleChange("Comida")}
            >
                <FaHamburger className="text-xl mr-2"/>
                Comida
            </div>
            <div className={`h-full p-3 w-full flex justify-center items-center bg-red-500 text-white rounded-r-2xl cursor-pointer ${selectCategory == "Bebida" ? "opacity-100":"opacity-50"}`}
                onClick={()=>handleChange("Bebida")}
            >
                <RiDrinksFill className="text-xl mr-2"/>
                Bebida
            </div>
        </div>
    )
}