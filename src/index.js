import store from './Redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import StoreContext from './StoreContext';

let render = (state) => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>, document.getElementById('root'));
}

render(store.getState());

store.subscribe(() => {
    let state = store.getState();
    render(state)
})






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();