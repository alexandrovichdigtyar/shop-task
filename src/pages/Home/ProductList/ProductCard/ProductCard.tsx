import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from '../../../../components/Header/DeleteModal/DeleteModal';
import ProductForm from '../../../../components/Header/ProductForm/ProductForm';
import './ProductCard.scss';

function ProductCard({ product }: any) {
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const onEditHandle = () => {
        setIsEdit(!isEdit);
    }

    const onDeleteHandle = () => {
        setIsDelete(!isDelete);
    }

    return (
        <>
            <div className="product-card">
                <img
                    className="product-card__picture"
                    width="220"
                    height="220"
                    src={product.imageUrl}
                    alt="product" />

                <p className="product-card__description">
                    {product.name}
                </p>

                <p className="product-card__parameter">
                    Size:
                    {product.size.width}
                </p>
                <p className="product-card__parameter">
                    Heigth:
                    {product.size.height}
                </p>
                <p className="product-card__parameter">
                    Weigth:
                    {product.weight}
                </p>
                <div className='product-card__btn-container'>
                    <button className="product-card__btn" onClick={onEditHandle}>
                        Edit
                    </button>
                    <button className="product-card__btn" onClick={onDeleteHandle}>
                        Delete
                    </button>
                    <Link to={`/products/?id=${product.id}`}>
                        More
                    </Link>
                    <p>
                        {product.count}
                    </p>
                </div>
            </div>
            {isEdit && (<ProductForm isOpen={isEdit} onClose={onEditHandle} product={product} />)}
            {isDelete && (<DeleteModal isDelete={isDelete} onDeleteHandle={onDeleteHandle} id={product.id} />)}
        </>
    )
}

export default ProductCard;