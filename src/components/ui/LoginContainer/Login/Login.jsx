import { Navigate } from "../../../../../node_modules/react-router-dom/dist/index";
import LoginForm from "./LoginForm/LoginForm";

export const Login = (props) => {
  const submit = ({ email, password, rememberMe }) =>
    props.logIn({ email, password, rememberMe });

  return (
    <div>
      {props.isAuth ? (
        <Navigate to={"/Profile"} />
      ) : (
        <div>
          <h1> Login </h1>

          <LoginForm onSubmit={submit} />
        </div>
      )}
    </div>
  );
};
