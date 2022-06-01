import axios from "axios";
import jwtDecode from "jwt-decode";
import { UserData, UserToLogin, UserToRegister } from "../../types/userTypes";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const registerThunk =
  (newUserData: UserToRegister) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/user/register`;

    const { data } = await axios.post<UserToRegister>(url, newUserData);
    if (data) {
      const userData: UserToLogin = {
        username: data.username,
        password: newUserData.password,
      };
      dispatch(loginThunk(userData));
    }
  };

export const loginThunk =
  (userData: UserToLogin) => async (dispatch: AppDispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/user/login`;

    const {
      data: { token },
    } = await axios.post(url, userData);

    if (token) {
      localStorage.setItem("token", token);
      const { username, adminUser } = jwtDecode<UserData>(token);
      dispatch(loginActionCreator({ username, adminUser }));
    }
  };
