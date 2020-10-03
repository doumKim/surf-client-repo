const baseUrl = "http://localhost:4000";

// 글 상세 페이지 데이터 조회
export function getWaveDetail(id) {
  return fetch(`${baseUrl}/post/wave/${id}`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
  });
}

export const getPhase = (id, cur) =>
  fetch(`${baseUrl}/post/phaseWave/${id}/?phase=${cur}`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
  });

export const sendLike = id =>
  fetch(`${baseUrl}/post/like/${id}`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const postPhaseWave = (id, phaseId, data) =>
  fetch(`${baseUrl}/post/createPhaseWave/${id}?currentPhase=${phaseId}`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

export const createWave = data =>
  fetch(`${baseUrl}/post/createWave`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    body: data,
  });

export const searchWave = (category, sort = "created_at") =>
  fetch(`${baseUrl}/post/allWave?category=${category}&sort=${sort}`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
  });

// /post/id/id -> 갔을 떄 권한 부여
export const createCurrentJoinUser = id =>
  fetch(`${baseUrl}/post/createCurrentJoinUser/${id}`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
  });

export const removeCurrentJoinUser = id =>
  fetch(`${baseUrl}/post/removeCurrentJoinUser/${id}`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
  });

export const getLikeWave = () =>
  fetch(`${baseUrl}/post/likeWave`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
  });
