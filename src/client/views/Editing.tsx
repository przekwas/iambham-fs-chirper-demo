import * as React from 'react';
import { useParams } from 'react-router';

const Editing: React.FC<EditingProps> = props => {
	const { chirpid } = useParams();

	return (
		<main className="container">
			<section className="row justify-content-center my-2">
				<div className="col-md-6">
					<h1 className="text-center">Editing Page {chirpid}</h1>
				</div>
			</section>
		</main>
	);
};

interface EditingProps {}

export default Editing;
