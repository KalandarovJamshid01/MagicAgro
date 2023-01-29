import axios from "axios";
import { useCookies } from "react-cookie";

import React from "react";
import { useNavigation, Redirect, useHistory } from "react-router-dom";

export const loginUser = (email, password, history) => async (dispatch) => {
   try {
      dispatch({
         type: "LoginRequest",
      });

      const { data } = await axios.post(
         "http://localhost:8000/api/v1/login",
         { email, password },
         {
            withCredentials: true,
         }
      );
      console.log(data);

      dispatch({
         type: "LoginSuccess",
         payload: data.user,
      });

      localStorage.setItem("token", JSON.stringify(data));
      history.push("/");
   } catch (error) {
      dispatch({
         type: "LoginFailure",
         payload: error,
      });
      alert(error.message);
   }
};

export const loadUser = () => async (dispatch) => {
   try {
      dispatch({
         type: "LoadUserRequest",
      });

      const { data } = await axios.get(
         "http://localhost:8000/api/v1/me",

         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );

      dispatch({
         type: "LoadUserSuccess",
         payload: data.user,
      });
      localStorage.setItem("token", data.user);
   } catch (error) {
      dispatch({
         type: "LoadUserFailure",
         payload: error,
      });
   }
};

export const registerUser = (name, email, password, photo) => async (dispatch) => {
   try {
      dispatch({
         type: "RegisterRequest",
      });

      const { data } = await axios.post(
         "http://localhost:8000/api/v1/register",
         { name, email, password, photo },
         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );

      dispatch({
         type: "RegisterSuccess",
         payload: data.user,
      });
   } catch (error) {
      dispatch({
         type: "RegisterFailure",
         payload: error,
      });
   }
};
