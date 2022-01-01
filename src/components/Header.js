import React from 'react';
import { Button } from 'react-bootstrap';

export default function Header() {
	return (
		<header className="text-center">
			<h1 className="header-title">Our Top Menu</h1>
			<p className="header-content">
				Sample text. Click to select the text box. Click again or double
				click to start editing the text.
			</p>
			<Button variant="outline-light">View More</Button>{' '}
		</header>
	);
}
