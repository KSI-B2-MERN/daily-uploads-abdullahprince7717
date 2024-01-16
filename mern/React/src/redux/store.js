import { createStore } from "redux"
import cakeReducer from "./cakeReducer"

const reduxStore = createStore(cakeReducer);

export default reduxStore;