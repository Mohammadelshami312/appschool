/* Readable Scalable Secure */
import { createStore } from 'redux';
import { ENGLISH } from '../languages';
import reducer from './reducer';

// Initial Store
const initialStore = {
    language: ENGLISH
}
// Create Store
const store = createStore(reducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
