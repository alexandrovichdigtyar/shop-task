import { Button, TextareaAutosize } from "@mui/material";
import { Form, Formik } from "formik";
import { useAppDispatch } from "../../../../reduxToolkit/hooks";
import { editProductItem } from "../../../../reduxToolkit/productsSlice";
import CommentSlide from "./CommentSlide/CommentSlide";

function Comments({ currentProduct }) {
    const dispatch = useAppDispatch();

    const onsubmitHandler = (props) => {
        const comment = {
            productId: currentProduct.id,
            description: props.description,
            data: Date.now(),
        }

        const updatedProduct = {
            ...currentProduct,
            comments: [...currentProduct.comments, comment]
        }

        console.log(updatedProduct)

        dispatch(editProductItem(updatedProduct));
    }

    const renderCommentForm = (props) => {
        return (
            <Form>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Minimum 3 rows"
                    style={{ width: 200 }}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    name="description"
                    value={props.values.description}
                >
                </TextareaAutosize>
                <Button type="submit">
                    Send
                </Button>
            </Form>
        )
    }

    return (
        <>
            <Formik
                initialValues={{ description: "" }}
                onSubmit={onsubmitHandler}
            >
                {renderCommentForm}
            </Formik>
            {currentProduct.comments.map(comment => (
                <CommentSlide key={comment.id} commentary={comment} />
            ))}
        </>
    )
}

export default Comments;