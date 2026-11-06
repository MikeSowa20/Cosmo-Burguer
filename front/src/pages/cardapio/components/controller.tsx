import { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import type { pageProps, ProdutosType } from "../../../types/types";
import {
    atualizarProduto,
    criarProduto,
    excluirProduto,
    filtrarProdutos,
    obterProximoId,
    type DadosProduto,
} from "../services";

const dadosIniciais: DadosProduto = {
    nome: "",
    descricao: "",
    categoria: "Comida",
    preco: 0,
    estoque: 0,
};

export default function useCardapioController({ setMsg }: pageProps) {
    // Estados do cardápio
    const [openModal, setOpenModal] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [openConfirmDeleteID, setOpenConfirmDeleteID] = useState<number | null>(null);
    const [openEditModal, setOpenEditModal] = useState<number | null>(null);
    const [dadosProduto, setDadosProduto] = useState<DadosProduto>(dadosIniciais);
    const [produtos, setProdutos] = useState<ProdutosType[]>([]);
    const [query, setQuery] = useState("");
    const produtosRef = useRef(produtos);

    useEffect(() => {
        produtosRef.current = produtos;
    }, [produtos]);

    // Produtos filtrados pela busca atual
    const produtosFiltrados = filtrarProdutos(produtos, query);

    // Atualização dos campos compartilhados pelos formulários
    function atualizarCampo<K extends keyof DadosProduto>(
        campo: K,
        valor: DadosProduto[K],
    ) {
        setDadosProduto((atual) => ({ ...atual, [campo]: valor }));
    }

    // Ações exibidas em cada linha da tabela
    function DeleteView() {
        return (
            <div className="flex w-full cursor-pointer items-center justify-center rounded-full bg-red-400 p-2 text-white transition-all hover:bg-red-500">
                <MdOutlineDelete className="text-lg" />
                Apagar
            </div>
        );
    }

    function EditView() {
        return (
            <div className="flex w-full cursor-pointer items-center justify-center rounded-full bg-blue-400 p-2 text-white transition-all hover:bg-blue-500">
                <CiEdit className="text-lg" />
                Editar
            </div>
        );
    }

    function criarAcoes(id: number): ProdutosType["acoes"] {
        return {
            delete: {
                view: <DeleteView />,
                function: () => setOpenConfirmDeleteID(id),
            },
            edit: {
                view: <EditView />,
                function: () => iniciarEdicao(id),
            },
        };
    }

    // Cadastro de produto
    function iniciarCadastro() {
        setOpenModal(true);
    }

    function fecharCadastro() {
        setOpenModal(false);
    }

    function confirmarCadastro() {
        const id = obterProximoId(produtos);
        const produto = criarProduto(dadosProduto, id, criarAcoes(id));

        setProdutos((atuais) => [...atuais, produto]);
        setOpenConfirmModal(false);
        setOpenModal(false);
        setMsg({ msg: "Produto cadastrado!", type: "success" });
    }

    // Edição de produto
    function iniciarEdicao(id: number) {
        const produto = produtosRef.current.find((item) => item.id === id);
        if (!produto) return;

        setDadosProduto({
            nome: produto.nome,
            descricao: produto.descricao,
            categoria: produto.categoria,
            preco: produto.preco,
            estoque: produto.estoque,
        });
        setOpenEditModal(id);
    }

    function fecharEdicao() {
        setOpenEditModal(null);
    }

    function confirmarEdicao() {
        if (openEditModal === null) return;

        setProdutos((atuais) =>
            atualizarProduto(atuais, openEditModal, dadosProduto),
        );
        setDadosProduto(dadosIniciais);
        setOpenEditModal(null);
        setOpenConfirmModal(false);
        setMsg({ msg: "Produto atualizado!", type: "success" });
    }

    // Exclusão de produto
    function confirmarExclusao() {
        if (openConfirmDeleteID === null) return;

        setProdutos((atuais) => excluirProduto(atuais, openConfirmDeleteID));
        setOpenConfirmDeleteID(null);
        setMsg({ msg: "Produto deletado!", type: "success" });
    }

    function fecharConfirmacaoExclusao() {
        setOpenConfirmDeleteID(null);
    }

    // Valores e handlers usados pela página
    return {
        openModal,
        openConfirmModal,
        openConfirmDeleteID,
        openEditModal,
        dadosProduto,
        produtos,
        produtosFiltrados,
        query,
        setQuery,
        atualizarCampo,
        setOpenConfirmModal,
        iniciarCadastro,
        fecharCadastro,
        fecharEdicao,
        confirmarCadastro,
        confirmarEdicao,
        confirmarExclusao,
        fecharConfirmacaoExclusao,
    };
}
