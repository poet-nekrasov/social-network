import React from "react";
import {connect} from "react-redux";
import Users from "./Users/Users";
import {
    followOnUser,
    setCurrentPage,
    setUsers, toggleIsFetching, toggleIsFetchingFollow,
    unfollowFromUser
} from "../../../Redux/reducers/usersReducer";
import {Preloader} from "../../Preloader";
import {usersAPI} from "../../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.users.inOnePageUsersAmount)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
            });


    }

    onSetCurrentPage = (currentPage) => {

        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPage);

        usersAPI.getCurrentPage(this.props.users.inOnePageUsersAmount, currentPage)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
            });

    }

    onFollowOnUser = (userId) => {

        this.props.toggleIsFetchingFollow(true, userId);

        usersAPI.postSubOnUser(userId)
            .then(data => {
                this.props.followOnUser(userId);
                this.props.toggleIsFetchingFollow(false, userId);
            });

    }

    onUnfollowFromUser = (userId) => {

        this.props.toggleIsFetchingFollow(true, userId);

        usersAPI.deleteSubOnUser(userId)
            .then(data => {
                this.props.unfollowFromUser(userId);
                this.props.toggleIsFetchingFollow(false, userId);
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
                    isFetchingFollow={this.props.users.isFetchingFollow}

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

    toggleIsFetching,
    toggleIsFetchingFollow

})(UsersContainer);


