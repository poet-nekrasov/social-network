import React from "react";
import { connect } from "../../../../node_modules/react-redux/es/exports";
import {
    setSub,
    deleteSub,
    getAllUsers,
} from "../../../Redux/reducers/usersReducer";
import {
    getIsFetching,
    getPageSize,
    getSelectedPage,
    getTotalUsersCount,
    getUsersId,
    getUsersList,
} from "../../../Redux/selectors/usersSelectors";
import { Users } from "./Users/Users";
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getAllUsers(
            this.props.selectedPage,
            this.props.pageUsersCount
        );
    }

    render() {
        return (
            <>
                <Users
                    isFetching={this.props.isFetching}
                    usersList={this.props.usersList}
                    pageUsersCount={this.props.pageUsersCount}
                    selectedPage={this.props.selectedPage}
                    usersIdProgressInSub={this.props.usersIdProgressInSub}
                    totalUsersCount={this.props.totalUsersCount}
                    
                    getAllUsers={this.props.getAllUsers}
                    setSub={this.props.setSub}
                    deleteSub={this.props.deleteSub}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => ({
    isFetching: getIsFetching(state),
    usersList: getUsersList(state),
    pageUsersCount: getPageSize(state),
    selectedPage: getSelectedPage(state),
    usersIdProgressInSub: getUsersId(state),
    totalUsersCount: getTotalUsersCount(state),
});

export default connect(mapStateToProps, {
    getAllUsers,
    setSub,
    deleteSub,
})(UsersContainer);
