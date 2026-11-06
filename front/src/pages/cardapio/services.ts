import type { ProdutosType } from "../../types/types";

export interface DadosProduto {
    nome: string;
    descricao: string;
    categoria: "Comida" | "Bebida";
    preco: number;
    estoque: number;
}

export function filtrarProdutos(produtos: ProdutosType[], query: string) {
    const busca = query.trim().toLocaleLowerCase();
    return produtos.filter((produto) =>
        [produto.nome, produto.descricao, produto.categoria].some((valor) =>
            valor.toLocaleLowerCase().includes(busca),
        ),
    );
}

export function obterProximoId(produtos: ProdutosType[]) {
    return produtos.reduce((maiorId, produto) => Math.max(maiorId, produto.id), 0) + 1;
}

export function criarProduto(
    dados: DadosProduto,
    id: number,
    acoes: ProdutosType["acoes"],
): ProdutosType {
    return {
        ...dados,
        id,
        data: Date.now(),
        acoes,
    };
}

export function atualizarProduto(
    produtos: ProdutosType[],
    id: number,
    dados: DadosProduto,
) {
    return produtos.map((produto) =>
        produto.id === id ? { ...produto, ...dados } : produto,
    );
}

export function excluirProduto(produtos: ProdutosType[], id: number) {
    return produtos.filter((produto) => produto.id !== id);
}