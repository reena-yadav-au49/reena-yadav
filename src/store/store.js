//  Store Will Be Stored Here
import AllReducer from "../reducers/allReducer";
import { createStore } from "redux";

const Store = createStore(AllReducer);

// Give Updated State
// Store.subscribe(() => {
//   console.log("Store :", Store.getState());
// });

function StateMapper(state) {
  return state;
}

export { Store, StateMapper };
