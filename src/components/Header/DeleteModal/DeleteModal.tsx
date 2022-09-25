import Modal from '@mui/material/Modal';
import { useAppDispatch } from '../../../reduxToolkit/hooks';
import { deleteProductItem } from '../../../reduxToolkit/productsSlice';
import "./DeleteModal.scss";

function DeleteModal({ isDelete, onDeleteHandle, id }) {
    const dispatch = useAppDispatch();

    return (
        <div className='delete-window'>
            <Modal
                open={isDelete}
                onClose={onDeleteHandle}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="delete-window__description">
                    <p>
                        Are you sure you want to delete ?
                    </p>
                    <div className="delete-window__btn-container btn-container">
                        <button className='' onClick={onDeleteHandle}>
                            Close
                        </button>
                        <button onClick={() => dispatch(deleteProductItem(id))}>
                            delete
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DeleteModal;