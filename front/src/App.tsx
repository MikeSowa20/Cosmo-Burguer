import { useEffect, useState } from "react"
import NavBar from "./components/navigation/NavBar"
import NavBarMobile from "./components/navigation/NavBarMobile"
import Mensage from "./components/ui/mensage"
import AppRoutes from "./routes/AppRoutes"
import type { MensageProps } from "./types/types"
import { AnimatePresence } from "motion/react"

function App() {
  const screen = window.innerWidth

  const [msg, setMsg] = useState<MensageProps>({ msg: "", type: "error" })

  useEffect(() => {
    if (!msg.msg) return

    const timeout = setTimeout(() => {
      setMsg({ msg: "", type: "error" })
    }, 3000)

    return () => clearTimeout(timeout)
  }, [msg])

  return (
    <div className="min-h-screen min-w-screen bg-slate-300 flex z-0">

      {screen <= 760 ?
        <div className="z-10">
          <NavBarMobile />
        </div>
        :
        <div className="w-64">
          <NavBar />
        </div>
      }
      <div className="w-full">
        <AnimatePresence mode="wait">
          {msg.msg && (
            <Mensage
              key={msg.msg}
              msg={msg.msg}
              type={msg.type}
            />
          )}
        </AnimatePresence>
        <AppRoutes 
          setMsg={setMsg}
        >
        </AppRoutes>
      </div>
    </div>
  )
}

export default App
