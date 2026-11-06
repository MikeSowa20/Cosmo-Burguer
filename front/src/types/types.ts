import type { ElementType, ReactNode } from "react";

export interface ProdutosType{
    nome:string,
    descricao:string,
    preco:number,
    foto?:string,
    estoque:number,
    categoria:"Bebida"|"Comida",
    data:number,
    id:number,
    acoes: {
        delete: {
            view: React.ReactNode;
            function: () => void;
        };
        edit: {
            view: React.ReactNode;
            function: () => void;
        };
    };
}

export interface MensageProps{
    msg:string;
    type:"error"|"success"
}

export interface pageProps{
    setMsg: ({}:MensageProps)=>void
}

export interface cabecalhoProps{
    label:string,
    icon: ElementType
}