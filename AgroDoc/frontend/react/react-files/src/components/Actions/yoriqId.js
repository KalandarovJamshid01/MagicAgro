import { useParams } from "react-router-dom";
import axios from "axios";
export const yoriqId = (id) => async (dispatch) => {
   try {
      dispatch({
         type: "YoriqIdRequest",
      });

      const { data } = await axios.get(
         `http://localhost:8000/api/v1/category/${id}`,

         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );

      dispatch({
         type: "YoriqIdSuccess",
         payload: data.data.littlecategory,
      });

      // localStorage.setItem("profile", JSON.stringify({ ...data.user }));
   } catch (error) {
      dispatch({
         type: "YoriqIdFailure",
         payload: error,
      });
   }
};
