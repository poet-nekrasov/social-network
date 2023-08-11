import { Preloader } from "../../../Preloader";
import { Pagination } from "./Pagination/Pagination";
import { UsersList } from "./UsersList/UsersList";

export const Users = (props) => {
    return (
        <div>
            {props.isFetching ? <Preloader /> : null}

            <Pagination
                totalUsersCount={props.totalUsersCount}
                pageUsersCount={props.pageUsersCount}
                selectedPage={props.selectedPage}
                getAllUsers={props.getAllUsers}
            />

            <UsersList
                usersList={props.usersList}
                setSub={props.setSub}
                deleteSub={props.deleteSub}
                usersIdProgressInSub={props.usersIdProgressInSub}
            />
        </div>
    );
};
