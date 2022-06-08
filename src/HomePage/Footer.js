import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
	return (
		<div className='footer'>
			<Row>
				<Col>
					<li>
						<strong>Bus Travel</strong>
					</li>
					<li>
						<a>Berlin</a>{' '}
					</li>
					<li>
						<a>Munich</a>
					</li>
					<li>
						<a>Frankfurt</a>
					</li>
					<li>
						<a>Manheim</a>
					</li>
				</Col>
				<Col>
					<li>
						<strong>About us</strong>
					</li>
					<li>
						<a>Berlin</a>{' '}
					</li>
					<li>
						<a>Munich</a>
					</li>
					<li>
						<a>Frankfurt</a>
					</li>
					<li>
						<a>Manheim</a>
					</li>
					<li>
						<a>Frankfurt</a>
					</li>
					<li>
						<a>Manheim</a>
					</li>
				</Col>
				<Col>
					<li>
						<strong>Discover</strong>
					</li>
					<li>
						<a>Berlin</a>{' '}
					</li>
					<li>
						<a>Munich</a>
					</li>
					<li>
						<a>Frankfurt</a>
					</li>
					<li>
						<a>Manheim</a>
					</li>
				</Col>
				<Col>
					<li>
						<strong>Customer Service</strong>
					</li>
					<li>
						<a>Berlin</a>{' '}
					</li>
					<li>
						<a>Munich</a>
					</li>
					<li>
						<a>Frankfurt</a>
					</li>
					<li>
						<a>Manheim</a>
					</li>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4>Mobile App</h4>
					<a>
						<img style={{ width: '112px', padding: '10px' }} src='	https://cdn-cf.cms.flixbus.com/drupal-assets/footer/googleplay.svg' />
					</a>
					<a>
						<img style={{ width: '112px', padding: '10px' }} src='	https://cdn-cf.cms.flixbus.com/drupal-assets/footer/appstore.svg' />
					</a>
				</Col>
				<Col>
					<h4>Follow us on social media</h4>
					<a>
						<img style={{ width: '50px', padding: '10px' }} src='https://cdn-cf.cms.flixbus.com/drupal-assets/footer/facebook.svg' />
					</a>
					<a>
						<img style={{ width: '50px', padding: '10px' }} src='https://cdn-cf.cms.flixbus.com/drupal-assets/footer/insta.svg' />
					</a>
					<a>
						<img style={{ width: '50px', padding: '10px' }} src='https://cdn-cf.cms.flixbus.com/drupal-assets/footer/linkedin.svg' />
					</a>
					<a>
						<img style={{ width: '50px', padding: '10px' }} src='https://cdn-cf.cms.flixbus.com/drupal-assets/footer/twitter.svg' />
					</a>
				</Col>
			</Row>
		</div>
	);
}

export default Footer;
