import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "1ff82408-e92f-4ead-95a8-bc0197add936",
  },
});

export const authUserAPI = {
  getAuthData() {
    return instance.get("auth/me").then((response) => {
      if (response.data.resultCode === 0) {
        return response.data;
      }
    });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => response.data);
  },

  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },

  updateStatus(status) {
    return instance.put(`profile/status`, {status}).then((response) => {
      if (response.data.resultCode === 0) {
        return response.data;
      }
    });
  },
};

export const usersAPI = {
  getUsers(onePageUsersAmount) {
    return instance
      .get(`users?count=${onePageUsersAmount}`)
      .then((response) => response.data);
  },

  getUsersSelectedPage(onePageUsersAmount, currentPage) {
    return instance
      .get(`users?count=${onePageUsersAmount}&page=${currentPage}`)
      .then((response) => response.data);
  },

  setSub(userId) {
    return instance
      .post(`follow/${userId}`, {}, { withCredentials: true })
      .then((response) => {
        if (response.data.resultCode === 0) {
          return response.data;
        }
      });
  },

  deleteSub(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      if (response.data.resultCode === 0) {
        return response.data;
      }
    });
  },
};
