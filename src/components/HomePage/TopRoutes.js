import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/styles/mainpage.css';

function TopRoutes() {
	return (
		<div className='toproutes'>
			<h2>Top Cities and Routes</h2>
			<Tabs defaultActiveKey='profile' id='uncontrolled-tab-example' className='mb-3'>
				<Tab eventKey='home' title='Top Cities'>
					<Container className='toproutes_container'>
						<Row>
							<Col>
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
									<a>Berlin</a>{' '}
								</li>
								<li>
									<a>Munic</a>
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
									<a>Berlin</a>{' '}
								</li>
								<li>
									<a>Munic</a>
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
									<a>Berlin</a>{' '}
								</li>
								<li>
									<a>Munic</a>
								</li>
								<li>
									<a>Frankfurt</a>
								</li>
								<li>
									<a>Manheim</a>
								</li>
							</Col>
						</Row>
					</Container>
				</Tab>
				<Tab eventKey='profile' title='Top Routes'>
					<Container>
						<Row>
							<Col>
								<li>
									<a>Berlin-Munich</a>
								</li>
								<li>
									<a>Munich-Hamburg</a>
								</li>
								<li>
									<a>Frankfurt-Munich</a>
								</li>
								<li>
									<a>Manheim-Frankfurt</a>
								</li>
							</Col>
							<Col>
								<li>
									<a>Berlin-Munich</a>
								</li>
								<li>
									<a>Munich-Hamburg</a>
								</li>
								<li>
									<a>Frankfurt-Munich</a>
								</li>
								<li>
									<a>Manheim-Frankfurt</a>
								</li>
							</Col>
							<Col>
								<li>
									<a>Berlin-Munich</a>
								</li>
								<li>
									<a>Munich-Hamburg</a>
								</li>
								<li>
									<a>Frankfurt-Munich</a>
								</li>
								<li>
									<a>Manheim-Frankfurt</a>
								</li>
							</Col>
							<Col>
								<li>
									<a>Berlin-Munich</a>
								</li>
								<li>
									<a>Munich-Hamburg</a>
								</li>
								<li>
									<a>Frankfurt-Munich</a>
								</li>
								<li>
									<a>Manheim-Frankfurt</a>
								</li>
							</Col>
						</Row>
					</Container>
				</Tab>
			</Tabs>
		</div>
	);
}

export default TopRoutes;
