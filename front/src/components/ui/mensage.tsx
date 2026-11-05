import { motion } from "motion/react"

interface MensageProps{
    msg:string;
    type:"error"|"success"
}

export default function Mensage({msg,type}:MensageProps){
    return(
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`absolute z-50 w-max h-max top-12 -translate-x-1/2 left-1/2 rounded p-4 border ${type=="error" ? "bg-red-400 border-red-600":"bg-green-400 border-green-600"}`}
        >
            <p className=" text-white">
                {msg}
            </p>
        </motion.div>
    )
}