import {connect} from "react-redux";
import Users from "./Users/Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../../Redux/reducers/usersReducer";

let mapStateToProps = (state) => ({users: state.usersPage.users});

let mapDispatchToProps = (dispatch) => ({
    setUsers: (users) => dispatch(setUsersActionCreator(users)),
    followOnUser: (userId) => dispatch(followActionCreator(userId)),
    unfollowFromUser: (userId) => dispatch(unfollowActionCreator(userId))
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
