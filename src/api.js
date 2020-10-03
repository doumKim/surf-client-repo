import { baseUrl } from "./constants/GlobalVariables";

export const signInAPI = data =>
  fetch(`${baseUrl}/auth/signIn`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

export const signOutAPI = () =>
  fetch(`${baseUrl}/auth/signOut`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
  });

export const signUpAPI = data =>
  fetch(`${baseUrl}/auth/signUp`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

export const getUserInfoAPI = () =>
  fetch(`${baseUrl}/user/userinfo`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
  });

export const changePasswordAPI = data =>
  fetch(`${baseUrl}/user/password`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

export const changeImageAPI = data =>
  fetch(`${baseUrl}/user/changeImage`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    body: data,
  });

export const myPageInfoAPI = () =>
  fetch(`${baseUrl}/user/countPosts`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
  });

export const likePostsAPI = () =>
  fetch(`${baseUrl}/post/likeWave`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
  });

export const myWavesAPI = (sort, count = 0) => {
  if (count) {
    return fetch(`${baseUrl}/post/myWaveList?count=${count}&sort=${sort}`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
  } else {
    return fetch(`${baseUrl}/post/myWaveList?sort=${sort}`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
  }
};

export const joinWavesAPI = (count = 0) => {
  if (count) {
    return fetch(`${baseUrl}/post/joinWaveList?count=${count}`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
  } else {
    return fetch(`${baseUrl}/post/joinWaveList`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
  }
};

export const getAllWavesAPI = (sort, category) => {
  if (category) {
    return fetch(`${baseUrl}/post/allWave?category=${category}&sort=${sort}`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
  } else {
    return fetch(`${baseUrl}/post/allWave?sort=${sort}`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
  }
};
