import { Field, reduxForm } from "redux-form";
import classes from "./SendMessageForm.module.css";
import { TextArea } from "../../../../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../../../../utils/validators/validators";

const maxLength20 = maxLengthCreator(20);

const SendMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={TextArea}
        name={"newMessage"}
        placeholder={"New message"}
        className={classes.textArea}
        validate={[required, maxLength20]}
      />

      <button className={classes.buttonSend}>
        Send message
      </button>
    </form>
  );
};

export default reduxForm({form: 'sendMessage'})(SendMessageForm);
