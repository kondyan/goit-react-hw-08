import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import numberNormalize from "../../util/numberNormalize.js";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations";

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = ({ ...values }, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactsSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className={css.form}>
          <div className={css.nameFieldWrapper}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={css.nameField}
              name="name"
              autoComplete="off"
              id={nameFieldId}
              onChange={(e) => {
                const temp = e.target.value;
                const normalizeValue = temp.replace(" ", "-");

                setFieldValue("name", normalizeValue);
              }}
              value={values.name}
            />
            <ErrorMessage
              className={css.errorName}
              name="name"
              component="span"
            />
          </div>
          <div className={css.numberFieldWrapper}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={css.numberField}
              name="number"
              autoComplete="off"
              id={numberFieldId}
              onChange={(e) => {
                const temp = e.target.value;
                const normalizeValue = numberNormalize(temp);

                setFieldValue("number", normalizeValue);
              }}
              value={values.number}
            />
            <ErrorMessage
              className={css.errorNumber}
              name="number"
              component="span"
            />
          </div>
          <button className={css.submitBtn} type="submit">
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
