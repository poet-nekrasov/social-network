import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../../../utils/validators/validators";
import { Input } from "../../../../common/FormsControls/FormsControls";

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name={"login"}
          type={"text"}
          placeholder={"Login"}
          validate={[required, maxLength20]}
        />
      </div>

      <div>
        <Field
          component={Input}
          name={"password"}
          type={"text"}
          placeholder={"Password"}
          validate={[required, maxLength20]}
          typeInput={'input'}

        />
      </div>
      
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
