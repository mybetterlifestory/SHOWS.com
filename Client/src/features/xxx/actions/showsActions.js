import showsApi from "../apis/showsApi";
import { showsActionTypes } from "../contants/showsActionTypes";

export const fetchShows = () => async (dispatch) => {
    const response = await showsApi.get('/shows');
    console.log(response);
    dispatch({ type: showsActionTypes.FETCH_SHOWS, payload: response.data });

    // const response = await axios.get('/shows');
    // console.log(response);
    // return {
    //     type: showsActionTypes.SET_ALL_SHOWS,
    //     payload: response,
    // };
};

// export const setAllShows = (shows) => {
//     return {
//         type: showsActionTypes.SET_ALL_SHOWS,
//         payload: shows,
//     };
// }; 