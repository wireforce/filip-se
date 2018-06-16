import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
	<div>
		<h1>Hi people</h1>
		<p>Welcome to filip.se.</p>
		<p>I'm about to launch something here.</p>
		<Link to="/page-2/">Go to page 2</Link>
	</div>
);

export default IndexPage;
