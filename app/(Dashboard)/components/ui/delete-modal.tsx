import Button from "@/app/(landing)/components/ui/button";
import Modal from "./modal";

type TDeleteModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
};

const DeleteModal = ({ isOpen, onClose, onConfirm }: TDeleteModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Delete Item">
            <p className="mx-3 mt-1">
                Are You sure want to delete this item ? If you click delete. it will
                permanently removed.
            </p>
            <div className="flex gap-5 mt-5 mb-1">
               <Button variant="ghost" className="w-full rounded-md" onClick={onClose}>
                 Cancel
               </Button>
               <Button variant="ghost" className="w-full rounded-md" onClick={onConfirm}>
                 Yes, Delete it
               </Button>
            </div>
        </Modal>
    )
}


export default DeleteModal;