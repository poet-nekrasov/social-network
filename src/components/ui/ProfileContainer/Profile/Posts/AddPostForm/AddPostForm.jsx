import { Field, reduxForm } from "redux-form";
import classes from "./AddPostForm.module.css";
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
        className={classes.textArea}
        placeholder={"Need to enter text is here"}
      />

      <button className={classes.buttonAdd}>Add new post</button>
    </form>
  );
};

export default reduxForm({ form: "addPost" })(AddPostForm);
