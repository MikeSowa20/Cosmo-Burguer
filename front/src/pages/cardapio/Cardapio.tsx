import BodyContainer from "../../components/layout/BodyContainer";
import HeaderBar from "../../components/layout/HeaderBar";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Button from "../../components/ui/Button";
import FormCardapio from "./components/FormCardapio";
import ConfirmModal from "./components/ConfirmModal";
import type { pageProps } from "../../types/types";
import Search from "../../components/ui/Search";
import Tabela from "../../components/ui/Tabela";
import ModalGenerico from "../../components/ui/ModalGenerico";
import useCardapioController from "./components/controller";
import { cabecalho } from "./config/cabeçalho";

export default function Cardapio({ setMsg }: pageProps) {
    const cardapio = useCardapioController({ setMsg });

    return (
        <div className="flex h-screen flex-col items-center gap-4">
            <HeaderBar
                title="Cardapio"
                label="Cadastre e consulte os itens disponíveis no cardapio!"
                icon={MdOutlineRestaurantMenu}
            />
            <Button
                label="Cadastrar produto"
                handleClick={cardapio.iniciarCadastro}
                disabled={cardapio.openModal}
                className="bg-red-800 cursor-pointer z-10 absolute right-20 top-12"
            />

            <BodyContainer classname="py-5 px-4">
                <div className="flex gap-6">
                    <Search
                        query={cardapio.query}
                        setQuery={cardapio.setQuery}
                        placeholder="Pesquise o seu produto aqui..."
                    />
                </div>
            </BodyContainer>
            <Tabela
                key={cardapio.query}
                produtos={cardapio.produtosFiltrados}
                totalProdutos={cardapio.produtos.length}
                openModal={cardapio.openModal}
                abrirModal={cardapio.iniciarCadastro}
                cabecalho={cabecalho}
            />
            {cardapio.openModal && (
                <FormCardapio
                    fecharForm={cardapio.fecharCadastro}
                    nome={cardapio.dadosProduto.nome}
                    setNome={(valor) => cardapio.atualizarCampo("nome", valor)}
                    descricao={cardapio.dadosProduto.descricao}
                    setDescricao={(valor) => cardapio.atualizarCampo("descricao", valor)}
                    category={cardapio.dadosProduto.categoria}
                    setCategory={(valor) => cardapio.atualizarCampo("categoria", valor)}
                    preco={cardapio.dadosProduto.preco}
                    setPreco={(valor) => cardapio.atualizarCampo("preco", valor)}
                    estoque={cardapio.dadosProduto.estoque}
                    setEstoque={(valor) => cardapio.atualizarCampo("estoque", valor)}
                    HandleSubmit={() => cardapio.setOpenConfirmModal(true)}
                />
            )}
            {cardapio.openEditModal !== null && (
                <FormCardapio
                    fecharForm={cardapio.fecharEdicao}
                    nome={cardapio.dadosProduto.nome}
                    setNome={(valor) => cardapio.atualizarCampo("nome", valor)}
                    descricao={cardapio.dadosProduto.descricao}
                    setDescricao={(valor) => cardapio.atualizarCampo("descricao", valor)}
                    category={cardapio.dadosProduto.categoria}
                    setCategory={(valor) => cardapio.atualizarCampo("categoria", valor)}
                    preco={cardapio.dadosProduto.preco}
                    setPreco={(valor) => cardapio.atualizarCampo("preco", valor)}
                    estoque={cardapio.dadosProduto.estoque}
                    setEstoque={(valor) => cardapio.atualizarCampo("estoque", valor)}
                    HandleSubmit={cardapio.confirmarEdicao}
                />
            )}
            {cardapio.openConfirmModal && (
                <ConfirmModal
                    fecharConfirmModal={() => cardapio.setOpenConfirmModal(false)}
                    handleSubmit={cardapio.confirmarCadastro}
                    nome={cardapio.dadosProduto.nome}
                    descricao={cardapio.dadosProduto.descricao}
                    category={cardapio.dadosProduto.categoria}
                    preco={cardapio.dadosProduto.preco}
                    estoque={cardapio.dadosProduto.estoque}
                />
            )}
            {cardapio.openConfirmDeleteID !== null && (
                <ModalGenerico
                    h2="Deletar produto"
                    p="Você realmente deseja deletar esse produto? Após confirmar, os dados serão apagados permanentemente."
                    handleSubmit={cardapio.confirmarExclusao}
                    fecharConfirmModal={cardapio.fecharConfirmacaoExclusao}
                />
            )}
        </div>
    );
}
