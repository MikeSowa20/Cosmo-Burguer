import Modal from "../../../components/layout/Modal";
import Button from "../../../components/ui/Button";

interface ConfirmModalProps {
    fecharConfirmModal: () => void;
    nome: string;
    descricao: string;
    category: "Comida" | "Bebida";
    preco: number;
    estoque: number;
    handleSubmit: ()=>void;
}

export default function ConfirmModal({
    fecharConfirmModal,
    nome,
    descricao,
    category,
    preco,
    estoque,
    handleSubmit
}: ConfirmModalProps) {
    return (
        <Modal handleClose={fecharConfirmModal}>
            <div className=" flex flex-col gap-3">
                <div>
                    <h2 className="text-lg">Confirmar Produto</h2>
                    <p className="text-sm opacity-50">Você deseja confirmar o cadastro do produto:</p>
                </div>
                <table className="text-sm text-slate-700">
                    <tbody>
                        <tr>
                            <td className="border p-1">Nome</td>
                            <td className="border p-1">{nome}</td>
                        </tr>
                        <tr>
                            <td className="border p-1">Descrição</td>
                            <td className="border p-1">{descricao}</td>
                        </tr>
                        <tr>
                            <td className="border p-1">Categoria</td>
                            <td className="border p-1">{category}</td>
                        </tr>
                        <tr>
                            <td className="border p-1">Preço</td>
                            <td className="border p-1">{preco}</td>
                        </tr>
                        <tr>
                            <td className="border p-1">Estoque</td>
                            <td className="border p-1">{estoque}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex gap-4 justify-end">
                    <Button
                        label="Voltar"
                        handleClick={fecharConfirmModal}
                        disabled={false}
                        className="bg-red-500 hover:bg-red-600"
                    />
                    <Button
                        label="Confirmar"
                        handleClick={handleSubmit}
                        disabled={false}
                        className="bg-green-500 hover:bg-green-600"
                    />
                </div>
            </div>
        </Modal>
    )
}