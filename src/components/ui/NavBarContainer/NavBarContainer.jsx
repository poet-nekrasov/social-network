import React from "react";
import {connect} from "react-redux";
import NavBarItem from "./NavBar/NavBar";

class NavBarContainer extends React.Component {
    render() {
        return (
            <NavBarItem
                navBar= {this.props.navBar}
            />
        );
    }
}
let mapStateToProps = (state) => ({navBar: state.navBar});

let mapDispatchToProps = (dispatch) => ({someFunc: () => console.log('hello')});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
