import Modal from "../layout/Modal";
import Button from "./Button";

interface ConfirmModalProps {
    fecharConfirmModal: () => void;
    h2:string;
    p:string;
    labelConfirm?:string;
    handleSubmit: ()=>void;
}

export default function ModalGenerico({
    fecharConfirmModal,
    h2,
    p,
    labelConfirm="Confirmar",
    handleSubmit
}: ConfirmModalProps) {
    return (
        <Modal handleClose={fecharConfirmModal}>
            <div className=" flex flex-col gap-3">
                <div className="p-2">
                    <h2 className="text-lg pb-3">{h2}</h2>
                    <p className="text-sm opacity-50">{p}</p>
                </div>
                <div className="flex gap-4 justify-end">
                    <Button
                        label="Voltar"
                        handleClick={fecharConfirmModal}
                        disabled={false}
                        className="bg-red-500 hover:bg-red-600"
                    />
                    <Button
                        label={labelConfirm}
                        handleClick={handleSubmit}
                        disabled={false}
                        className="bg-green-500 hover:bg-green-600"
                    />
                </div>
            </div>
        </Modal>
    )
}