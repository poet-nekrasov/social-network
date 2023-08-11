import React from "react";
import { connect } from "react-redux";
import NavBarItem from "./NavBar/NavBar";
class NavBarContainer extends React.Component {
  render() {
    return <NavBarItem navBarNames={this.props.navBarNames} />;
  }
}
let mapStateToProps = (state) => ({ navBarNames: state.navBar.navBarNames });

export default connect(mapStateToProps, {})(NavBarContainer);
