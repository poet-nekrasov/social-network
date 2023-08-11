import React from "react";
import { Login } from "./Login/Login";
import { connect } from "../../../../node_modules/react-redux/es/exports";
import { logIn } from "./../../../Redux/reducers/authReducer";
import { getIsAuth } from "../../../Redux/selectors/loginSelectors";
class LoginContainer extends React.Component {
  render() {
    return (
      <div>
        <Login isAuth={this.props.isAuth} logIn={this.props.logIn} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
});

export default connect(mapStateToProps, { logIn })(LoginContainer);
