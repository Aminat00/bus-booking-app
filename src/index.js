import ReactDOM from 'react-dom/client';
import MainContainer from './MainContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Redux/reducers';

const store = createStore(rootReducer, +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<MainContainer />
	</Provider>
);
