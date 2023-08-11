import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "1ff82408-e92f-4ead-95a8-bc0197add936",
    },
});

export const authUserAPI = {
    me() {
        return instance.get("auth/me").then((response) => response.data);
    },

    logIn({ email, password, rememberMe }) {
        return instance
            .post("auth/login", { email, password, rememberMe })
            .then((response) => response.data);
    },

    logOut() {
        return instance.delete("auth/login").then((response) => response.data);
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/` + userId)
            .then((response) => response.data);
    },

    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then((response) => response.data);
    },

    updateStatus(status) {
        return instance
            .put(`profile/status`, { status })
            .then((response) => response.data);
    },
};

export const usersAPI = {
    getAllUsers(selectedPage, pageUsersCount) {
        return instance
            .get(`users?count=${pageUsersCount}&page=${selectedPage}`)
            .then((response) => response.data);
    },

    getUsersSelectedPage(pageUsersCount, selectedPage) {
        return instance
            .get(`users?count=${pageUsersCount}&page=${selectedPage}`)
            .then((response) => response.data);
    },

    setSub(userId) {
        return instance
            .post(`follow/${userId}`, {})
            .then((response) => response.data);
    },

    deleteSub(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then((response) => response.data);
    },
};
