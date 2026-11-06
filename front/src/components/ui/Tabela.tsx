import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import type { cabecalhoProps, ProdutosType } from "../../types/types";
import BodyContainer from "../layout/BodyContainer";
import Button from "./Button";

interface TabelaProps {
    produtos: ProdutosType[];
    totalProdutos: number;
    openModal: boolean;
    abrirModal: () => void;
    cabecalho: cabecalhoProps[],
}

export default function Tabela({
    produtos,
    totalProdutos,
    openModal,
    cabecalho,
    abrirModal,
}: TabelaProps) {
    const [page, setPage] = useState(1)
    const produtosPorPagina = 9
    const qtdPage = Math.max(1, Math.ceil(produtos.length / produtosPorPagina))
    const paginaAtual = Math.min(page, qtdPage)
    const produtosDaPagina = produtos.slice(
        (paginaAtual - 1) * produtosPorPagina,
        paginaAtual * produtosPorPagina
    )
    const primeiraPaginaVisivel = Math.max(1, Math.min(paginaAtual - 1, qtdPage - 2))
    const paginasVisiveis = Array.from(
        { length: Math.min(3, qtdPage) },
        (_, index) => primeiraPaginaVisivel + index
    )

    function passarPagina(numeroPagina: number) {
        setPage(Math.max(1, Math.min(numeroPagina, qtdPage)))
    }

    return (
        <BodyContainer classname="mx-10">
            <div className="flex h-[60vh] w-full flex-col">
                <div className={`min-h-0 flex-1 overflow-x-auto ${produtosDaPagina.length === 0 ? "overflow-y-hidden" : "overflow-y-auto"}`}>
                    <div className="flex h-full min-w-[720px] flex-col">
                        <table className="w-full table-fixed border-separate border-spacing-0">
                            <thead>
                                <tr className="h-12 text-center font-bold text-white">
                                    {cabecalho.map((item, index) => {
                                        const Icon = item.icon

                                        return (
                                            <th
                                                scope="col"
                                                className={`h-12 border-l-2 border-red-700 bg-red-800 px-2 py-0 ${index === 0 ? "rounded-tl-lg" : ""
                                                    } ${index === cabecalho.length - 1 ? "rounded-tr-lg" : ""}`}
                                                key={item.label}
                                            >
                                                <div className="flex gap-2 justify-center">
                                                    <Icon className="text-2xl" />
                                                    <p>{item.label}</p>
                                                </div>
                                            </th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            {produtosDaPagina.length > 0 && (
                                <tbody>
                                    {produtosDaPagina.map((produto, index) => (
                                        <tr
                                            key={`${produto.nome}-${produto.data}-${index}`}
                                            className={`h-12 text-center text-slate-700 text-sm ${index % 2 === 0 ? "" : "bg-slate-100"}`}
                                        >
                                            <td className="h-12 truncate border border-slate-200 p-2">{produto.nome}</td>
                                            <td className="h-12 truncate border border-slate-200 p-2">{produto.descricao}</td>
                                            <td className="h-12 truncate border border-slate-200 p-2">{produto.categoria}</td>
                                            <td className="h-12 truncate border border-slate-200 p-2">{produto.preco}</td>
                                            <td className="h-12 truncate border border-slate-200 p-2">{produto.estoque}</td>
                                            <td className="h-12 truncate border border-slate-200 p-2 flex justify-center px-8 gap-3">
                                                <span onClick={produto.acoes.delete.function} className="flex justify-center">
                                                    {produto.acoes.delete.view}
                                                </span>
                                                <span onClick={produto.acoes.edit.function} className="flex justify-center">
                                                    {produto.acoes.edit.view}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}
                        </table>
                        {produtosDaPagina.length === 0 && (
                            <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2 text-center">
                                <div>
                                    <p className="text-xl font-bold">
                                        {totalProdutos === 0
                                            ? "Não há nenhum produto cadastrado"
                                            : "Nenhum produto encontrado"}
                                    </p>
                                    <p className="opacity-50">
                                        {totalProdutos === 0
                                            ? "Cadastre um novo item ao cardápio."
                                            : "Tente alterar os termos da busca."}
                                    </p>
                                </div>
                                {totalProdutos === 0 && (
                                    <Button
                                        label="+ Cadastrar produto"
                                        handleClick={abrirModal}
                                        disabled={openModal}
                                        className="bg-red-800 cursor-pointer font-bold"
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-auto min-h-16 shrink-0 border-t border-slate-300 py-5 px-8 flex items-center justify-between">
                    <div>
                        <p className="text-slate-400">
                            Exibindo <span className="text-slate-800">{produtos.length}</span> de{" "}
                            <span className="text-slate-800">{totalProdutos}</span> registros
                        </p>
                    </div>
                    <nav aria-label="Paginação" className="flex gap-2">
                        <button
                            aria-label="Página anterior"
                            disabled={paginaAtual === 1}
                            className="rotate-180 rounded-xl border border-slate-300 bg-slate-100 p-3 cursor-pointer hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                            onClick={() => passarPagina(paginaAtual - 1)}
                        >
                            <FaGreaterThan />
                        </button>
                        {paginasVisiveis.map((numeroPagina) => (
                            <button
                                aria-current={paginaAtual === numeroPagina ? "page" : undefined}
                                className={`rounded-xl border p-3 cursor-pointer hover:bg-slate-200 ${paginaAtual === numeroPagina
                                        ? "border-slate-300 bg-slate-200"
                                        : "border-slate-300 bg-slate-100"
                                    }`}
                                onClick={() => passarPagina(numeroPagina)}
                                key={numeroPagina}
                            >
                                {numeroPagina}
                            </button>
                        ))}
                        <button
                            aria-label="Próxima página"
                            disabled={paginaAtual === qtdPage}
                            className="rounded-xl border border-slate-300 bg-slate-100 p-3 cursor-pointer hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                            onClick={() => passarPagina(paginaAtual + 1)}
                        >
                            <FaGreaterThan />
                        </button>
                    </nav>
                </div>
            </div>
        </BodyContainer>
    )
}
