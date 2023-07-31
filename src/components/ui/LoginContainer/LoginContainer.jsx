import React from "react";
import { Login } from "./Login/Login";
import { connect } from "../../../../node_modules/react-redux/es/exports";
import { logIn } from "./../../../Redux/reducers/authReducer";
class LoginContainer extends React.Component {
  render() {
    return (
      <div>
        <Login
          isAuth={this.props.isAuth}
          logIn={this.props.logIn}
          logOut={this.props.logOut}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  id: state.authData.id,
  email: state.authData.email,
  login: state.authData.login,
  isAuth: state.authData.isAuth,
});

export default connect(mapStateToProps, { logIn })(LoginContainer);
