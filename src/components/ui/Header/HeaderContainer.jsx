import React from "react";
import Header from "./HeaderContainer/Header";
import { connect } from "../../../../node_modules/react-redux/es/exports";
import { logOut } from "./../../../Redux/reducers/authReducer";
class HeaderContainer extends React.Component {
  render() {
    return (
      <Header
        id={this.props.authData.id}
        email={this.props.authData.email}
        login={this.props.authData.login}
        isAuth={this.props.authData.isAuth}
        logOut={this.props.logOut}
      />
    );
  }
}

let mapStateToProps = (state) => ({ authData: state.authData });
export default connect(mapStateToProps, { logOut })(HeaderContainer);
