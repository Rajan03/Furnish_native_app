import {Formik} from "formik";

const FormikForm = ({validationSchema, initialState, onSubmit, children}) => {
    return (
        <Formik initialValues={initialState}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {(props) => (
                <>
                    {children({...props,})}
                </>
            )}
        </Formik>
    );
};

export default FormikForm;
