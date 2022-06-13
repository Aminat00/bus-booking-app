import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { routes } from '../api/routes';

export default function BasicSelect() {
	const [age, setAge] = React.useState('');

	return (
		<Box sx={{ minWidth: 200 }}>
			(
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-label'>Country</InputLabel>

				<Select labelId='demo-simple-select-label' id='demo-simple-select'>
					<MenuItem value={10}></MenuItem>

					{/* <MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem> */}
				</Select>
			</FormControl>
		</Box>
	);
}
