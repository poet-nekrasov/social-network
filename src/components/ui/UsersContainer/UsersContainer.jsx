import React from "react";
import {connect} from "react-redux";
import Users from "./Users/Users";
import {
    followOnUser,
    getCurrentPage,
    getUsers, toggleIsFetching, toggleIsFetchingFollow,
    unfollowFromUser
} from "../../../Redux/reducers/usersReducer";
import {Preloader} from "../../Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    getCurrentPage = (currentPage) => this.props.getCurrentPage(currentPage);

    followOnUser = (userId) => this.props.followOnUser(userId);

    unfollowFromUser = (userId) => this.props.unfollowFromUser(userId);

    render() {
        return (
            <>
                {this.props.users.isFetching ? <Preloader/> : null}

                <Users
                    usersList={this.props.users.usersList}
                    totalUsersAmount={this.props.users.totalUsersAmount}
                    inOnePageUsersAmount={this.props.users.inOnePageUsersAmount}
                    currentPage={this.props.users.currentPage}
                    followButtonValue={this.props.users.followButtonValue}
                    unfollowButtonValue={this.props.users.unfollowButtonValue}
                    isFetchingFollow={this.props.users.isFetchingFollow}

                    getCurrentPage={this.getCurrentPage}
                    followOnUser={this.followOnUser}
                    unfollowFromUser={this.unfollowFromUser}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => ({users: state.usersPage});
export default connect(mapStateToProps, {
    getUsers,
    followOnUser,
    unfollowFromUser,

    getCurrentPage,

    toggleIsFetching,
    toggleIsFetchingFollow
})(UsersContainer);


