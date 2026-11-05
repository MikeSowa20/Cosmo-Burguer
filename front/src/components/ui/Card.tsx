import type { IconType } from "react-icons"

interface CardProps{
    label:string,
    value:number | string,
    icon: IconType,
    color: string,
}

export default function Card({label,value,icon,color}:CardProps){

    const Icon = icon
    console.log(color)

    return(
        <div className="min-h-24 p-4 flex flex-col items-center border-slate-300 border rounded-xl shadow">
            <div className={`p-4 rounded-full text-3xl`}
                style={{color:color,background:`color-mix(in srgb, ${color} 20%, transparent)`, }}
            >
                <Icon/> 
            </div>
            <p className="text-3xl">{value}</p>
            <p className="text-sm opacity-50">{label}</p>
        </div>
    )
}