import { compose, createStore } from 'redux';
import RootReducer from './reducers/index.js';

const store = compose(
    window.devToolsExtension && window.devToolsExtension(),
)(createStore)(RootReducer);

export default store;