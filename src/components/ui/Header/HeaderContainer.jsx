import React from "react";
import {setAuthUserData} from "../../../Redux/reducers/authReducer";
import Header from "./HeaderContainer/Header";
import {connect} from "react-redux";
import {authUserAPI} from "../../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {

        authUserAPI.getAuthUserData()
            .then(data => {
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login);
            });

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

let mapStateToProps = (state) => ({auth: state.auth});
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);