import React from "react";
import { connect } from "../../../node_modules/react-redux/es/exports";
import { Navigate } from "../../../node_modules/react-router-dom/dist/index";

let mapStateToPropsForRedirect = (state) => (
    {
        isAuth: state.auth.isAuth,
    }
);

export const withRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) { return <Navigate to='/Login' /> }

            return <Component {...this.props} />
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedRedirectComponent;
}
