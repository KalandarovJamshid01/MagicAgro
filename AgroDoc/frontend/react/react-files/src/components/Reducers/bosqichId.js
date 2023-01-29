import { createReducer } from "@reduxjs/toolkit";

const initialState = {
   loading: false,
   bosqich: [],
};

export const BosqichIdReducer = createReducer(initialState, {
   BosqichIdRequest: (state) => {
      state.loading = true;
   },
   BosqichIdSuccess: (state, action) => {
      state.loading = false;
      state.yoriq = action.payload;
      // state.isauth = true;
      // localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
   },
   BosqichIdFailure: (state, action) => {
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
