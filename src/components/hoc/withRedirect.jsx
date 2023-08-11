import React from "react";
import { connect } from "../../../node_modules/react-redux/es/exports";
import { Navigate } from "../../../node_modules/react-router-dom/dist/index";
import { getIsAuth } from "../../Redux/selectors/loginSelectors";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: getIsAuth(state),
});

export const withRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return this.props.isAuth ? (
                <Component {...this.props} />
            ) : (
                <Navigate to={"/Login"} />
            );
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(
        RedirectComponent
    );

    return ConnectedRedirectComponent;
};
