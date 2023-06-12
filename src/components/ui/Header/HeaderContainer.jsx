import React from "react";
import Header from "./HeaderContainer/Header";
import { connect } from "react-redux";
import { setAuthData } from "../../../Redux/reducers/authReducer";
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthData();
  }

  render() {
    return (
      <Header
        id={this.props.auth.id}
        email={this.props.auth.email}
        login={this.props.auth.login}
        isAuth={this.props.auth.isAuth}
      />
    );
  }
}

let mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps, { setAuthData })(HeaderContainer);
