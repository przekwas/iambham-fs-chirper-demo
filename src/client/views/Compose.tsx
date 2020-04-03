import * as React from 'react';

const Compose: React.FC<ComposeProps> = props => {
	return (
		<main className="container">
			<section className="row justify-content-center my-2">
				<div className="col-md-6">
					<h1 className="text-center">Compose Page</h1>
				</div>
			</section>
		</main>
	);
};

interface ComposeProps {}

export default Compose;