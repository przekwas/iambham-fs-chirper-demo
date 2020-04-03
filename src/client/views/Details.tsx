import * as React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { chirpsService, IChirp } from '../utils';
import { FaBackward, FaForward } from 'react-icons/fa';
import ChirpCard from '../components/chirps/ChirpCard';

const Details: React.FC<DetailsProps> = (props) => {
	const { chirpid } = useParams();

	const [chirp, setChirp] = React.useState<IChirp>({
		id: 0,
		userid: 0,
		username: '',
		content: '',
		created_at: new Date()
	});

	React.useEffect(() => {
		(async () => {
			const chirp = await chirpsService.getOne(chirpid);
			setChirp(chirp);
		})();
	}, [chirpid]);

	return (
		<main className="container-fluid">
			<section className="row justify-content-center my-2">
				<ChirpCard fullSize chirp={chirp} />
			</section>
			<section className="d-flex justify-content-between align-items-center my-2">
				<Link to="/" className="btn btn-outline-primary btn-sm">
					<div className="d-flex align-items-center">
						<FaBackward className="mx-1" />
						<small className="mx-1">Back</small>
					</div>
				</Link>
				<Link to={`/editing/${chirp.id}`} className="btn btn-outline-warning btn-sm">
					<div className="d-flex align-items-center">
						<small className="mx-1">Edit</small>
						<FaForward className="mx-1" />
					</div>
				</Link>
			</section>
		</main>
	);
};

interface DetailsProps {}

export default Details;
