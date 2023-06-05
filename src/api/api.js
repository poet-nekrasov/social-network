import axios from "axios";

const sample = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1ff82408-e92f-4ead-95a8-bc0197add936'
    }
});

export const authUserAPI = {
    getAuthUserData() {
        return sample.get('auth/me')
            .then(response => {
                if (response.data.resultCode === 0) {
                    return response.data;
                }
            });
    }
}

export const myProfileAPI = {
    getUserProfile(userId) {
        return sample.get(`profile/${userId}`)
            .then(response => response.data);
    }
}

export const usersAPI = {
    getUsers(inOnePageUsersAmount) {
        return sample.get(`users?count=${inOnePageUsersAmount}`)
            .then(response => response.data);
    },

    getCurrentPage(inOnePageUsersAmount, currentPage) {
        return sample.get(`users?count=${inOnePageUsersAmount}&page=${currentPage}`)
            .then(response =>  response.data);
    },

    postSubUser(userId) {
        return sample.post(`follow/${userId}`, {}, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    return response.data;
                }
            });
    },

    deleteSubUser(userId) {
        return sample.delete(`follow/${userId}`)
            .then(response => {
                if (response.data.resultCode === 0) {
                    return response.data;
                }
            });
    }
}
