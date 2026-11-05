import { IoClose } from "react-icons/io5";

interface SearchProps{
    query:string;
    setQuery:(e:any)=>void;
    placeholder:string
    classname?:string;
}

export default function Search({query,setQuery,placeholder,classname}:SearchProps){
    return(
        <div className="relative">
            <input
                value={query}
                onChange={((e)=>setQuery(e.target.value))}
                placeholder={placeholder}
                className={`rounded-lg p-3 border-2 border-slate-300 outline-0 ring-0 w-md ${classname}`}
            ></input>
            <button className="cursor-pointer hover:opacity-90 opacity-50"
                onClick={()=>setQuery("")}
            >
                <IoClose className="absolute text-2xl top-3.5 right-3"/>
            </button>   

        </div>
    )
}