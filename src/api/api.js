import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "97ae458f-02ef-447a-823a-4a2bd01e0b55" },
});

export const usersAPI = {

  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then((resp) => resp.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`)
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },

  getProfile(userId) {
    return instance.get(`profile/` + userId)
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}
