import { createStore } from "redux"
import cakeReduer from "./cakeReducer"

const reduxStore = createStore(cakeReduer);

export default reduxStore;