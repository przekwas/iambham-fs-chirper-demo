// I use this file to quickly copy/paste and make my components!
import * as React from 'react';

const Template: React.FC<TemplateProps> = props => {
	return (
		<main className="container">
			<section className="row justify-content-center my-2">
				<div className="col-md-6">
					<h1 className="text-center">Template Page</h1>
				</div>
			</section>
		</main>
	);
};

interface TemplateProps {}

export default Template;
