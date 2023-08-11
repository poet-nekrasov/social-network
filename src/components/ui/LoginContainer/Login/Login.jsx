import { Navigate } from "../../../../../node_modules/react-router-dom/dist/index";
import LoginForm from "./LoginForm/LoginForm";

export const Login = (props) => {
    const logIn = (formData) =>
        props.logIn(formData.email, formData.password, formData.rememberMe);

    return props.isAuth ? (
        <Navigate to={"/Profile"} />
    ) : (
        <div>
            <h1> Login </h1>

            <LoginForm onSubmit={logIn} />
        </div>
    );
};
