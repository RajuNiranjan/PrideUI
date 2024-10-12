import { ENV_VAR } from "@/utils/Env";
import { useDispatch } from "react-redux";
import {
  authFulFilled,
  authPending,
  authRejected,
} from "@/redux/reducers/auth.reducer";
import axios from "axios";
import { SignUpForm } from "@/components/custom/Authentication/SingUpCard";
import { LogInForm } from "@/components/custom/Authentication/LogInCard";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { API_URI } = ENV_VAR;

  const register = async ({
    userName,
    email,
    password,
    confirmPassword,
    dob,
    mobileNumber,
    acceptTerms,
    gender,
  }: SignUpForm) => {
    if (
      !userName ||
      !email ||
      !password ||
      !confirmPassword ||
      !dob ||
      !mobileNumber ||
      !acceptTerms ||
      !gender
    ) {
      console.log("all fields are required");
    }
    dispatch(authPending());
    try {
      const res = await axios.post(`${API_URI}/api/authentication/register`, {
        userName,
        email,
        password,
        dob,
        mobileNumber,
        acceptTerms,
        gender,
      });
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      dispatch(authFulFilled(res.data.user));
    } catch (error) {
      console.log(error);
      dispatch(authRejected((error as Error).message));
    }
  };

  const login = async ({ usernameOremail, password }: LogInForm) => {
    if (!usernameOremail || !password) {
      console.log("all fields are required");
    }
    dispatch(authPending());
    try {
      const res = await axios.post(`${API_URI}/api/authentication/login`, {
        usernameOremail,
        password,
      });
      dispatch(authFulFilled(res.data.user));
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.log(error);
      dispatch(authRejected((error as Error).message));
    }
  };

  return { register, login };
};
