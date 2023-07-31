import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../../../utils/validators/validators";
import { Input } from "../../../../common/FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name={"email"}
          type={"text"}
          placeholder={"Email"}
          validate={[required, maxLength30]}
        />
      </div>

      <div>
        <Field
          component={Input}
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          validate={[required, maxLength30]}
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
