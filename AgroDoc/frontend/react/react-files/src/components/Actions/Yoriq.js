import axios from "axios";

export const loadYoriq = () => async (dispatch) => {
   try {
      dispatch({
         type: "YoriqRequest",
      });

      const { data } = await axios.get(
         "http://localhost:8000/api/v1/category",

         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );

      dispatch({
         type: "YoriqSuccess",
         payload: data.bigcategory,
      });
   } catch (error) {
      dispatch({
         type: "YoriqFailure",
         payload: error,
      });
   }
};

export const AddYoriq = (name, photo) => async (dispatch) => {
   //  const navigate = useNavigation();
   try {
      dispatch({
         type: "YoriqRequest",
      });

      const { data } = await axios.post("http://localhost:8000/api/v1/category", { name, photo });

      dispatch({
         type: "YoriqSuccess",
         payload: data.data,
      });

      // localStorage.setItem("profile", JSON.stringify({ ...data.user }));
   } catch (error) {
      dispatch({
         type: "YoriqFailure",
         payload: error,
      });
   }
};
