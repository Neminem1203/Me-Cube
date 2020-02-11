import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";

const RootReducer = combineReducers({
    entities: entitiesReducer    
});
export default RootReducer;