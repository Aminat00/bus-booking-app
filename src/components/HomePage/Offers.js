import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/mainpage.css';
import promo from '../../assets/images/promo.webp';

export default function Offers() {
	return (
		<div className='card_container'>
			<h2>Promo Offers</h2>
			<CardGroup>
				<Card className='card'>
					<Card.Img variant='top' src={promo} />
					<Card.Body>
						<Card.Title>Special Offer!</Card.Title>
						<Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
						<Button variant='primary'>Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant='top' src={promo} />
					<Card.Body>
						<Card.Title>Special Offer!</Card.Title>
						<Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
						<Button variant='primary'>Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img variant='top' src={promo} />
					<Card.Body>
						<Card.Title>Special Offer!</Card.Title>
						<Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
						<Button variant='primary'>Go somewhere</Button>
					</Card.Body>
				</Card>
			</CardGroup>
		</div>
	);
}
