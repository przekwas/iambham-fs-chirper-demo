import * as React from 'react';
import { chirpsService } from '../utils';
import type { IChirp } from '../utils';
import ChirpCard from '../components/ChirpCard';

const Home: React.FC<HomeProps> = props => {
	const [chirps, setChirps] = React.useState<IChirp[]>([]);

	React.useEffect(() => {
		(async () => {
			const chirps = await chirpsService.getAll();
			setChirps(chirps);
		})();
	}, []);

	return (
		<main className="container-fluid">
			<section className="row my-2">
				{chirps.map(chirp => <ChirpCard key={`chirp-card-${chirp.id}`} chirp={chirp} />)}
			</section>
		</main>
	);
};

interface HomeProps {}

export default Home;