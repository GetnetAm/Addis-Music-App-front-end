import { combineReducers} from "redux"
import musicsReducer from "./reducer"

const rootReducer=combineReducers({
    data: musicsReducer
});


export default rootReducer;