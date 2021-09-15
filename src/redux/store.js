import { compose, createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/index.js';
import createSagaMiddleware from 'redux-saga';
import RootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware(RootSaga)

const store = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension(),
)(createStore)(RootReducer);

sagaMiddleware.run(RootSaga);

export default store;