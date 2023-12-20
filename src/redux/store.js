/*
  ! store etme
  * redux kütüphanesinden createStore methodu import edile
  * store içinde tutulan veriler kategorize ve herbiri için reducer yapıle
  * edilen reducerler combineReducers methodu bilen birleşdirilyar
  * store' a emele gelen birleşen reducer tanılılır
  * Emele gelen store projeda görkezmek
  
*/

import {combineReducers, createStore} from "redux";
import todoReducer from "./reducers/todoReducer";
import categoryReducer from "./reducers/categoryReducer";
 
// birden kop reducer barsa birleşdirile
const rootReducer = combineReducers(
   {
       todoReducer,
       categoryReducer,
   }
);
export default  createStore(rootReducer);