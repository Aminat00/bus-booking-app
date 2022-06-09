import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Radio } from '@mui/material';
export default function ControlledAccordions() {
	const [current, setCurrent] = useState(-1);
	const changeState = (panel) => (e, newValue) => {
		setCurrent(newValue ? panel : -1);
	};
	const [paymentType, setPaymentType] = useState('card');
	const handleType = (e) => {
		setPaymentType(e.target.value);
	};
	return (
		<div>
			<Accordion expanded={current === 0} onChange={changeState(0)}>
				<AccordionSummary expandIcon={<Radio value='card' checked={paymentType === 'card'} onChange={handleType} />}>
					<Typography>
						<strong>Credit Card</strong> <img src='https://shop.flixbus.co.uk/img/gate/credit_card_jcb.svg'></img>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={current === 1} onChange={changeState(1)}>
				<AccordionSummary expandIcon={<Radio value='googlepay' checked={paymentType === 'googlepay'} onChange={handleType} />}>
					<Typography>
						<strong>Google pay</strong> <img src='https://shop.flixbus.co.uk/img/gate/google-pay.svg' style={{ width: '70px', height: '40px' }}></img>
					</Typography>
				</AccordionSummary>
			</Accordion>
			<Accordion expanded={current === 2} onChange={changeState(2)}>
				<AccordionSummary expandIcon={<Radio value='paypal' checked={paymentType === 'paypal'} onChange={handleType} />}>
					<Typography>
						<strong>PayPal</strong>
						<img src='https://shop.flixbus.co.uk/img/gate/paypal.svg' style={{ width: '70px', height: '40px', marginLeft: '5px' }}></img>
					</Typography>
				</AccordionSummary>
			</Accordion>
		</div>
	);
}
