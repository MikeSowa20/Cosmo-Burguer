import { BiSolidFoodMenu } from "react-icons/bi";
import { GrConfigure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { MdDescription } from "react-icons/md";
import { SiThestorygraph } from "react-icons/si";
import type { cabecalhoProps } from "../../../types/types";

export const CABECALHO:cabecalhoProps[] = [
    { id: "nome", label: "Nome do Produto", icon: BiSolidFoodMenu, value:true },
    { id: "descricao", label: "Descrição", icon: MdDescription,value:true },
    { id: "categoria", label: "Categoria", icon: IoFastFood,value:true },
    { id: "preco", label: "Preço", icon: IoMdPricetags,value:true },
    { id: "estoque", label: "Estoque", icon: SiThestorygraph,value:true },
    { id: "acoes", label: "Ações", icon: GrConfigure,value:true },
]