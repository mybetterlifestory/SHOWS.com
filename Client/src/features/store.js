import { configureStore } from "@reduxjs/toolkit";
import showsReducer from "./publicShows/showsSlice";
// import authReducer from "./profile/authSlice";
import userReducer from "./profile/userSlice";
import memberReducer from "./profile/memberSlice";
import dashShowsReducer from "./dashShows/dashShowsSlice";
import dashMembersReducer from "./dashMembers/dashMembersSlice";
import dashSubscriptionsReducer from "./dashSubscriptions/dashSubSlice";
import dashUsersReducer from "./dashUsers/dashUsersSlice";

export const store = configureStore({
    reducer: {
        shows: showsReducer,
        // auth: authReducer,
        user: userReducer,
        member: memberReducer,
        dashShows: dashShowsReducer,
        dashMembers: dashMembersReducer,
        dashSubs: dashSubscriptionsReducer,
        dashUsers: dashUsersReducer
    },
});