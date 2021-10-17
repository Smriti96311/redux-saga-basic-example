import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./ducks/user";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const reducer = combineReducers({
  user: userReducer
});

const store = createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(watcherSaga);

export default store;
