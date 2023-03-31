import React from "react";
import {connect} from "react-redux";
import Users from "./Users/Users";
import {
    followOnUser,
    setCurrentPage,
    setUsers, toggleIsFetching,
    unfollowFromUser
} from "../../../Redux/reducers/usersReducer";
import axios from "axios";
import {Preloader} from "../../Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.users.inOnePageUsersAmount}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });

    }

    onSetCurrentPage = (currentPage) => {

        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPage);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.users.inOnePageUsersAmount}&page=${currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
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
                    onFollowOnUser={this.props.followOnUser}
                    onUnfollowFromUser={this.props.unfollowFromUser}

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


