import BodyContainer from "../../components/layout/BodyContainer";
import HeaderBar from "../../components/layout/HeaderBar";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Button from "../../components/ui/Button";
import { useState } from "react";
import FormCardapio from "./components/FormCardapio";
import ConfirmModal from "./components/ConfirmModal";
import type { pageProps, ProdutosType } from "../../types/types";
import Search from "../../components/ui/Search";
import Tabela from "../../components/ui/Tabela";

function filtrarProdutos(produtos: ProdutosType[], query: string) {
    const busca = query.trim().toLocaleLowerCase()
    return produtos.filter((produto) =>
        [produto.nome, produto.descricao, produto.categoria]
            .some((valor) => valor.toLocaleLowerCase().includes(busca))
    )
}

export default function Cardapio({ setMsg }: pageProps) {

    const [openModal, setOpenModal] = useState(false)
    const [openConfirmModal, setOpenConfirmModal] = useState(false)
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [category, setCategory] = useState<"Comida" | "Bebida">("Comida")
    const [preco, setPreco] = useState(0)
    const [estoque, setEstoque] = useState(0)

    const [produtos, setProdutos] = useState<ProdutosType[]>([])

    const [query, setQuery] = useState("")

    const produtosFiltrados = filtrarProdutos(produtos, query)

    function atualizarBusca(valor: string) {
        setQuery(valor)
    }

    interface ActionProps{
        id:number
    }

    function DeleteView({id}:ActionProps) {
        return <div>

        </div>
    }
    function deleteProduto(id:number) {
        
    }
    function EditView({id}:ActionProps) {
        return <div className="p-2 rounded-full bg-red-300">
            a
        </div>
    }
    function EditProduto(id:number) {
        
    }

    const cadastrarProduto = () => {
        const id = produtos.length + 1;
        const produto: ProdutosType = {
            nome: nome,
            descricao: descricao,
            preco: preco,
            categoria: category,
            estoque: estoque,
            data: Date.now(),
            id: id,
            acoes: {
            delete: {
                view: <DeleteView id={id} />,
                function: () => deleteProduto(id),
            },
            edit: {
                view: <EditView id={id} />,
                function: () => EditProduto(id),
            },
}
        }
        const produtosAtualizados = [...produtos, produto]
        setOpenConfirmModal(false)
        setOpenModal(false)
        setMsg({ msg: "Produto cadastrado!", type: "success" })
        setProdutos(produtosAtualizados)
    }

    return (
        <div className="flex flex-col items-center gap-4 h-screen">
            <HeaderBar
                title="Cardapio"
                label="Cadastre e consulte os itens disponíveis no cardapio!"
                icon={MdOutlineRestaurantMenu}
            />
            <Button
                label="Cadastrar produto"
                handleClick={() => setOpenModal((prev) => !prev)}
                disabled={openModal}
                className="bg-red-800 cursor-pointer z-10 absolute right-20 top-12"
            />

            <BodyContainer classname="py-5 px-4">
                <div className="flex gap-6">
                    <Search
                        query={query}
                        setQuery={atualizarBusca}
                        placeholder="Pesquise o seu produto aqui..."
                    />
                </div>
            </BodyContainer>
            <Tabela
                key={query}
                produtos={produtosFiltrados}
                totalProdutos={produtos.length}
                openModal={openModal}
                abrirModal={() => setOpenModal(true)}
            />
            {openModal &&
                <FormCardapio
                    fecharForm={setOpenModal}
                    nome={nome}
                    setNome={setNome}
                    descricao={descricao}
                    setDescricao={setDescricao}
                    category={category}
                    setCategory={setCategory}
                    preco={preco}
                    setPreco={setPreco}
                    estoque={estoque}
                    setEstoque={setEstoque}
                    HandleSubmit={setOpenConfirmModal}
                />
            }
            {
                openConfirmModal &&
                <ConfirmModal
                    fecharConfirmModal={() => setOpenConfirmModal(false)}
                    handleSubmit={cadastrarProduto}
                    nome={nome}
                    descricao={descricao}
                    category={category}
                    preco={preco}
                    estoque={estoque}
                />
            }
        </div>
    )
}