import { useParams } from "react-router-dom";
import axios from "axios";
export const BosqichId = (id) => async (dispatch) => {
   try {
      dispatch({
         type: "BosqichIdRequest",
      });

      const { data } = await axios.get(
         `http://localhost:8000/api/v1/littlecategory/${id}`,

         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );

      dispatch({
         type: "BosqichIdSuccess",
         payload: data.data.little,
      });

      // localStorage.setItem("profile", JSON.stringify({ ...data.user }));
   } catch (error) {
      dispatch({
         type: "BosqichIdFailure",
         payload: error,
      });
   }
};
