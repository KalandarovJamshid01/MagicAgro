import { useParams } from "react-router-dom";
import axios from "axios";
export const Content = (id) => async (dispatch) => {
   try {
      // alert(id);

      dispatch({
         type: "ContentRequest",
      });

      const { data } = await axios.get(
         `http://localhost:8000/api/v1/level/${id}`,

         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );
      dispatch({
         type: "ContentSuccess",
         payload: data.data,
      });

      // alert(id);
      // localStorage.setItem("profile", JSON.stringify({ ...data.user }));
   } catch (error) {
      // alert(id);

      dispatch({
         type: "ContentFailure",
         payload: error,
      });
   }
};
