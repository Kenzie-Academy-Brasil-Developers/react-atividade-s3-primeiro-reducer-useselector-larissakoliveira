import { createStore, combineReducers } from "redux";

import counterResultsReducer from './modules/CounterResults/reducer'
import fruitsReducer from './modules/Fruits/reducer'

const reducers = combineReducers({result: counterResultsReducer, fruits: fruitsReducer})

const store = createStore(reducers)

export default store;