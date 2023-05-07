import axios from "axios";

export const apiSetAuthUserData = () => {

    return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
        .then(response => {
            if (response.data.resultCode === 0) {
                return response.data;
            }
        });

}
export const apiSetUserProfile = (userId) => {

    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {withCredentials: true})
        .then(response => {
                return response.data;
            }
        );

}
export const apiSetUsers = (inOnePageUsersAmount) => {

    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${inOnePageUsersAmount}`, {withCredentials: true})
        .then(response => {
                return response.data;
            }
        );

}

export const apiSetCurrentPage = (inOnePageUsersAmount, currentPage) => {

    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${inOnePageUsersAmount}&page=${currentPage}`, {withCredentials: true})
        .then(response => {
                return response.data;
            }
        );

}

export const apiFollowOnUser = (userId) => {

    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {withCredentials: true})
        .then(response => {
            if (response.data.resultCode === 0) {
                return response.data;
            }
        });

}

export const apiUnfollowFromUser = (userId) => {

    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {withCredentials: true})
        .then(response => {
            if (response.data.resultCode === 0) {
                return response.data;
            }
        });

}