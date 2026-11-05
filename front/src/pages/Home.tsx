import BodyContainer from "../components/layout/BodyContainer";
import HeaderBar from "../components/layout/HeaderBar";
import { FaHome } from "react-icons/fa";
import Card from "../components/ui/Card";
import { MdFastfood } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import type { pageProps } from "../types/types";

export default function Home({setMsg}:pageProps){
    return(
        <div className="flex flex-col items-center gap-4">
            <HeaderBar
                title="Home"
                label="Acompanhe em tempo real o andamento da cozinha e do atendimento!"
                icon={FaHome}
            />
            <BodyContainer>
                <div className=" flex gap-8 pl-8">
                    <Card
                        label="Produtos"
                        value={5}
                        icon = {MdFastfood}
                        color ="#ff1900"
                    />
                    <Card
                        label="Pedidos"
                        value={3}
                        icon = {BiFoodMenu}
                        color ="#0051ff"
                    />
                </div>
            </BodyContainer>
        </div>
    )
}