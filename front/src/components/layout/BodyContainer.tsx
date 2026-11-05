import type { ReactNode } from "react";

interface BodyProps{
    children:ReactNode;
    classname?:string;
}

export default function BodyContainer({children,classname}:BodyProps){
    return(
        <div className={`bg-slate-50 h-max min-w-[95%] lg:min-w-[90%] rounded-lg shadow ${classname}`}>
            {children}
        </div>
    )
}