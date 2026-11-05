import type { IconType } from "react-icons";

interface HeaderProps{
    title:string;
    label:string;
    icon:IconType;
}

export default function HeaderBar({title,label,icon}:HeaderProps){
    const Icon = icon
    return(
        <header className="w-full h-32 bg-slate-50 flex-col flex justify-center px-6 shadow">
        <div className="flex items-center text-2xl">
            <Icon className="text-4xl text-yellow-600 pr-1"/>
            <div>
                <h1 className="font-semibold">{title}</h1>
            </div>
        </div>
            <p className="opacity-70 text-sm">{label}</p>
        </header>
    )
}