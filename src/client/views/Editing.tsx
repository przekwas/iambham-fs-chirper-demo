import * as React from 'react';
import { useHistory, useParams } from 'react-router';
import EditForm from '../components/chirps/EditForm';
import { chirpsService } from '../utils';

const Editing: React.FC<EditingProps> = (props) => {
	const history = useHistory();
	const { chirpid } = useParams();
	const [info, setInfo] = React.useState<string>('');

	React.useEffect(() => {
		(async () => {
			const chirp = await chirpsService.getOne(chirpid);
			setInfo(chirp.content);
		})();
	}, [chirpid]);

	const editChirp = async (id: string, content: string) => {
		await chirpsService.edit(id, { content });
		history.push(`/details/${id}`);
	};

	const cutChirp = async (id: string) => {
		await chirpsService.destroy(id);
		history.push('/');
	};

	return (
		<main className="container">
			<section className="row justify-content-center my-2">
				<div className="col-md-8">
					<EditForm editChirp={editChirp} cutChirp={cutChirp} info={info} />
				</div>
			</section>
		</main>
	);
};

interface EditingProps {}

export default Editing;
