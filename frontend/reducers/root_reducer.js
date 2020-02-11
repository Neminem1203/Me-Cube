import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import uiReducer from "./ui_reducer";
import sessionReducer from "./session_reducer"

const RootReducer = combineReducers({
    entities: entitiesReducer,
    ui: uiReducer,
    session: sessionReducer
});
export default RootReducer;