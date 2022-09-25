import Modal from '@mui/material/Modal';
import { useAppDispatch } from '../../../reduxToolkit/hooks';
import { TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { addNewProductItem, editProductItem } from '../../../reduxToolkit/productsSlice';
import * as Yup from 'yup';
import "./ProductForm.scss";

function ProductForm({ isOpen, onClose, product }) {
    console.log(product)
    const dispatch = useAppDispatch();

    const updateProduct = (values) => {
        const editedProduct = {
            id: product.id,
            name: values.name,
            imageUrl: values.imageUrl,
            count: values.count,
            size: {
                width: values.width,
                height: values.height
            },
            weight: values.weight,
            comments: product.comments
        }
        dispatch(editProductItem(editedProduct));
        onClose();
    }

    const addNewProduct = (values) => {
        const newProduct = {
            name: values.name,
            imageUrl: values.imageUrl,
            count: values.count,
            size: {
                width: values.width,
                height: values.height
            },
            weight: values.weight,
            comments: []
        }
        console.log(newProduct)
        dispatch(addNewProductItem(newProduct));
        onClose();
    }

    const onSubmitHandler = (values) => {
        product.id ? updateProduct(values) : addNewProduct(values);
    }

    const validation = Yup.object().shape({
        name: Yup.string().min(5, "to short").max(15, "to long").required('Required'),
        imageUrl: Yup.string().required('Required'),
        width: Yup.number().required('Required'),
        height: Yup.number().required('Required'),
        weight: Yup.number().required('Required'),
        count: Yup.number().min(1, "Minimum one device item").required("Required")
    })

    const renderTextFormField = (props) => {
        const { field, meta } = props;
        return (
            <TextField
                label={field.name}
                type="text"
                {...field}
                variant="standard"
                error={meta.error && meta.touched}
                helperText={meta.error}
                size="small"
                fullWidth
            />
        );
    };

    const renderForm = ({ isValid, touched, values }) => {
        console.log(isValid, touched)
        return (
            <Form>
                <Field name="name">
                    {renderTextFormField}
                </Field>
                <Field name="imageUrl">
                    {renderTextFormField}
                </Field>
                <Field name="width">
                    {renderTextFormField}
                </Field>
                <Field name="height">
                    {renderTextFormField}
                </Field>
                <Field name="weight">
                    {renderTextFormField}
                </Field>
                <Field name="count">
                    {renderTextFormField}
                </Field>
                <button className="save-btn" type="submit" onClick={() => onSubmitHandler(values)}>
                    save edit
                </button>
            </Form>
        )
    }

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="delete-window__description">
                <p>
                    Edit your item
                </p>
                <Formik
                    initialValues={product.id ? {
                        name: product.name,
                        imageUrl: product.imageUrl,
                        count: product.count,
                        width: product.size.width,
                        height: product.size.height,
                        weight: product.weight
                    } : product}
                    validationSchema={validation}
                    enableReinitialize
                >
                    {renderForm}
                </Formik>
                <div className="edit-window__btn-container btn-container">
                    <button onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default ProductForm;