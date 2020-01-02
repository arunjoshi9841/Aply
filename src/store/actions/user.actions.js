export const SET_USER="SET_USER";

export function setUser(value) {
    return {
      type: SET_USER,
      payload: value
    };
  }