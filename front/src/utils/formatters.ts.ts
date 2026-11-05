import type { MensageProps } from "../types/types"

function formatarPreco(preco:number|string):number|MensageProps{
    const valor = typeof preco ==="number"
        ? preco
        : Number(preco.trim().replace(",","."))

    if (!Number.isFinite(valor) || valor === 0){
        return {msg:"Erro ao formatar preço",type:"error"}
    }
    return valor
}