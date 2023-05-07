import React from "react";
import {connect} from "react-redux";
import Users from "./Users/Users";
import {
    followOnUser,
    setCurrentPage,
    setUsers, toggleIsFetching,
    unfollowFromUser
} from "../../../Redux/reducers/usersReducer";
import {Preloader} from "../../Preloader";
import {apiFollowOnUser, apiSetCurrentPage, apiSetUsers, apiUnfollowFromUser} from "../../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true);

        apiSetUsers(this.props.users.inOnePageUsersAmount)

            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            });

    }

    onSetCurrentPage = (currentPage) => {

        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPage);

        apiSetCurrentPage(this.props.users.inOnePageUsersAmount, currentPage)

            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            });

    }

    onFollowOnUser = (userId) => {

        apiFollowOnUser(userId)
            .then(data => {
                this.props.followOnUser(userId);
            });

    }

    onUnfollowFromUser = (userId) => {

        apiUnfollowFromUser(userId)
            .then(data => {
                this.props.unfollowFromUser(userId);
            });

    }

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

                    onSetCurrentPage={this.onSetCurrentPage}
                    onFollowOnUser={this.onFollowOnUser}
                    onUnfollowFromUser={this.onUnfollowFromUser}

                />

            </>

        );

    }

}

let mapStateToProps = (state) => ({users: state.usersPage});
export default connect(mapStateToProps, {

    setUsers,
    followOnUser,
    unfollowFromUser,

    setCurrentPage,

    toggleIsFetching

})(UsersContainer);


