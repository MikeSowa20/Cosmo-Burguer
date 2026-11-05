import Modal from "../../../components/layout/Modal";
import Button from "../../../components/ui/Button";
import CategoryFood from "../../../components/ui/CategoryFood";
import Input from "../../../components/ui/Input";

interface FormCardapioProps{
    fecharForm: (e:any)=>void;
    nome: string;
    setNome: (e:any) => void;
    descricao: string;
    setDescricao: (e:any) => void;
    category: "Comida" | "Bebida" ;
    setCategory: (e:any) => void;
    preco: number;
    setPreco:(e:any)=>void;
    estoque:number;
    setEstoque:(e:any)=>void;
    HandleSubmit:(e:any)=>void;
}

export default function FormCardapio({HandleSubmit,fecharForm,nome,setCategory,setDescricao,setEstoque,setNome,setPreco,descricao,preco,estoque,category="Comida",}:FormCardapioProps) {
    return (
        <Modal handleClose={() => fecharForm(false)}>
            <div    >
                <h2 className="text-lg">Cadastro de Produto</h2>
                <p className="text-sm opacity-50"> Insira os valores pedidos para gerar um novo prodtuo no cardapio!</p>
                <div className="grid grid-col-1 ">
                    <div className="flex flex-col gap-10">
                        <Input
                            label="Nome do Produto"
                            handleChange={(e) => setNome(e.target.value)}
                            placeHolder="Insira o nome aqui"
                            value={nome}
                            className="pt-6"
                        />
                        <Input
                            label="Descrição do produto"
                            handleChange={(e) => setDescricao(e.target.value)}
                            placeHolder="Especificações do produto"
                            value={descricao}
                            className=""
                        />
                        <div >
                            <p className="pb-3">Selecione o tipo do produto:</p>
                            <CategoryFood
                                selectCategory={category}
                                handleChange={(str) => setCategory(str)}
                            />
                        </div>
                        <Input
                            label="Preço Unitario do Produto"
                            handleChange={(e) => setPreco(e.target.value)}
                            placeHolder="Insira o custo do produto"
                            value={preco}
                            className=""
                        />
                        <Input
                            label="Estoque atual do Produto (caso tenha)"
                            handleChange={(e) => setEstoque(e.target.value)}
                            placeHolder="Insira a quantidade de produtos no estoque"
                            value={estoque}
                        />
                        <div className="flex gap-4 justify-end">
                            <Button
                                label="Cancelar"
                                handleClick={() => fecharForm(false)}
                                disabled={false}
                                className="bg-red-500 hover:bg-red-600"
                            />
                            <Button
                                label="Cadastar"
                                handleClick={() => HandleSubmit(true)}
                                disabled={false}
                                className="bg-green-500 hover:bg-green-600"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}