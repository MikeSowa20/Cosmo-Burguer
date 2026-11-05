import itensNav from "./ItensNav"
import { Link } from "react-router-dom"

interface NavBarProps {
    className?: string;
}

export default function NavBar({className}:NavBarProps){
    return(
        <nav className={`h-full w-full bg-red-600 lg:bg-red-800 rounded-tr-lg rounded-br-2xl-lg px-5 py-12 ${className}`}>
            <ul>
                {
                    itensNav.map((item)=> {
                        const Icon = item.icon
                        return(
                            <li key={item.path} >
                                <Link to={item.path} key={item.path} 
                                      className="text-yellow-400 font-bold text-xl w-full flex items-center gap-2 py-2
                                                    transition-all border-yellow-400 hover:border-l-4">

                                    <Icon className="pl-1 text-3xl"/>
                                    <p>{item.title}</p>
                                </Link>
                                <hr className="border-yellow-300/25"></hr>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}