import {connect} from "react-redux";
import NavBar from "./NavBar/NavBar";

let mapStateToProps = (state) => ({navBarNames: state.navBar.navBarNames});

let mapDispatchToProps = (dispatch) => ({someFunc: () => console.log('hello')});

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;