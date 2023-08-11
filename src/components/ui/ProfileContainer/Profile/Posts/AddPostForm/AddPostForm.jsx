import { Field, reduxForm } from "redux-form";
import styles from "./AddPostForm.module.css";
import {
  maxLengthCreator,
  required,
} from "../../../../../../utils/validators/validators";
import { TextArea } from "../../../../../common/FormsControls/FormsControls";

const maxLength20 = maxLengthCreator(20);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={TextArea}
        name={"newPost"}
        validate={[required, maxLength20]}
        className={styles.textArea}
        placeholder={"Need to enter text is here"}
      />

      <button className={styles.buttonAdd}>Add new post</button>
    </form>
  );
};

export default reduxForm({ form: "addPost" })(AddPostForm);
