import { useState } from "react";
import type { cabecalhoProps } from "../../types/types";
import { IoLayers } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";

interface ListCheckBoxProps{
    options:cabecalhoProps[];
    handleChange: (id:cabecalhoProps["id"])=>void;
}


export default function ListCheckBox({options,handleChange}:ListCheckBoxProps){

    const [open,setOpen] = useState(false)

    return(
        <div className="relative">
            <button className="px-4 py-2 rounded-lg border-slate-300 border-2"
                    onClick={()=>(setOpen((prev)=>!prev))}
            >
                <div className="flex justify-center items-center gap-2">
                    <IoLayers  className="text-2xl text-slate-700"/>
                    Colunas exibidas
                    <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <IoIosArrowDown />
                    </motion.span>
                </div>
            </button>
            <AnimatePresence>
                {open && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute p-2 w-full flex flex-col gap-2 bg-white/70 backdrop-blur-lg z-10 top-10"
                >
                {
                    options.map((option)=>(
                        <label key={option.id}
                            className=""
                        >
                            <input
                                type="checkbox"
                                value={option.id}
                                checked={option.value}
                                onChange={() => handleChange(option.id)}
                            />
                            <span className="pl-1.5">{option.label}</span>
                            </label>
                    ))
                }
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}