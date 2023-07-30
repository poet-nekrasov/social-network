import LoginForm from "./LoginForm/LoginForm";

export const Login = (props) => {
  const submit = (formData) => {
    console.log(formData);
  }
  
  return (
    <div>
      <h1> Login </h1>
      <LoginForm onSubmit={submit}/>
    </div>
  );
};

