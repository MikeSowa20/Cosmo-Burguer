import type { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps{
    handleClose:()=>void;
    children:ReactNode
}

export default function Modal({handleClose,children}:ModalProps){
    return(
        <div className="fixed h-screen w-screen bg-black/35 z-20 inset-0 flex items-center justify-center">
            <div className={`w-[95%] h-max lg:w-[40%] shadow bg-slate-100 rounded-xl border-3 border-slate-300 relative p-5`}>
                <button className="text-4xl cursor-pointer absolute top-5 right-5 opacity-70 transition-all hover:opacity-100 hover:scale-[110%]"
                    onClick={handleClose}
                >
                    <IoClose />
                </button>
                {children}
            </div>
        </div>
    )
}