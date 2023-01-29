import { createReducer } from "@reduxjs/toolkit";

const initialState = {
   loading: false,
   yoriq: [],
};

export const yoriqIdReducer = createReducer(initialState, {
   YoriqIdRequest: (state) => {
      state.loading = true;
   },
   YoriqIdSuccess: (state, action) => {
      state.loading = false;
      state.yoriq = action.payload;
      // state.isauth = true;
      // localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
   },
   YoriqIdFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      // state.isauth = false;
   },

   //  RegisterRequest: (state) => {
   //     state.loading = true;
   //  },
   //  RegisterSuccess: (state, action) => {
   //     state.loading = false;
   //     state.user = action.payload;
   //     state.isauth = true;
   //  },
   //  RegisterFailure: (state, action) => {
   //     state.loading = false;
   //     state.error = action.payload;
   //     state.isauth = false;
   //  },

   //  LoadUserRequest: (state) => {
   //     state.loading = true;
   //  },
   //  LoadUserSuccess: (state, action) => {
   //     state.loading = false;
   //     state.user = action.payload;
   //     state.isauth = true;
   //  },
   //  LoadUserFailure: (state, action) => {
   //     state.loading = false;
   //     state.error = action.payload;
   //     state.isauth = false;
   //  },
});
