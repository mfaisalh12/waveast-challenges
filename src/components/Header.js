import React from 'react';

export default function Header() {
	return (
		<header className="container mt-6 text-center">
			<h1 className="font-oswald text-yellow-600 font-bold text-5xl">
				Lower sugar recipes
			</h1>
			<p className="font-sans mt-4 max-w-2xl mx-auto">
				As we go about our hectic, busy days, it can be very easy to
				resort to a sugary snack midway through the afternoon to keep
				your energy levels elevated.
			</p>
		</header>
	);
}
