import { useState } from "react"
import { IoMenu } from "react-icons/io5";
import NavBar from "./NavBar";
import { AnimatePresence, motion } from "motion/react"

export default function NavBarMobile(){

    const [navExpander,setNavExpander] = useState(false);

    return(
        <div className={`absolute top-5 right-5 transition-all flex flex-col`}>
            <motion.button
                type="button"
                className="flex items-center justify-center bg-red-600 cursor-pointer text-yellow-400 text-2xl"
                animate={{
                    padding: navExpander ? "20px" : "20px",
                    borderTopLeftRadius: "9999px",
                    borderTopRightRadius: "9999px",
                    borderBottomLeftRadius: navExpander ? "0px" : "9999px",
                    borderBottomRightRadius: navExpander ? "0px" : "9999px",
                }}
                transition={{
                    duration: 0.05,
                    ease: "easeInOut",
                    delay: navExpander ? 0 : 0.29,
                    }}
                onClick={() => setNavExpander((prev) => !prev)}
                aria-expanded={navExpander}
                >
                <motion.span
                    transition={{ duration: 0.3 }}
                >
                    <IoMenu />
                </motion.span>
                </motion.button>
            <AnimatePresence>
                {navExpander  &&
                    <motion.div
                        className="w-50 overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <NavBar className={"rounded-b-xl rounded-tr-none"}/>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}