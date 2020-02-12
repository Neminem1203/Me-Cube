import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import uiReducer from "./ui_reducer";
import sessionReducer from "./session_reducer"
import errorReducer from "./error_reducer";

const RootReducer = combineReducers({
    entities: entitiesReducer,
    ui: uiReducer,
    session: sessionReducer,
    error: errorReducer
});
export default RootReducer;