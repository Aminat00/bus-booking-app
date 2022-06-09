import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './MainContainer';
import Payment from './Payment/Payment';
import ShowResultMain from './ShowResultsPage/ShowResultMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<MainContainer />} />
			<Route path='ShowResultMain' element={<ShowResultMain />} />
			<Route path='Payment' element={<Payment />} />
		</Routes>
	</BrowserRouter>
);
