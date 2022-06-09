import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Radio } from '@mui/material';
export default function ControlledAccordions() {
	return (
		<div>
			<Accordion>
				<AccordionSummary expandIcon={<Radio />}>
					<Typography>General settings</Typography>
					<Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<Radio />}>
					<Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<Radio />}>
					<Typography>Advanced settings</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
