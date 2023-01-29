import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { yoriqReducer } from "./yoriq";
import { yoriqIdReducer } from "./yoriqId";
import { BosqichIdReducer } from "./bosqichId";
import { contentReducer } from "./content";

const store = configureStore({
   reducer: {
      user: userReducer,
      yoriqnoma: yoriqReducer,
      yoriqId: yoriqIdReducer,
      bosqichId: BosqichIdReducer,
      content: contentReducer,
   },
});

export default store;
