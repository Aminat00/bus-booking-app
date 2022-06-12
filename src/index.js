import ReactDOM from 'react-dom/client';
import MainContainer from './MainContainer';
import { Provider } from 'react-redux';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<MainContainer />
	</Provider>
);
