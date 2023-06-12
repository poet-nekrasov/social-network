import React from "react";
import { connect } from "react-redux";
import Users from "./Users/Users";
import {
  setSub,
  getUsersSelectedPage,
  getUsers,
  deleteSub,
} from "../../../Redux/reducers/usersReducer";
import { Preloader } from "../../Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.users.onePageUsersAmount);
  }

  handleGetUsers = (selectedPage) => {
    return this.props.getUsersSelectedPage(
      this.props.users.onePageUsersAmount,
      selectedPage
    );
  };

  handleFollow = (userId) => this.props.setSub(userId);

  handleUnfollow = (userId) => this.props.deleteSub(userId);

  render() {
    return (
      <>
        {this.props.users.isFetching ? <Preloader /> : null}

        <Users
          usersList={this.props.users.usersList}
          usersAmount={this.props.users.usersAmount}
          onePageUsersAmount={this.props.users.onePageUsersAmount}
          selectedPage={this.props.users.selectedPage}
          buttonFollow={this.props.users.buttonFollow}
          buttonUnfollow={this.props.users.buttonUnfollow}
          idUsers={this.props.users.idUsers}
          handleGetUsers={this.handleGetUsers}
          handleFollow={this.handleFollow}
          handleUnfollow={this.handleUnfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => ({ users: state.usersPage });
export default connect(mapStateToProps, {
  getUsers,
  getUsersSelectedPage,
  setSub,
  deleteSub,
})(UsersContainer);
