import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import ResponsiveAppBar from './MenuBar';

function App() {
	return (
		<div className='App'>
			<ResponsiveAppBar />
		</div>
	);
}

export default App;
